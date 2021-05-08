import config from "../config.json"
import axios from "axios"
 
import findPort from "find-open-port"
import APP_INIT from "../src/app_init"
import supertest from "supertest"
import SERVER_INIT from "../src/server/server_init"
import {expect}  from "chai"
import MONGO from "../src/server/db"
import dotenv from "dotenv"
import {resolve} from "path"
beforeAll(async ()=>{


    dotenv.config({
        path : resolve(__dirname,".env")
    })
       

})

afterAll(async ()=>{


})
test("should server respond 200 " ,async  ()=>{
    config.port = await findPort()
    console.log(config)
    await APP_INIT(config)
    const response = await supertest(SERVER_INIT()).get("/") 
    expect(response.statusCode).to.be.eq(200)
    
   

})

test("mongo client ",async ()=>{ 
   expect(process.env.MONGO_URI).not.undefined
   const mongoClient = await  MONGO(process.env.MONGO_URI)
   const ping =await mongoClient.db("admin").command({ping:1})
   expect(ping).not.to.be.undefined
   await mongoClient.close()
    
})