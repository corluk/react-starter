import _Express from "express";
import compression from "compression";
import React from "react";
import { resolve } from "path";
import _Store from "../src/store";
import fs from "fs/promises";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import Root from "../src/components/Root";
// import { ChunkExtractor, ChunkExtractorManager } from "@loadable/server";
const getFiles = async () => {
  return await fs.readdir(resolve(__dirname, "..", "dist"));
};

const getAssets = async () => {
  const files = await getFiles();
  const cssFiles = files
    .filter((file) => file.endsWith("css"))
    .map((file) => `/${file}`);
  const scriptFiles = files
    .filter((file) => file.endsWith("js"))
    .map((file) => `/${file}`)
    .reverse();
  return {
    css: cssFiles,
    scripts: scriptFiles,
  };
};

export const createServer = () => {
  const app = _Express();
  app.set("view engine", "pug");
  app.set("views", resolve(__dirname, "views"));

  app.use(compression());
  app.use(_Express.static(resolve(__dirname, "..", "dist")));
  app.use(
    _Express.urlencoded({
      extended: true,
    })
  );

  app.get("/", async (req, res) => {
    const context = {};
    const url = req.url;

    const rendered = ReactDOMServer.renderToString(
      <StaticRouter url={url} context={context}>
        <Root />
      </StaticRouter>
    );
    const state = _Store.getState();
    const assets = await getAssets();

    /*  let content = await fs.readFile(resolve(__dirname, "views/index.html"), "utf-8");
    content = content.replace("__jsx", rendered);
   // content = content.replace("__head", scriptTags);
    content = content.replace("__preLoadedState", JSON.stringify(_Store.getState()));

    res.send(content);
*/

    res.render("index", {
      content: rendered,
      preLoadedState: state,
      assets: assets,
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
