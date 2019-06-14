import * as types from '../actions/types'

const initialState = {
  loading: true ,
  error: false ,
  posts: [] ,
};

const posts = ( state = initialState , action) => {
  switch(action.type){
    case types.FETCH_ALL_POSTS:
      return Object.assign({} , state ,
        {
          loading: true ,
        });
    case types.FETCH_ALL_POSTS_FAILED:
      return Object.assign({} , state ,
        {
          loading: false ,
          error: true ,
        });
    case types.RECEIVE_ALL_POSTS:
      return Object.assign({} , state ,                
        {
          loading: false ,
          posts: action.posts ,
        });
    default:
      return state;
  }
};

export default posts;

