import MongoConnect , {close as MongoClose} from "./server/db"
import APP_INIT  from "./server/server_init"

export const listen = async (app,port) =>{

    return new Promise((resolve,reject)=>{

        const process = app.listen(port) 
        process.on("listening",()=>{
            console.log(`listening on ${port}`)
            resolve(port)
        })
        process.on("error",(err)=>{
            reject(err)
        })
    })
}
const init = async (config)=>{
    const uri  = process.env.MONGO_URI || config.uri
    
    
     
     await MongoConnect(uri) 
     const app = APP_INIT()
     
     const cleanup = async ()=>{
        await MongoClose()
    }
    process.on('SIGINT', async ()=>{
        console.log("closing...")
        await cleanup
    } );
    process.on('SIGTERM',  async ()=>{
        console.log("closing...")
        await cleanup
    });
     return app 

     
    

  



}

export default init

