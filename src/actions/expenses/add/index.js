import { http } from "../../../helpers/auth";
import * as types from "../../../constants/types";

const addUserExpensesActionCreator = payload => {
  return {
    type: types.ADD_EXPENSES,
    payload
  }
}

export function addUserExpenses(data) {
  return dispatch => {
    http().post(`http://localhost:3005/expense`, data).then(res => {
      return dispatch(addUserExpensesActionCreator(res.data));
    }).catch(error => {
      return dispatch(addUserExpensesActionCreator({message: error.message}));
    });
  }
}
