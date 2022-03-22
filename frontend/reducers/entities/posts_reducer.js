import { RECEIVE_POST, RECEIVE_POSTS } from "../../actions/post_actions";

const PostsReducer = (state={}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_POST:
      nextState[action.data.post.id] = action.data.post;
      return nextState;
    case RECEIVE_POSTS:
      nextState = {};
      action.data.posts.forEach(post => nextState[post.id] = post);
      return nextState;
    default:
      return state;
  }
}

export default PostsReducer;