import React from "react"; 
import { BrowserRouter } from "react-router-dom";
import Root from "./components/Root";
export default ()=>{

    return <BrowserRouter>
    <Root>
      <h1> Hello World from Javascript after SSR </h1>
    </Root>
  </BrowserRouter>;
};
