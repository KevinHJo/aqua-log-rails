import { combineReducers } from "redux";
import LogsReducer from "./logs_reducer";
import TanksReducer from "./tanks_reducer";
import UsersReducer from "./users_reducer";

const EntitiesReducer = combineReducers({
  users: UsersReducer,
  tanks: TanksReducer,
  logs: LogsReducer
});

export default EntitiesReducer