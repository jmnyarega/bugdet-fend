import { http, addTokenToLocalStorage } from "../../../helpers/auth";
import * as types from "../../../constants/types";

const registerActionCreator = payload => {
  return {
    type: types.REGISTER,
    payload
  }
}

export function register(data) {
  return dispatch => {
    http().post(`http://localhost:3005/auth/register`, data).then(res => {
      addTokenToLocalStorage(res.data.token)
      return dispatch(registerActionCreator(res.data));
    }).catch(error => {
      return dispatch(registerActionCreator({message: error.message}));
    });
  }
}
