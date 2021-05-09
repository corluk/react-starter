import config from "../config.json"
 
import React from "react"
import findPort from "find-open-port"
import APP_INIT from "../src/app_init"
import supertest from "supertest"
import SERVER_INIT from "../src/server/server_init"
import {expect}  from "chai"
import MONGO from "../src/server/db"
import dotenv from "dotenv"
import {resolve} from "path"
import ReactRenderer from "react-test-renderer"
import TestComponent from "../src/front/components/index"
 
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

test("should mongo client ping ",async ()=>{ 
   expect(process.env.MONGO_URI).not.undefined
   const mongoClient = await  MONGO(process.env.MONGO_URI)
   const ping =await mongoClient.db("admin").command({ping:1})
   expect(ping).not.to.be.undefined
   await mongoClient.close()
    
})

test("should mongo",()=>{

    const rendered = ReactRenderer.create(<TestComponent />) 
    const renderJson = rendered.toJSON()
        expect(renderJson).not.undefined
        expect(rendered).not.undefined
})