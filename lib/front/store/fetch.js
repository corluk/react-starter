"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchDefault = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const baseURL = "http://localhost";

_axios.default.create({
  baseURL: baseURL
});

const fetchDefault = async () => {
  const response = await _axios.default.get("/");
  return response.data;
};

exports.fetchDefault = fetchDefault;