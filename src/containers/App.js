import App from '../components/App'
import { connect } from 'react-redux';
import { getPeeps, clearPeeps } from '../actions';

const mapStateToProps = (state, ownProps) => ({ peeps: state.peeps });
const mapDispatchToProps = { getPeeps, clearPeeps };
const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;
