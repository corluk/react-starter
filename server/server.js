import _Express from "express";
import compression from "compression";
import React from "react";
import { ServerStyleSheets, ThemeProvider } from '@material-ui/core/styles';
import { resolve } from "path";
import _Store from "../src/store";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import Root from "../src/sys/Root";
import theme from "../src/theme";
import hbs from "hbs";
import { ChunkExtractor } from "@loadable/server";
// import { ChunkExtractor, ChunkExtractorManager } from "@loadable/server";
const statsFile = resolve(__dirname, "../dist/loadable-stats.json");
const chunkExtractor = new ChunkExtractor({ statsFile, publicPath: "/", });
const handler = async (req, res) => {
  const context = {};
  const url = req.url;
  const sheet = new ServerStyleSheets();
  console.log(`url : ${url}`);
  const ThemedRoot = <ThemeProvider theme={theme}>
      <Root/>
  </ThemeProvider>
  const  Elements  = sheet.collect(ThemedRoot);
  const jsx = chunkExtractor.collectChunks( 
          <StaticRouter url={url} context={context}>{Elements}</StaticRouter>);
  const rendered = ReactDOMServer.renderToString(
      jsx
  );

   const state = `<script type="text/javascript"> 
   window.__PRELOADED_STATE__ = ${JSON.stringify(_Store.getState())};
   </script>`; 

    res.render("index", {
      description: "test description",
      scripts: chunkExtractor.getScriptTags(),
      links: chunkExtractor.getLinkTags(),
      styles: chunkExtractor.getStyleTags(),
      materialCss : sheet.toString(),
      state: state,
      rendered : rendered
    });
  }
 

export const createServer = () => {
  const app = _Express();
  app.set("view engine", "hbs");
  app.set("views", resolve(__dirname, "views"));

  app.use(compression());
  app.use(_Express.static(resolve(__dirname, "..", "dist")));
  app.use(
    _Express.urlencoded({
      extended: true,
    })
  );
  const statsFile = resolve(__dirname, "../dist/loadable-stats.json");
  const chunkExtractor = new ChunkExtractor({ statsFile, publicPath: "/", });

  const scriptTags = chunkExtractor.getScriptTags();
  console.log(scriptTags);
  app.get("/*", handler);
    //app.get("/public", handler);
   // app.get("/private", handler);
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
