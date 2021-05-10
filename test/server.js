import app from "../dev-lib/server/index";
import findPort from "find-open-port";
import open from "open";
 
 

(async () => {
    console.log(process.env.NODE_ENV)
  app.get("/", (req, res) => {
    res.send("hello world");
  });
  const port = await findPort();
  app.listen(port, () => {
    open(`http://localhost:${port}`);
    console.log(`listening port ${port}`);
  });
})();
