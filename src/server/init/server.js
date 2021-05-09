import Express from "express"

import React from "react"
import {resolve} from "path"
 
import STORE from "../../front/store/back_store"
import pug from "pug"
import {ReactDOMServer} from "react-dom/server"
import {StaticRouter} from "react-router-dom"
import App from "../../front/App"
const init = ()=>{

  
    const app = Express()
    app.use(Express.static("dist"))
    app.use(Express.urlencoded({
        extended : true 
    }))
    
    app.get("/",(req,res)=>{
    
        const template = pug.compileFile(resolve(process.cwd(),"templates","index.pug"))
        const context = {} 
        const url = req.url
        const rendered = ReactDOMServer.renderToString(<StaticRouter url={url} context={context}><App /> </StaticRouter>)
        console.log(STORE.getState())
        res.send(template({
            content : rendered ,
            preLoadedState : STORE.getState()
        }))
    })
    return app 

}



export default init  
 




