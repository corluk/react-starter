require("@babel/register")( );

const createServer = require("./server/server.js").createServer;


const server = createServer();
let port = 8080;
if (process.env.NODE_ENV === "development"){
    port = 38080;
}
server.listen(port, ()=>{

    console.log(`listening on ${port}`);
});
