const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);

server.use(
  jsonServer.rewriter({
    "/asesinos": "/killers",
    "/supervivientes": "/survivors",
    "/mapas": "/maps",
    "/habilidades": "/perks",
    "/asesinos/:id": "/killers/:id",
    "/supervivientes/:id": "/survivors/:id",
    "/mapas/:id": "/maps/:id",
    "/habilidades/:id": "/perks/:id",
  })
);

server.use(router);
server.listen(3000, () => {
  console.log("JSON Server is running");
});