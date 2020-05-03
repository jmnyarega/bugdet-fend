import * as types from "../../../constants/types";

const getCategory = ( state=[], action) => {
  switch(action.type) {
    case types.GET_CATEGORY:
      return state;
    default:
      return state;
  }
}

export default getCategory;
