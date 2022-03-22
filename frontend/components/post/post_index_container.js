import { connect } from "react-redux"
import PostIndex from "./post_index"
import { fetchPosts } from "../../actions/post_actions"

const mSTP = (state) => {
  return {
    posts: Object.values(state.entities.posts),
    users: state.entities.users
  }
}

const mDTP = (dispatch) => {
  return {
    fetchPosts: () => dispatch(fetchPosts()),
  }
}

export default connect(mSTP, mDTP)(PostIndex)