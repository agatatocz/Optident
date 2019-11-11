import { FETCH_RATES, ADD_RATE } from "./types";
import axios from "../../settings/http";

export const fetchRates = () => dispatch => {
  return axios
    .get("/api/Rates")
    .then(response => {
      dispatch({
        type: FETCH_RATES,
        payload: response.data
      });
    })
    .catch(error => {
      alert(error);
    });
};
export const addRate = rate => dispatch => {
  return axios
    .post("/api/Rates", rate)
    .then(response => {
      dispatch({
        type: ADD_RATE,
        payload: response.data
      });
    })
    .catch(error => {
      alert(error);
    });
};
