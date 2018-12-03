import { connect } from 'react-redux';
import App from '../../components/App';
import { getPeeps, clearPeeps } from '../../actions/peepActions';

const mapStateToProps = state => ({
  peeps: state.reducePeeps.peeps,
  isFetching: state.reducePeeps.isFetching,
  receivedAt: state.reducePeeps.receivedAt,
  currentUser: state.reduceUser.currentUser,
  currentUserID: state.reduceUser.currentUserID,
  currentSession: state.reduceUser.currentSession,
  createdUser: state.reduceUser.createdUser,
  incorrectSignIn: state.reduceUser.incorrectSignIn
});
const mapDispatchToProps = { getPeeps, clearPeeps };
const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;
