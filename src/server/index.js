
import Express from "express";

import React from "react";
import {resolve} from "path";

import STORE from "../front/store/back_store";

import ReactDOMServer from "react-dom/server";
import {StaticRouter} from "react-router-dom";
import App from "../front/App";


export const createServer = ()=>{


    const app = Express();
    app.set("view engine", "pug");
    app.set("views", resolve(__dirname, "..", "views"));
    const jsSource = process.env.NODE_ENV == "development" ? "dev-dist" : "dist";
    console.log("process env");
    console.log(process.env.NODE_ENV);
    console.log("jsSource");
    console.log(jsSource);
    app.use(Express.static(resolve(__dirname, "..", "..", jsSource)));
    app.use(Express.urlencoded({
        extended: true
    }));

    app.get("/", (req, res)=>{


        const context = {};
        const url = req.url;
        console.log(ReactDOMServer);
        const rendered = ReactDOMServer.renderToString(<StaticRouter url={url} context={context}><App /> </StaticRouter>);
        console.log(STORE.getState());
        res.render("index", {
            content: rendered,
            preLoadedState: STORE.getState()
        });

    });
    return app;

};
export const listen = async (app, port) => {

    return new Promise((resolve, reject) => {

        const process = app.listen(port);
        process.on("listening", () => {
            console.log(`listening on ${port}`);
            resolve(port);
        });
        process.on("error", (err) => {
            reject(err);
        });
    });
};
