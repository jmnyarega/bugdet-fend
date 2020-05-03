import { http } from "../../../helpers/auth";
import * as types from "../../../constants/types";

const getCategoryActionCreator = payload => {
  return {
    type: types.GET_CATEGORY,
    payload
  }
}

export function getCategory(data) {
  return dispatch => {
    http().post(`http://localhost:3005/categories`, data).then(res => {
      return dispatch(getCategoryActionCreator(res.data));
    }).catch(error => {
      return dispatch(getCategoryActionCreator({message: error.message}));
    });
  }
}
