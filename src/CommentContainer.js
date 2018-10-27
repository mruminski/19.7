import {connect} from 'react-redux';
import Comment from './Comment';
import {likeComment, dislakeComment} from './actions';

const mapDispatchToProps = dispatch => ({
  likeComment: (id) => dispatch(likeComment(id)),
  dislakeComment: (id) => dispatch(dislakeComment(id))
});

export default connect(null, mapDispatchToProps)(Comment)
