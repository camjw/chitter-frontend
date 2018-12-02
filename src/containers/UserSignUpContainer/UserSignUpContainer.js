import { connect } from 'react-redux';
import UserSignUp from '../../components/UserSignUp';
import { createUser } from '../../actions/userActions';

const mapStateToProps = state => ({
  signedIn: state.reduceUser.signedIn,
});
const mapDispatchToProps = { createUser };
const UserSignUpContainer = connect(mapStateToProps, mapDispatchToProps)(UserSignUp);

export default UserSignUpContainer;
