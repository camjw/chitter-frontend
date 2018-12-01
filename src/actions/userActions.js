import fetch from 'isomorphic-fetch';

export const ADD_USER = 'ADD_USER';
export const SIGN_IN_USER = 'SIGN_IN_USER';
export const TAKEN_HANDLE = 'TAKEN_HANDLE';


export const addUser = () => ({
  type: ADD_USER,
  isCreating: true,
});

export const signInUser = user => ({
  type: SIGN_IN_USER,
  isCreating: false,
  currentUser: user.handle,
});

export const takenHandle = () => ({
  type: TAKEN_HANDLE,
  isCreating: false,
});


export function createUser(handle, password) {
  return (dispatch) => {
    dispatch(addUser());
    return fetch('https://chitter-backend-api.herokuapp.com/users', {
      method: 'POST',
      body: JSON.stringify({ user: { handle, password } }),
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
    }).then(response => response.json())
      .then((json) => {
        if (json.handle[0] === 'Handle already taken') {
          dispatch(takenHandle());
        } else {
          dispatch(signInUser(json));
        }
      });
  };
}
