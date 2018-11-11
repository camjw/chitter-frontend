import App from '../components/App'
import { connect } from 'react-redux';
import { getPeeps, clearPeeps } from '../actions';

const mapStateToProps = (state, ownProps) => {
  return ({
    peeps: state.reducePeeps.peeps,
    isFetching: state.reducePeeps.isFetching,
    receivedAt: state.reducePeeps.receivedAt
  })
};
const mapDispatchToProps = { getPeeps, clearPeeps };
const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;
