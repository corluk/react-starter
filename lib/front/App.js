"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRedux = require("react-redux");

var _front_store = _interopRequireDefault(require("./store/front_store"));

var _index = _interopRequireDefault(require("./components/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const App = () => {
  return /*#__PURE__*/_react.default.createElement(_reactRedux.Provider, {
    store: _front_store.default
  }, /*#__PURE__*/_react.default.createElement(_index.default, null), " ");
};

var _default = App;
exports.default = _default;