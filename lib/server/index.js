"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.listen = exports.createServer = void 0;

var _express = _interopRequireDefault(require("express"));

var _react = _interopRequireDefault(require("react"));

var _path = require("path");

var _back_store = _interopRequireDefault(require("../front/store/back_store"));

var _server = _interopRequireDefault(require("react-dom/server"));

var _reactRouterDom = require("react-router-dom");

var _App = _interopRequireDefault(require("../front/App"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const createServer = () => {
  const app = (0, _express.default)();
  app.set('view engine', 'pug');
  app.set('views', (0, _path.resolve)(__dirname, "..", "views"));
  const jsSource = process.env.NODE_ENV == "development" ? "dev-dist" : "dist";
  console.log("process env");
  console.log(process.env.NODE_ENV);
  console.log("jsSource");
  console.log(jsSource);
  app.use(_express.default.static((0, _path.resolve)(__dirname, "..", "..", jsSource)));
  app.use(_express.default.urlencoded({
    extended: true
  }));
  app.get("/", (req, res) => {
    const context = {};
    const url = req.url;
    console.log(_server.default);

    const rendered = _server.default.renderToString( /*#__PURE__*/_react.default.createElement(_reactRouterDom.StaticRouter, {
      url: url,
      context: context
    }, /*#__PURE__*/_react.default.createElement(_App.default, null), " "));

    console.log(_back_store.default.getState());
    res.render("index", {
      content: rendered,
      preLoadedState: _back_store.default.getState()
    });
  });
  return app;
};

exports.createServer = createServer;

const listen = async (app, port) => {
  return new Promise((resolve, reject) => {
    const process = app.listen(port);
    process.on("listening", () => {
      console.log(`listening on ${port}`);
      resolve(port);
    });
    process.on("error", err => {
      reject(err);
    });
  });
};

exports.listen = listen;