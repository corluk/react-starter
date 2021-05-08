import Express from "express"
 
import {resolve} from "path"

import pug from "pug"

const init = ()=>{


    const app = Express()
    app.use(Express.static("dist"))
    app.use(Express.urlencoded({
        extended : true 
    }))
    
    app.get("/",(req,res)=>{
    
        const template = pug.compileFile(resolve(__dirname,"templates","index.pug"))
        res.send(template())
    })
    return app 

}



export default init  
 




