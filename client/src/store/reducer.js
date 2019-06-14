import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import {addPosts , editPosts , searchPosts } from '../reducers/comment_reducer';
import commentList from '../reducers/home_reducer';

const comment = combineReducers({
  addPosts,
  editPosts
})

export default (history) => combineReducers({
  router: connectRouter(history),
  commentList,
  comment,
});
