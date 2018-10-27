import React from 'react';

const Comment = ({text, thumb, id, likeComment, dislakeComment}) => 
  <li> 
    {text}
    <span>likes: {thumb} </span>
    <button onClick={() => likeComment(id)}>Like it</button>
    <button onClick={() => dislakeComment(id)}>Dislike it</button>
  </li>;

export default Comment;
