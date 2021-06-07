import React, { createContext } from "react";
import { Provider } from "react-redux";
import _Store from "../store";

import loadable from "@loadable/component";
import { ConfigProvider } from 'antd';
import trTR from "antd/lib/locale/tr_TR";

 
const Home = loadable(()=> import("./layouts/defaults/Home"));
 
export const RootContext = createContext();
export default () => {
  return (
    <RootContext.Provider value="">

      <Provider store={_Store}>
        <ConfigProvider locale={trTR}>
          <Home />
          </ConfigProvider>
      </Provider>

    </RootContext.Provider>
  );
};
