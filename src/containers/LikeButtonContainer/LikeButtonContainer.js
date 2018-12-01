import { connect } from 'react-redux';
import LikeButton from '../../components/LikeButton';
import { getPeeps, clearPeeps } from '../../actions/peepActions';

const mapStateToProps = state => ({
  peeps: state.reducePeeps.peeps,
});

const mapDispatchToProps = { getPeeps, clearPeeps };
const LikeButtonContainer = connect(mapStateToProps, mapDispatchToProps)(LikeButton);

export default LikeButtonContainer;
