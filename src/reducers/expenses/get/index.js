import * as types from "../../../constants/types";

const expense = ( state=[], action) => {
  switch(action.type) {
    case types.GET_EXPENSES:
      return action.payload;
    default:
      return state;
  }
}

export default expense;
