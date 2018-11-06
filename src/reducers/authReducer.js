import { AUTHENTICATE } from "../actions/types";

const authReducer = (isAuth = false, action) => {
  switch (action.type) {
    case AUTHENTICATE:
      return !isAuth;
    default:
      return isAuth;
  }
};

export default authReducer;
