import { RECEIVE_CURRENT_USER } from "../../actions/session_actions";
import { RECEIVE_POSTS, RECEIVE_POST } from "../../actions/post_actions";

const UsersReducer = (state = {}, action) => {
  Object.freeze(state);
  const nextState = Object.assign({}, state)

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      nextState[action.data.user.id] = action.data.user;
      return nextState;
    case RECEIVE_POSTS:
      action.data.users.forEach(user => nextState[user.id] = user);
      return nextState;
    case RECEIVE_POST:
      nextState[action.data.user.id] = action.data.user;
      return nextState;
    default:
      return state;
  }
}

export default UsersReducer;