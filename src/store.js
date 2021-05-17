import sagaRunner from "./sagas/root";
import RootReducer from "./reducers/root";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

const initialState = {};

const sagaMiddleware = createSagaMiddleware();

// Allow the passed state to be garbage-collected

const store = createStore(
  RootReducer,
  initialState,
  applyMiddleware(sagaMiddleware)
);

sagaRunner(sagaMiddleware);

export default store;
