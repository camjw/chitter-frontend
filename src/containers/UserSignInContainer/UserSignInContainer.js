import { connect } from 'react-redux';
import UserSignIn from '../../components/UserSignIn';
import { signInUser } from '../../actions/userActions';

const mapStateToProps = state => ({
  currentUser: state.reduceUser.currentUser,
  sessionID: state.reduceUser.sessionID,
});
const mapDispatchToProps = { signInUser };
const UserSignInContainer = connect(mapStateToProps, mapDispatchToProps)(UserSignIn);

export default UserSignInContainer;
