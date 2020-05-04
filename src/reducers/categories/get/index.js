import * as types from "../../../constants/types";

const getCategory = ( state=[], action) => {
  switch(action.type) {
    case types.GET_CATEGORY:
      return action.payload;
    default:
      return state;
  }
}

export default getCategory;
