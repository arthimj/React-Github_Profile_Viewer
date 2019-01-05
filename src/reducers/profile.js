import {
  FETCH_DATA,
  FETCH_DATA_ERROR,
  FETCH_DATA_SUCCESS,
} from '../actions/types';

const INITIAL_STATE = {
  info: null,
  error: {response: {}, invalid: false},
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...state,
        error: false,
      };

    case FETCH_DATA_SUCCESS:
      return {
        info: action.payload.data,
        error: false,
      };

    case FETCH_DATA_ERROR:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
}
