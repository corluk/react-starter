import appSaga from "./saga";
import AppReducer from "./redux";
import {createStore, applyMiddleware} from "redux";
import createSagaMiddleware from "redux-saga";
import initial from "./initial";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(AppReducer, initial, applyMiddleware(sagaMiddleware));
console.log(store.getState());
sagaMiddleware.run(appSaga);


export default store;
