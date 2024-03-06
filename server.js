const jsonServer = require("json-server");
const express = require("express");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);

server.use((req, res, next) => {
  setTimeout(next, 700);
});

setTimeout(() => {
  server.use(router);
  app.use(server);
}, 700);

const app = express();

const PORT = 3600;

app.listen(PORT, () => {
  console.log("Server is running on...");
});
