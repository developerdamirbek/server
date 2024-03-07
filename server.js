const jsonServer = require("json-server");
const express = require("express");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const customRoutes = require("./routes.json"); // Import custom routes
const middlewares = jsonServer.defaults();

server.use(middlewares);

server.use((req, res, next) => {
  setTimeout(next, 700);
});

// Set up custom routes
for (let route in customRoutes) {
  if (customRoutes.hasOwnProperty(route)) {
    server.use(route, (req, res, next) => {
      setTimeout(next, customRoutes[route]);
    });
  }
}

setTimeout(() => {
  server.use(router);
  app.use(server);
}, 700);

const app = express();

const PORT = 3601;

app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});
