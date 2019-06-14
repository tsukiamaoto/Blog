import { take, put, call, fork, select, takeEvery, all } from 'redux-saga/effects' 
import * as actions from '../actions'
import * as types from '../actions/types'
import { postApi } from '../services/post'

export function* getAllPosts(){
  const results = yield call(postApi.fetchAllPosts)
  const posts = results.posts
  yield put(actions.receiveAllPosts(posts))
}

export function* wathcGetAllPosts() {
  yield takeEvery(types.FETCH_ALL_POSTS, getAllPosts)
}

export default function* root() {
  yield all([
    wathcGetAllPosts()
  ])
}