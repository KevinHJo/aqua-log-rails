import * as PostAPIUtil from '../util/api/post_api_util'

export const RECEIVE_POST = 'RECEIVE_POST';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const RECEIVE_POST_ERRORS = 'RECEIVE_POST_ERRORS';

// ACTION CREATORS
const receivePost = post => {
  return {
    type: RECEIVE_POST,
    post
  }
}

const receivePosts = data => {
  return {
    type: RECEIVE_POSTS,
    data
  }
}

const receivePostErrors = err => {
  return {
    type: RECEIVE_POST_ERRORS,
    err
  }
}

// THUNK ACTION CREATORS
export const fetchPosts = () => dispatch => {
  return PostAPIUtil.fetchPosts().then(data => {
    dispatch(receivePosts(data))
  })
}

export const fetchPost = postId => dispatch => {
  return PostAPIUtil.fetchPost(postId).then(post => {
    dispatch(receivePosts(post))
  })
}

export const createPost = post => dispatch => {
  return PostAPIUtil.createPost(post).then(post => {
    dispatch(receivePost(post))
  }, err => {
    dispatch(receivePostErrors(err.responseJSON))
  })
}