import React, { createContext } from "react";
import { Provider } from "react-redux";
import _Store from "../store";
import Home from "./layouts/defaults/Home";
import { Switch, Route } from "react-router";

export const RootContext = createContext();
export default () => {
  return (
    <RootContext.Provider value="">
      <Provider store={_Store}>
        <Switch>
          <Route path="/" component={Home}>
          </Route>
          <Route path="/about">
            <Home />
          </Route>
        </Switch>
      </Provider>
    </RootContext.Provider>
  );
};
