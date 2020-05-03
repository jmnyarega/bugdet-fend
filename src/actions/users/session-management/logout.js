import { removeLocalStorageToken } from "../../../helpers/auth";
import * as types from "../../../constants/types";

const logoutAActionCreator = payload => {
  return {
    type: types.LOGOUT,
    payload,
  }
}

export function logoutUser() {
  return dispatch => {
    return dispatch(logoutAActionCreator(removeLocalStorageToken()))
  }
}
