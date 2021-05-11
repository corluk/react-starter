import React from "react";
import { Provider } from "react-redux";
import _Store from "../store";

export default () => {
  return (
    <Provider store={_Store}>
      <h1> Hello World</h1>
    </Provider>
  );
};
