import {
  FETCH_POSITIONS,
  INCREMENT_POSITION,
  DECREMENT_POSITION,
  COUNT_SUM,
  SET_EDITING,
  DELETE_POSITION,
  UPDATE_POSITION,
  CREATE_POSITION
} from "../actions/types";

const initialState = {
  positions: [],
  sum: 0
};

let positions;

const changeCount = (positions, id, increment = true) => {
  const index = positions.findIndex(position => position.id === id);
  if (index > -1) {
    positions[index].count = increment
      ? positions[index].count + 1
      : positions[index].count - 1;
  }

  if (positions[index].count < 0) positions[index].count = 0;

  return positions;
};

const countSum = positions => {
  const products = [];
  positions.forEach(position => products.push(position.count * position.price));
  return products.length ? products.reduce((a, b) => a + b) : 0;
};

const setEditing = (positions, id, editing) => {
  const index = positions.findIndex(position => position.id === id);
  if (index > -1) positions[index].editing = editing;
  return positions;
};

const updatePosition = (positions, position) => {
  const index = positions.findIndex(item => item.id === position.id);
  if (index > -1) positions[index] = position;
  return positions;
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_POSITIONS:
      return { ...state, positions: action.payload };

    case INCREMENT_POSITION:
      positions = changeCount([...state.positions], action.payload.id);
      return { ...state, positions };

    case DECREMENT_POSITION:
      positions = changeCount([...state.positions], action.payload.id, false);
      return { ...state, positions };

    case COUNT_SUM:
      const sum = countSum([...state.positions]);
      return { ...state, sum };

    case SET_EDITING:
      positions = setEditing(
        [...state.positions],
        action.payload.position.id,
        action.payload.editing
      );
      return { ...state, positions };

    case DELETE_POSITION:
      positions = [...state.positions].filter(
        position => position.id !== action.payload.id
      );
      return { ...state, positions };

    case UPDATE_POSITION:
      positions = updatePosition([...state.positions], action.payload);
      return { ...state, positions };

    case CREATE_POSITION:
      positions = [...state.positions];
      positions.push({ ...action.payload, count: 0 });
      return { ...state, positions };

    default:
      return state;
  }
}
