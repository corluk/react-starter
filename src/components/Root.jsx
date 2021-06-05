import React, { createContext } from "react";
import { Provider } from "react-redux";
import _Store from "../store";
 
import loadable from "@loadable/component";
import { ChakraProvider,CSSReset } from "@chakra-ui/react"

const Home = loadable(()=> import("./layouts/defaults/Home"));

export const RootContext = createContext();
export default () => {
  return (
    <RootContext.Provider value="">
     
      <Provider store={_Store}>
          <Home />
      </Provider>
     
    </RootContext.Provider>
  );
};
