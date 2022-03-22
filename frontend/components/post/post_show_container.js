import { connect } from "react-redux"
import PostShow from "./post_show"
import { fetchPost, createPost } from "../../actions/post_actions"

const mSTP = (state, ownProps) => {
  return {
    posts: Object.values(state.entities.posts),
    postId: ownProps.match.params.postId,
    users: state.entities.users,
    currentUser: state.entities.users[state.session.id]
  }
}

const mDTP = (dispatch) => {
  return {
    fetchPost: postId => dispatch(fetchPost(postId)),
    createPost: post => dispatch(createPost(post))
  }
}

export default connect(mSTP, mDTP)(PostShow)