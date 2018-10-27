import React from 'react';

const Comment = ({text, thumb, id, likeComment}) => 
  <li> {text} <span>likes: {thumb} </span> <button onClick={() => likeComment(id)}>Like it</button></li>;

export default Comment;
