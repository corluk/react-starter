import Express from "express"


import {resolve} from "path"
import {renderMain} from "./ssr"
import STORE from "../front/store/back_store"
import pug from "pug"

const init = ()=>{

  
    const app = Express()
    app.use(Express.static("dist"))
    app.use(Express.urlencoded({
        extended : true 
    }))
    
    app.get("/",(req,res)=>{
    
        const template = pug.compileFile(resolve(process.cwd(),"templates","index.pug"))

        const rendered = renderMain()
        console.log(STORE.getState())
        res.send(template({
            content : rendered ,
            preLoadedState : STORE.getState()
        }))
    })
    return app 

}



export default init  
 




