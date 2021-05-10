"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _effects = require("redux-saga/effects");

var _fetch = require("./fetch");

var _redux = require("./redux");

function* fetch1() {
  try {
    const data = yield (0, _effects.call)(_fetch.fetchDefault);
    (0, _effects.put)({
      type: _redux.DEFAULT_ACTION,
      payload: data
    });
  } catch (err) {
    (0, _effects.put)({
      type: _redux.DEFAULT_ERROR
    });
  }
}

function* gen() {
  yield (0, _effects.takeLatest)(_redux.DEFAULT_ACTION, fetch1);
}

var _default = gen;
exports.default = _default;