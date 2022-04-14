import { combineReducers } from "redux";
import LogsReducer from "./logs_reducer";
import PostsReducer from "./posts_reducer";
import RemindersReducer from "./reminders_reducer";
import TanksReducer from "./tanks_reducer";
import UsersReducer from "./users_reducer";

const EntitiesReducer = combineReducers({
  users: UsersReducer,
  tanks: TanksReducer,
  logs: LogsReducer,
  posts: PostsReducer,
  reminders: RemindersReducer
});

export default EntitiesReducer