import { connect } from 'react-redux';
import App from '../../components/App';
import { getPeeps, clearPeeps } from '../../actions/peepActions';

const mapStateToProps = state => ({
  peeps: state.reducePeeps.peeps,
  isFetching: state.reducePeeps.isFetching,
  receivedAt: state.reducePeeps.receivedAt,
});
const mapDispatchToProps = { getPeeps, clearPeeps };
const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;
