 
import {createServer} from "../lib/server/index"
import findPort from "find-open-port"
import open from "open"
import {spawn} from "cross-spawn"




(async () => {
    
    const app = createServer()
    const port = await findPort() 
    app.listen(port,()=>{

       // open(`http://localhost:${port}`)
        console.log(`listening port ${port}`)
    })
})()