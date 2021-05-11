var browserSync = require("browser-sync");


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


browserSync({
    files: ["dev"],
    proxy: `localhost:${port}`
});
