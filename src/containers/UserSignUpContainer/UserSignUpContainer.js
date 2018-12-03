import { connect } from 'react-redux';
import UserSignUp from '../../components/UserSignUp';
import { createUser, wrongConfirm } from '../../actions/userActions';

const mapStateToProps = state => ({
  signedIn: state.reduceUser.signedIn,
  incorrectConfirm: state.reduceUser.incorrectConfirm,
});
const mapDispatchToProps = { createUser, wrongConfirm };
const UserSignUpContainer = connect(mapStateToProps, mapDispatchToProps)(UserSignUp);

export default UserSignUpContainer;
