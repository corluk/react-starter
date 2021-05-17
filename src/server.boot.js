import { createServer } from "./server";

const server = createServer();
const port = 8080;
server.listen(port, () => {
  console.log(`listening on port ${port}`);
});
