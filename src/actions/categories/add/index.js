import { http } from "../../../helpers/auth";
import * as types from "../../../constants/types";

const addCategoryActionCreator = payload => {
  return {
    type: types.ADD_CATEGORY,
    payload
  }
}

export function addCategory(data) {
  return dispatch => {
    http().post(`http://localhost:3005/category`, data).then(res => {
      return dispatch(addCategoryActionCreator(res.data));
    }).catch(error => {
      return dispatch(addCategoryActionCreator({message: error.message}));
    });
  }
}
