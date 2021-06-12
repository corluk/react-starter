let config = require("./babel.config"); 
 config.plugins = [...config.plugins, ...[["babel-plugin-transform-import-ignore", {
    patterns: [/\.s?css$/, /\.less$/],
  }]]];


require("@babel/register")( config);

const createServer = require("./server/server.js").createServer;


const server = createServer();
let port = 8080;
if (process.env.NODE_ENV === "development"){
    port = 38080;
}
server.listen(port, ()=>{

    console.log(`listening on ${port}`);
});
