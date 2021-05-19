import { BrowserRouter } from "react-router-dom";
import React from "react";

import { hydrate, render } from "react-dom";
import loadable from "@loadable/component";
const Root = loadable(()=> import("./components/Root"));
//import Root from "./components/Root";
const AppWithRouter = (
  <BrowserRouter>
    <Root>
      <h1> Hello World from Javascript after SSR </h1>
    </Root>
  </BrowserRouter>
);
console.log(AppWithRouter);
const rootElement = document.getElementById("app");
console.log(document.getElementById("app"));
// render(AppWithRouter, rootElement);
if (rootElement.hasChildNodes()) {
  hydrate(AppWithRouter, rootElement);
} else {
 render(AppWithRouter, rootElement);
}
/*
  ReactDOM.hydrate(
    <BrowserRouter>
      <Root>
        <h1> Hello World from Javascript after SSR </h1>
      </Root>
    </BrowserRouter>,
    document.getElementById("app")
  );
  */
