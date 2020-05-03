import { http } from "../../../helpers/auth";
import * as types from "../../../constants/types";

const getUserExpensesActionCreator = payload => {
  return {
    type: types.GET_EXPENSES,
    payload
  }
}

export function getUserExpenses(params) {
  console.log(params);
  return dispatch => {
    http().get(`http://localhost:3005/expense`,params).then(res => {
      return dispatch(getUserExpensesActionCreator(res.data));
    }).catch(error => {
      return dispatch(getUserExpensesActionCreator({message: error.message}));
    });
  }
}
