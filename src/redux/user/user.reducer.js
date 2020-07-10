/* action types */
import UserActionTypes from "./user.types";
/* estado inicial */
const INITIAL_STATE = { currentUser: null };

/* user reducer */
const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
