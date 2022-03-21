import { combineReducers } from "redux";
import ErrorsReducer from "./errors/errors_reducer";
import SessionReducer from "./session/session_reducer";
import EntitiesReducer from "./entities/entities_reducer";

const RootReducer = combineReducers({
  entities: EntitiesReducer,
  session: SessionReducer,
  errors: ErrorsReducer
})

export default RootReducer;