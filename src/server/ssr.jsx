import React from "react" 
import ReactDOMServer from "react-dom/server"
 
 
 
import Appjsx from "../front/App"
export const renderMain = ()=>{
    
    const str =  ReactDOMServer.renderToString(<Appjsx />)
    console.log(str)
    return str 
}