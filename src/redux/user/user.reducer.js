/* user action types */
import UserActionTypes from "./user.types";
/* estado inicial */
const INITIAL_STATE = { currentUser: null, error: null };

/* user reducer */
const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    /* inicio sesion correctamente */
    case UserActionTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        error: null,
        currentUser: action.payload,
      };
    /* hay algun error */
    case UserActionTypes.SIGN_UP_FAILURE:
    case UserActionTypes.SIGN_OUT_FAILURE:
    case UserActionTypes.SIGN_IN_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    /* cerro sesion correctamente */
    case UserActionTypes.SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
        error: null,
      };
    default:
      return state;
  }
};

export default userReducer;
