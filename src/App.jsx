import { BrowserRouter } from "react-router-dom";
import React from "react";
import Root from "./components/Root";
import ReactDOM from "react-dom";

ReactDOM.hydrate(
  <BrowserRouter>
    <Root>
      <h1> Hello World from Javascript after SSR </h1>
    </Root>
  </BrowserRouter>
);
