import { FETCH_RATES, ADD_RATE } from "../actions/types";

const initialState = [];

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_RATES:
      return action.payload;

    case ADD_RATE:
      const rates = [...state];
      rates.push(action.payload);
      return rates;

    default:
      return state;
  }
}
