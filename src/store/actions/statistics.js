import { FETCH_STATISTICS } from "./types";
import axios from "../../settings/http";

export const fetchStatistics = () => dispatch => {
  return axios
    .get("/api/Stats")
    .then(response => {
      dispatch({
        type: FETCH_STATISTICS,
        payload: response.data
      });
    })
    .catch(error => {
      alert(error);
    });
};
