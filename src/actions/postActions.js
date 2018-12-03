import fetch from 'isomorphic-fetch'
import { getPeeps } from './peepActions'

export const ATTEMPT_POST = 'ATTEMPT_POST';
export const ERROR_POSTING = 'ERROR_POSTING'
export const POSTED_PEEP = 'POSTED_PEEP'

export const attemptPost = () => ({
  type: ATTEMPT_POST,
  isPosting: true,
});

export const errorPosting = () => ({
  type: ERROR_POSTING,
  inPosting: false,
  successfulPost: true
})

export const postedPeep = () => ({
  type: POSTED_PEEP,
  inPosting: false,
  successfulPost: true
})

export function postPeep(userID, sessionKey, peepContent) {
  console.log(sessionKey)
  return (dispatch) => {
    dispatch(attemptPost());
    return fetch('https://chitter-backend-api.herokuapp.com/peeps', {
      method: 'POST',
      body: JSON.stringify({ peep: { user_id: userID, body: peepContent } }),
      headers: {
        'Authorization': 'Token token=' + sessionKey,
        'Content-Type': 'application/json'
      },
    }).then(response => {
      if (!response.ok) {
        dispatch(errorPosting())
        throw Error(response.statusText)
      } else {
        return response.json()
      }
    })
      .then((json) => dispatch(postedPeep(json)))
      .then(() => dispatch(getPeeps()))
      .catch(error => error);
  };
}
