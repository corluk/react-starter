import MongoConnect, { close as MongoClose } from "./db"
import SERVER_INIT from "./server"

let app = null
export const listen = async (app, port) => {

    return new Promise((resolve, reject) => {

        const process = app.listen(port)
        process.on("listening", () => {
            console.log(`listening on ${port}`)
            resolve(port)
        })
        process.on("error", (err) => {
            reject(err)
        })
    })
}
const initMongo = async (uri) => {
    const mongo = await MongoConnect(uri)


    const cleanup = async () => {
        await MongoClose()
    }
    process.on('SIGINT', async () => {
        console.log("closing...")
        await cleanup
    });
    process.on('SIGTERM', async () => {
        console.log("closing...")
        await cleanup
    });
    return mongo
}
const init = async (config) => {

    if (app == null) {

        if (config.mongo_support == true) {
            const uri = process.env.MONGO_URI || config.mongo_uri

            await initMongo(uri)
        }
        app = SERVER_INIT()
 

    }



    return app








}

export default init

