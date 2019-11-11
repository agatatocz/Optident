import { FETCH_RECEIPTS } from "./types";
import axios from "../../settings/http";

export const fetchReceipts = () => dispatch => {
  return axios
    .get("/api/Receipts")
    .then(response => {
      dispatch({
        type: FETCH_RECEIPTS,
        payload: response.data
      });
    })
    .catch(error => {
      alert(error);
    });
};

export const createReceipt = receipt => dispatch => {
  return axios
    .post("/api/Receipts", receipt)
    .then(() => {
      dispatch(fetchReceipts());
      alert(
        'Pomyślnie utworzono nowy rachunek. Możesz zobaczyć go w zakładce "Rachunki".'
      );
    })
    .catch(error => {
      alert(error);
    });
};
