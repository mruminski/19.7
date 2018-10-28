import React from 'react';
import './App.css';
import CommentsListContainer from './CommentsListContainer';
import DevTools from './DevTools';

const App = () => (
  <div className='App'>
  Comments list
    <CommentsListContainer/>
    <DevTools/>
  </div>
);

export default App;
