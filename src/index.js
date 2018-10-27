import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {combineReducers} from 'redux';
import {createComment} from './actions';
import comments from './CommentsReducers';
import users from './UsersReducers';

const reducer = combineReducers({
  comments,
  users
});

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));

store.dispatch(createComment('Hello World!'));
store.dispatch(createComment('Redux works!'));

serviceWorker.unregister();