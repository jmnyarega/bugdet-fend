// react libraries
import { combineReducers } from "redux";

// reducers
import login from "./users/login";
import register from "./users/register";
import activeUser from "./users/session-management";
import addExpense from "./expenses/add";
import expenses from "./expenses/get";
import categories from "./categories/get";
import addCategories from "./categories/add";

export default combineReducers({
  register,
  login,
  active_user: activeUser,
  expenses,
  addExpense,
  categories,
  addCategories,
});
