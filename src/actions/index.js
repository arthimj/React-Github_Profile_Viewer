import axios from 'axios';
import { FETCH_DATA, FETCH_DATA_ERROR, FETCH_DATA_SUCCESS } from './types';

export const ROOT_URL = 'https://api.github.com/users'

// Fetches and dispatches data using redux-thunk...
export const fetchData = user => (dispatch) => {
  dispatch({
    type: FETCH_DATA
  });

  return axios.get(`${ROOT_URL}/${user}`)
    .then(response => dispatch({
      type: FETCH_DATA_SUCCESS,
      payload: response
    }))

    .catch(error => dispatch({
      type: FETCH_DATA_ERROR,
      payload: {response: error, invalid: true}
    })
  );
};