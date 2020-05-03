import * as types from "../../../constants/types";

const login = ( state=[], action) => {
  switch(action.type) {
    case types.LOGIN:
      return state;
    default:
      return state;
  }
}

export default login;
