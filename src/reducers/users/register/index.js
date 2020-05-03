import * as types from "../../../constants/types";

const register = ( state=[], action) => {
  switch(action.type) {
    case types.REGISTER:
      return state;
    default:
      return state;
  }
}

export default register;
