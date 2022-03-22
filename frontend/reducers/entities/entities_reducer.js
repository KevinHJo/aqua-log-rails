import { combineReducers } from "redux";
import LogsReducer from "./logs_reducer";
import PostsReducer from "./posts_reducer";
import TanksReducer from "./tanks_reducer";
import UsersReducer from "./users_reducer";

const EntitiesReducer = combineReducers({
  users: UsersReducer,
  tanks: TanksReducer,
  logs: LogsReducer,
  posts: PostsReducer
});

export default EntitiesReducer