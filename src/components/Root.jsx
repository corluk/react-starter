import React, { createContext } from "react";
import { Provider } from "react-redux";
import _Store from "../store";
import { Switch, Route } from "react-router";
import "bootstrap/dist/css/bootstrap.min.css";
import loadable from "@loadable/component";

const Home = loadable(()=> import("./layouts/defaults/Home"));

export const RootContext = createContext();
export default () => {
  return (
    <RootContext.Provider value="">
      <Provider store={_Store}>
        <Switch>
          <Route path="/" component={Home}></Route>
          <Route path="/about">
            <Home />
          </Route>
        </Switch>
      </Provider>
    </RootContext.Provider>
  );
};
