import {MongoClient} from "mongodb"

 
let mongo = null 
export const connect = async  (uri) => {

    if(!mongo){
        try{
            console.log(uri)
            mongo = await MongoClient.connect(uri)
        }catch(err){
            throw new Error(`error : ${err.message}`)
        }
    }
    return mongo
}   

export const close = async ()=>{
    if(mongo){
        await    mongo.close()
    }
   
}

export default connect 
 
