import {connect} from 'react-redux';
import Comment from './Comment';
import {likeComment, dislakeComment, removeComment, createComment} from './actions';

const mapDispatchToProps = dispatch => ({
  createComment: () => dispatch(createComment(window.prompt('Enter your comment'))),
  likeComment: (id) => dispatch(likeComment(id)),
  dislakeComment: (id) => dispatch(dislakeComment(id)),
  removeComment: (id) => dispatch(removeComment(id))
});

export default connect(null, mapDispatchToProps)(Comment)
