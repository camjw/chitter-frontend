import fetch from 'isomorphic-fetch';

export const ADD_USER = 'ADD_USER';
export const ATTEMPT_SIGN_IN = 'ATTEMPT_SIGN_IN';
export const SIGNED_IN_USER = 'SIGNED_IN_USER';
export const TAKEN_HANDLE = 'TAKEN_HANDLE';
export const CREATED_USER = 'CREATED_USER';
export const INCORRECT_SIGN_IN = 'INCORRECT_SIGN_IN';
export const INCORRECT_CONFIRM = 'INCORRECT_CONFIRM';

export const addUser = () => ({
  type: ADD_USER,
  isCreating: true,
});

export const attemptSignIn = handle => ({
  type: ATTEMPT_SIGN_IN,
  isCreating: false,
  isSigningIn: true,
  currentUser: handle,
});

export const signedInUser = userData => ({
  type: SIGNED_IN_USER,
  isCreating: false,
  currentUserID: userData.user_id,
  currentSession: userData.session_key,
});

export const takenHandle = () => ({
  type: TAKEN_HANDLE,
  isCreating: false,
});

export const createdUser = userData => ({
  type: CREATED_USER,
  isCreating: false,
  createdUser: userData.handle,
});

export const incorrectSignIn = () => ({
  type: INCORRECT_SIGN_IN,
  isCreating: false,
  currentUser: null,
  incorrectSignIn: true,
});

export const incorrectConfirm = () => ({
  type: INCORRECT_CONFIRM,
  incorrectConfirm: true,
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
          dispatch(createdUser(json));
        }
      });
  };
}

export function signInUser(handle, password) {
  return (dispatch) => {
    dispatch(attemptSignIn(handle));
    return fetch('https://chitter-backend-api.herokuapp.com/sessions', {
      method: 'POST',
      body: JSON.stringify({ session: { handle, password } }),
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
    }).then((response) => {
      if (!response.ok) {
        dispatch(incorrectSignIn());
        throw Error(response.statusText);
      } else {
        return response.json();
      }
    })
      .then((json) => {
        dispatch(signedInUser(json));
      })
      .catch(error => error);
  };
}

export function wrongConfirm() {
  return (dispatch) => {
    dispatch(incorrectConfirm());
  };
}
