import { http, addTokenToLocalStorage } from "../../../helpers/auth";
import * as types from "../../../constants/types";

const loginActionCreator = payload => {
  return {
    type: types.LOGIN,
    payload
  }
}

export function login(data) {
  return dispatch => {
    http().post(`http://localhost:3005/auth/login`, data).then(res => {
      addTokenToLocalStorage(res.data.token)
      return dispatch(loginActionCreator(res.data));
    }).catch(error => {
      return dispatch(loginActionCreator({message: error.message}));
    });
  }
}
