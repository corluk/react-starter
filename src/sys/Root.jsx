import React, { createContext } from "react";
import { Provider } from "react-redux";
import _Store from "../store";
import {ThemeProvider } from   "@material-ui/core/styles";
import loadable from "@loadable/component";


 
 
const Home = loadable(()=> import("../Layout"));
 
export const RootContext = createContext();
export default () => {

  React.useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  return (
    <RootContext.Provider value="">

      <Provider store={_Store}>
        
          <Home />
         
      </Provider>

    </RootContext.Provider>
  );
};
