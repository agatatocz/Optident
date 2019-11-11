import { LOGIN, LOGOUT } from "./types";
import axios from "../../settings/http";

export const logIn = (email, password) => dispatch => {
  return axios
    .post("/api/Users/CheckUser", { email, password })
    .then(() => {
      dispatch({ type: LOGIN });
    })
    .catch(error => {
      alert("Błędne dane logowania.");
    });
};

export const logOut = () => ({ type: LOGOUT });
