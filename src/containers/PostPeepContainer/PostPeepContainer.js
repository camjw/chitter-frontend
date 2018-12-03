import { connect } from 'react-redux';
import PostPeep from '../../components/PostPeep';
import { postPeep } from '../../actions/postActions';

const mapStateToProps = state => ({
  currentSession: state.reduceUser.currentSession,
  currentUserID: state.reduceUser.currentUserID
});

const mapDispatchToProps = { postPeep };
const PostPeepContainer = connect(mapStateToProps, mapDispatchToProps)(PostPeep);

export default PostPeepContainer;
