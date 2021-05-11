import _Express from "express";

import React from "react";
import { resolve } from "path";

import _Store from "../store";

import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import Root from "../components/Root";

export const createServer = () => {
  const app = _Express();

  const jsSource =
    process.env.NODE_ENV === "development" ? "dev" : "dist/front";
  app.set("view engine", "pug");

  app.set("views", resolve(__dirname, "views"));
  console.log(jsSource);
  console.log(resolve(__dirname, "..", jsSource));
  app.use(_Express.static(resolve(__dirname, "..", jsSource)));
  app.use(
    _Express.urlencoded({
      extended: true,
    })
  );

  app.get("/", (req, res) => {
    const context = {};
    const url = req.url;

    const rendered = ReactDOMServer.renderToString(
      <StaticRouter url={url} context={context}>
        <Root>
          <h1>Hello World from Server on SSR</h1>
        </Root>
      </StaticRouter>
    );
    console.log("render is : ");
    console.log(rendered);
    console.log(rendered.length);
    console.log(_Store.getState());

    res.render("index", {
      content: rendered,
      preLoadedState: _Store.getState(),
    });
  });
  return app;
};

export const listen = async (app, port) => {
  return new Promise((resolved, rejected) => {
    const process = app.listen(port);
    process.on("listening", () => {
      console.log(`listening on ${port}`);
      resolved(port);
    });
    process.on("error", (err) => {
      rejected(err);
    });
  });
};

const server = createServer();
export default server;
