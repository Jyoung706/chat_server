const userController = require("../Controllers/user.controller");

module.exports = function (io) {
  //io
  io.on("connection", async (socket) => {
    console.log("client is connected", socket.id);

    socket.on("login", async (userName, cb) => {
      console.log("userName : ", userName);
      try {
        const user = await userController.saveUser(userName, socket.id);
        cb({ ok: true, data: user });
      } catch (e) {
        console.error(e);
        cb({ ok: false, error: e.message });
      }
    });

    socket.on("disconnect", () => {
      console.log("user is disconnected");
    });
  });
};
