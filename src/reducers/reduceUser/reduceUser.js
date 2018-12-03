import * as userActions from '../../actions/userActions';

export default function reduceUser(state = [], action) {
  console.log(action);
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
    case userActions.CREATED_USER:
      return {
        isCreating: action.isCreating,
        signedIn: false,
        createdUser: action.createdUser,
      };
    case userActions.SIGNED_IN_USER:
      return {
        isCreating: action.isCreating,
        signedIn: true,
        currentUserID: action.currentUserID,
        currentSession: action.currentSession,
        currentUser: state.currentUser,
      };
    case userActions.ATTEMPT_SIGN_IN:
      return {
        isCreating: action.isCreating,
        signedIn: false,
        currentUser: action.currentUser,
      };
    case userActions.INCORRECT_SIGN_IN:
      return {
        isCreating: action.isCreating,
        signedIn: false,
        currentUser: action.currentUser,
        incorrectSignIn: action.incorrectSignIn
      };
    default:
      return state;
  }
}
