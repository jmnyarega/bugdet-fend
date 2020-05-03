import { decodeUser, removeLocalStorageToken } from "../../../helpers/auth";
import * as types from "../../../constants/types";

const getUserDataActionCreator = payload => {
  return {
    type: types.ACTIVE_USER,
    payload,
  }
}

export function getUserData() {
  return dispatch => {
    return dispatch(getUserDataActionCreator(decodeUser()))
  }
}


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
