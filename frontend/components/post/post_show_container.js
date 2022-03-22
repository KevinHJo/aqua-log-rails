import { connect } from "react-redux"
import PostShow from "./post_show"
import { fetchPost } from "../../actions/post_actions"

const mSTP = (state, ownProps) => {
  return {
    posts: Object.values(state.entities.posts),
    postId: ownProps.match.params.postId
  }
}

const mDTP = (dispatch) => {
  return {
    fetchPost: postId => dispatch(fetchPost(postId)),
  }
}

export default connect(mSTP, mDTP)(PostShow)