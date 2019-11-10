import { FETCH_RECEIPTS } from "../actions/types";

const initialState = [];

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_RECEIPTS:
      return action.payload;

    default:
      return state;
  }
}
