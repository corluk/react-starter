const browserSync = require("browser-sync");
//require("ignore-styles");
require("./boot");
/*
const {createServer} = require( "./dev/server");
// import findPort from "find-open-port";

const port = 37080;
(async () => {
  console.log(process.env.NODE_ENV);
  const app = createServer();
  app.get("/", (req, res) => {
    res.send("hello world");
  });

  app.listen(port, () => {

    console.log(`listening port ${port}`);
  });
})();
*/

browserSync({
    files: ["dist", "server", "src"],
    proxy: `localhost:8080`,
    open: false
});
