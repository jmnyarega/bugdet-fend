import * as types from "../../../constants/types";

const addExpense = ( state=[], action) => {
  switch(action.type) {
    case types.ADD_EXPENSES:
      return action.payload
    default:
      return state;
  }
}

export default addExpense;
