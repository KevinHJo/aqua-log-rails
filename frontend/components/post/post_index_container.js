import { connect } from "react-redux"
import PostIndex from "./post_index"
import { fetchPosts, createPost } from "../../actions/post_actions"

const mSTP = (state) => {
  return {
    posts: Object.values(state.entities.posts),
    users: state.entities.users,
    currentUser: state.entities.users[state.session.id]
  }
}

const mDTP = (dispatch) => {
  return {
    fetchPosts: () => dispatch(fetchPosts()),
    createPost: post => dispatch(createPost(post))
  }
}

export default connect(mSTP, mDTP)(PostIndex)