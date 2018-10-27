import {connect} from 'react-redux';
import Comment from './Comment';
import {likeComment, dislakeComment, removeComment} from './actions';

const mapDispatchToProps = dispatch => ({
  likeComment: (id) => dispatch(likeComment(id)),
  dislakeComment: (id) => dispatch(dislakeComment(id)),
  removeComment: (id) => dispatch(removeComment(id))
});

export default connect(null, mapDispatchToProps)(Comment)
