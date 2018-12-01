import fetch from 'isomorphic-fetch';

export const ADD_PEEPS = 'ADD_PEEPS';
export const REQUEST_PEEPS = 'REQUEST_PEEPS';
export const CLEAR_PEEPS = 'CLEAR_PEEPS';

export const addPeeps = peeps => ({
  type: ADD_PEEPS,
  isFetching: false,
  receivedAt: Date.now(),
  peeps,
});

export const requestPeeps = () => ({
  type: REQUEST_PEEPS,
  isFetching: true,
});

export const clearPeeps = () => ({
  type: CLEAR_PEEPS,
  isFetching: false,
});

export function getPeeps() {
  return (dispatch) => {
    dispatch(requestPeeps());
    return fetch('https://chitter-backend-api.herokuapp.com/peeps')
      .then(response => response.json())
      .then(json => dispatch(addPeeps(json)));
  };
}
