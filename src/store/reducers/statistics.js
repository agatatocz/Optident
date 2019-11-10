import { FETCH_STATISTICS } from "../actions/types";

const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_STATISTICS:
      return action.payload;

    default:
      return state;
  }
}
