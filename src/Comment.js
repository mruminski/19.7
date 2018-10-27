import React from 'react';

const Comment = ({text, thumb, id, likeComment, dislakeComment, 
  removeComment, createComment, editComment}) => 
  <li> 
    {text}
    <span> likes: {thumb} </span>
    <button onClick={() => createComment(id)}>Add a new comment</button>
    <button onClick={() => editComment(id)}>Edit comment</button>
    <button onClick={() => likeComment(id)}>Like it</button>
    <button onClick={() => dislakeComment(id)}>Dislike it</button>
    <button onClick={() => removeComment(id)}>Delete</button>
  </li>;

export default Comment;
