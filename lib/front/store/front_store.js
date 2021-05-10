"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _saga = _interopRequireDefault(require("./saga"));

var _redux = _interopRequireDefault(require("./redux"));

var _redux2 = require("redux");

var _reduxSaga = _interopRequireDefault(require("redux-saga"));

var _initial = _interopRequireDefault(require("./initial"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const sagaMiddleware = (0, _reduxSaga.default)(); // Allow the passed state to be garbage-collected

const store = (0, _redux2.createStore)(_redux.default, _initial.default, (0, _redux2.applyMiddleware)(sagaMiddleware));
console.log(store.getState());
sagaMiddleware.run(_saga.default);
var _default = store;
exports.default = _default;