import React from 'react';

const Comment = ({text, thumb, id, likeComment, dislakeComment, removeComment}) => 
  <li> 
    {text}
    <span>likes: {thumb} </span>
    <button onClick={() => likeComment(id)}>Like it</button>
    <button onClick={() => dislakeComment(id)}>Dislike it</button>
    <button onClick={() => removeComment(id)}>Delete</button>
  </li>;

export default Comment;
