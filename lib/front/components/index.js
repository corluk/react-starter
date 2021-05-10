"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRedux = require("react-redux");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Component = () => {
  const handleClick = () => {
    console.log("clicked");
    console.log(store.getState());
  };

  const store = (0, _reactRedux.useStore)();
  const state = JSON.stringify(store.getState());
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("button", {
    onClick: () => handleClick()
  }, " Click "), /*#__PURE__*/_react.default.createElement("h1", null, state));
};

var _default = Component;
exports.default = _default;