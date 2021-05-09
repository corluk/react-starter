import app_saga  from "./saga"
import AppReducer from "./redux"
import {createStore  ,  applyMiddleware} from "redux" 
import createSagaMiddleware from "redux-saga"
import initialState from "./initial"
 
const sagaMiddleware = createSagaMiddleware()
 
 
// Allow the passed state to be garbage-collected
 
const store = createStore(AppReducer,initialState,applyMiddleware(sagaMiddleware)) 
console.log(store.getState())
sagaMiddleware.run(app_saga)
 

export default store 