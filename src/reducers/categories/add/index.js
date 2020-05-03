import * as types from "../../../constants/types";

const addCategory = ( state=[], action) => {
  switch(action.type) {
    case types.ADD_CATEGORY:
      return action.payload;
    default:
      return state;
  }
}

export default addCategory;
