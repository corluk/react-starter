import { combineReducers } from "redux";
import _DefaultReducer from "./default";
const rootReducer = combineReducers({
  default: _DefaultReducer,
});
export default rootReducer;
