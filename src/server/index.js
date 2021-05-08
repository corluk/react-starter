import Express from "express"
import bodyparser from "body-parser"
import {resolve} from "path"
import pug from "pug"
const app = Express()
app.use(Express.static("dist"))
app.use(bodyparser.urlencoded())
app.get("/",(req,res)=>{

    const template = pug.compileFile(resolve(__dirname,"templates","index.pug"))
    res.send(template())
})

app.listen(8080,()=>{

    console.log(`listening 8080`)
})