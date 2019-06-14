import * as types from'./types'

export const fetchAllPosts = () => {
  return {
    type: types.FETCH_ALL_POSTS,
  }
}

export const receiveAllPosts = (posts) => {
  return {
    type: types.RECEIVE_ALL_POSTS,
    posts
  }
}

export const requestFailed = (err) => {
  return {
    type: types.FETCH_ALL_POSTS_FAILED
  }
}


