export const addPeeps = peeps => ({
  type: 'ADD_PEEPS',
  isFetching: false,
  receivedAt: Date.now(),
  peeps,
});

export const requestPeeps = () => ({
  type: 'REQUEST_PEEPS',
  isFetching: true
});

export const clearPeeps = () => ({ type: 'CLEAR_PEEPS' });

export function getPeeps() {
  return dispatch => {
    dispatch(requestPeeps())
    return fetch(`https://chitter-backend-api.herokuapp.com/peeps`)
      .then(response => response.json())
      .then(json => dispatch(addPeeps(json)))
  }
}
