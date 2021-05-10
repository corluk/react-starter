import React from "react";
import { Provider } from "react-redux";
import _Store from "../store";

export default ({ children }) => {
  return <Provider store={_Store}>{children}</Provider>;
};
