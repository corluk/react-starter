import React from "react";
import { hydrate, render } from "react-dom";
import {loadableReady} from "@loadable/component";
import { BrowserRouter } from "react-router-dom";
import Root from "./Root";

 

//import Root from "./components/Root";
const AppWithRouter = (
  <BrowserRouter>
    <Root/>
  </BrowserRouter>
);
 
loadableReady(()=>{

 
  const rootElement = document.getElementById("app");
 
  
  if (rootElement.hasChildNodes()) {
   
    hydrate(AppWithRouter, rootElement);
  } else {
    

   render(AppWithRouter, rootElement);
  }

});
