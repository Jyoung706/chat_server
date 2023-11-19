const http = require("http");
const { Server } = require("socket.io");
const app = require("./app");
require("dotenv").config();

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

require("./utils/io")(io);

const PORT = process.env.SERVER_PORT;

server.listen(PORT, () => {
  console.log("server is runnig on port : ", PORT);
});
