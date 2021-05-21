import React from "react";
import { hydrate, render } from "react-dom";
import {loadableReady} from "@loadable/component";
import Boot from "./Boot";
//import Root from "./components/Root";
const AppWithRouter = (
  <Boot />
);
loadableReady(()=>{

  console.log(AppWithRouter);
  const rootElement = document.getElementById("app");
  console.log(document.getElementById("app"));
  // render(AppWithRouter, rootElement);
  if (rootElement.hasChildNodes()) {
    console.log("hydrating..");
    hydrate(AppWithRouter, rootElement);
  } else {
    console.log("rendering..");

   render(AppWithRouter, rootElement);
  }

});
