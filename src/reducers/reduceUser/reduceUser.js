import * as userActions from '../../actions/userActions';

export default function reduceUser(state = [], action) {
  console.log(action)
  switch (action.type) {
    case userActions.ADD_USER:
      return {
        isCreating: action.isCreating,
        signedIn: false,
      };
    case userActions.TAKEN_HANDLE:
      return {
        isCreating: action.isCreating,
        signedIn: false,
        takenHandle: true,
      };
    case userActions.SIGN_IN_USER:
      return {
        isCreating: action.isCreating,
        signedIn: true,
        currentUser: action.currentUser,
      };
    default:
      return state;
  }
}
