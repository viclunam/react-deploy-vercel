const path = require("path");
const cors = require("cors");
const jsonServer = require("json-server");
const server = jsonServer.create();
const dbPath = path.join(process.cwd(), "server", "db.json");
const router = jsonServer.router(dbPath);

server.use(cors());
server.use(router);
server.listen(3000, () => {
  console.log("JSON Server is running");
});

module.exports = server;
