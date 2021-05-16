import { combineReducers } from "redux";
import _DefaultReducer from "./default";
import uiReducer from "./ui";
const rootReducer = combineReducers({
  default: _DefaultReducer,
  ui: uiReducer,
});
export default rootReducer;
