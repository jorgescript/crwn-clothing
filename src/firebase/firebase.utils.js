import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBlNFhQ3cmZcSluDUJ9vNZshj8gmXZOXw4",
  authDomain: "crwn-db-40a0f.firebaseapp.com",
  databaseURL: "https://crwn-db-40a0f.firebaseio.com",
  projectId: "crwn-db-40a0f",
  storageBucket: "crwn-db-40a0f.appspot.com",
  messagingSenderId: "774856137282",
  appId: "1:774856137282:web:836b4db6cf120151e7ebdb",
};

/* funcion para guardar el usuario en la BD */
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  // console.log({ userAuth });
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  // console.log({ userRef });
  const snapshot = await userRef.get();
  // console.log({ snapshot });
  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({ displayName, email, createdAt, ...additionalData });
    } catch (error) {
      console.log(`Error creating user ${error.message}`);
    }
  }
  return userRef;
};

/* funcion para añadir collecciones */
export const addCollectionsAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);
  //console.log(collectionRef);
  const batch = firestore.batch();
  objectsToAdd.forEach((obj) => {
    const newDocRef = collectionRef.doc();
    //console.log(newDocRef);
    //console.log(obj);
    batch.set(newDocRef, obj);
  });
  return await batch.commit();
};

/* funcion para traer las colecciones de firebase */
export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollections = collections.docs.map((doc) => {
    const { title, items } = doc.data();
    return {
      id: doc.id,
      routName: encodeURI(title.toLowerCase()),
      title,
      items,
    };
  });
  //console.log(transformedCollections);
  return transformedCollections.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

/* modal para inisiar sesion con google */
export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });

/* cheacar si hay un usuario logeado */
export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsuscribe = auth.onAuthStateChanged((userAuth) => {
      unsuscribe();
      resolve(userAuth);
    }, reject);
  });
};

export default firebase;
