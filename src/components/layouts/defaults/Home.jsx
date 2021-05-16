import React, { createContext } from "react";
import Header from "./header/Header";
import config from "./config";
import { useSelector } from "react-redux";
 
export const TemplateContext = createContext();
import Button from "@material-ui/core/Button";
import "./style.css";
export default () => {
  const uiState = useSelector((state) => state.ui);
  console.log("config");
  console.log(config);
  const errorMessage  = <h3 className="alert"> {uiState.error}</h3>;
  const handleClick = ()=>{
    console.log("clicked");
  };
  return (
    <TemplateContext.Provider value={config}>
      <Button variant="contained" color="primary" onClick={handleClick}>
        Hello World
    </Button>
    </TemplateContext.Provider>
  );
};
