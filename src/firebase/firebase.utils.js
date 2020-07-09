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

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

const facebookProvider = new firebase.auth.FacebookAuthProvider();
facebookProvider.setCustomParameters({ prompt: "select_account" });
export const signInWithFacebook = () => auth.signInWithPopup(facebookProvider);

export default firebase;
