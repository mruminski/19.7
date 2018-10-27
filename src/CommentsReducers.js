import {CREATE_COMMENT, REMOVE_COMMENT, EDIT_COMMENT, LIKE_COMMENT, DISLIKE_COMMENT} from './actions';

function comments(state = [], action) {
  switch (action.type) {
    case CREATE_COMMENT:
      return [{
        id: action.id,
        text: action.text,
        thumb: 0
      }, ...state];
    case REMOVE_COMMENT:
      return [{
        comments: state.filter(comment => comment.id !== action.id)
      }];
    case EDIT_COMMENT:
      return [{
        id: comments.id,
        text: action.text
      }];
    case LIKE_COMMENT:
      return state.map(comment => {
        if (comment.id === action.id) {
          return {...comment, thumb: comment.thumb + 1}
        }
        return comment;
      });
    case DISLIKE_COMMENT:
      return state.map(comment => {
        if (comment.id === action.id) {
          return {...comment, likes: comment.thumb - 1}
        }
        return comment;
      });
    default:
      return state;
  }
}

export default comments;