const path = require("path");
const jsonServer = require("json-server");
const server = jsonServer.create();
const dbPath = path.join(process.cwd(), "db.json");
const router = jsonServer.router(dbPath);

server.use(router);
server.listen(3000, () => {
  console.log("JSON Server is running");
});

module.exports = server;
