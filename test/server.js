import config from "../config.json"
import APP_INIT from "../out/app_init"
import findPort from "find-open-port"
import open from "open"
(async () => {
    config.port = await findPort()
    console.log(config)
    config.mongo_enabled  = true 
    const app = await APP_INIT(config) 
    app.listen(config.port,()=>{

        open(`http://localhost:${config.port}`)
        console.log(`listening port ${config.port}`)
    })
})()