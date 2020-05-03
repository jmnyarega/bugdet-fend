import axios from "axios";
import jwtDecode from "jwt-decode";

export const addTokenToLocalStorage = ( token, context=window ) => {
  console.log("Why")
  const { localStorage } = context;
  localStorage.setItem("jwt", token);
}

export const removeLocalStorageToken = ( context=window ) => {
  const { localStorage } = context;
  localStorage.removeItem("jwt");
}

export const http = ( context=window ) => {
  const { localStorage } = context;
  const token = localStorage.getItem("jwt");
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  return axios;
}

export const decodeUser = (context=window) => {
  const { localStorage } = context;
  const token = localStorage.getItem("jwt");
  const user = token ? jwtDecode(token) : {};
  return user;
}
