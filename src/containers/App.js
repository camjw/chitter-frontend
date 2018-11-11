import App from '../components/App'
import { connect } from 'react-redux';
import { getPeeps, clearPeeps } from '../actions';

const mapStateToProps = (state, ownProps) => {
  console.log('STATE')
  console.log(state)
  return ({ peeps: state.reducePeeps.peeps, isFetching: state.reducePeeps.isFetching })
};
const mapDispatchToProps = { getPeeps, clearPeeps };
const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;
