const http = require("http");
const app = require("./app");
const server = http.createServer(app);
const port = process.env.EXPRESS_PORT || 5010;

// app.use("user", UserRouter);

server.listen(port, (err) => {
  if (!err) console.log(`Server listening to port ${port}`);
  else console.log(`Error listening on port ${port} , ${err}.`);
});
