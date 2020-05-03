import * as types from "../../../constants/types";

const sessionManagement = ( state=[], action) => {
  switch(action.type) {
    case types.ACTIVE_USER:
      return action.payload
    case types.LOGOUT:
      return [];
    default:
      return state;
  }
}

export default sessionManagement;
