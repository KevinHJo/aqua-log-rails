import { combineReducers } from "redux";
import TanksReducer from "./tanks_reducer";
import UsersReducer from "./users_reducer";

const EntitiesReducer = combineReducers({
  users: UsersReducer,
  tanks: TanksReducer
});

export default EntitiesReducer