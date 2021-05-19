require("@babel/register")( );

const createServer = require("./server/server.js").createServer;


const server = createServer();

server.listen(8080, ()=>{

    console.log("listening on 8080");
});
