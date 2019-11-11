import {
  FETCH_POSITIONS,
  INCREMENT_POSITION,
  DECREMENT_POSITION,
  COUNT_SUM,
  SET_EDITING,
  DELETE_POSITION,
  UPDATE_POSITION,
  CREATE_POSITION
} from "./types";
import axios from "../../settings/http";

const getPositions = positions =>
  positions.map(position => ({ ...position, count: 0 }));

export const fetchPositions = () => dispatch => {
  return axios
    .get("/api/Positions")
    .then(response => {
      dispatch({
        type: FETCH_POSITIONS,
        payload: getPositions(response.data)
      });
    })
    .catch(error => {
      alert(error);
    });
};

export const incrementPosition = position => ({
  type: INCREMENT_POSITION,
  payload: position
});

export const decrementPosition = position => ({
  type: DECREMENT_POSITION,
  payload: position
});

export const countSum = () => ({
  type: COUNT_SUM
});

export const setEditing = (position, editing) => ({
  type: SET_EDITING,
  payload: { position, editing }
});

export const deletePosition = position => dispatch => {
  return axios
    .delete(`/api/Positions/${position.id}`)
    .then(() => {
      dispatch({
        type: DELETE_POSITION,
        payload: position
      });
    })
    .catch(error => {
      alert(error);
    });
};

export const updatePosition = position => dispatch => {
  return axios
    .put(`/api/Positions/${position.id}`, { ...position })
    .then(() => {
      dispatch({
        type: UPDATE_POSITION,
        payload: position
      });
    })
    .catch(error => {
      alert(error);
    });
};

export const createPosition = position => dispatch => {
  return axios
    .post(`/api/Positions/`, { ...position })
    .then(response => {
      dispatch({
        type: CREATE_POSITION,
        payload: response.data
      });
    })
    .catch(error => {
      alert(error);
    });
};
