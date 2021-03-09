const serverController = (socket) => {
  socket.on("setName", (data) => {
    socket.name = data.name;
    socket.broadcast.emit("newUser", data.name);
  });
  socket.on("disconnect", () => {
    socket.broadcast.emit("disconnected", { name: socket.name });
  });
  //
  socket.on("sendMsg", (data) =>
    socket.broadcast.emit("receive_message", {
      message: data.message,
      name: socket.name || "Anon",
    })
  );
};

export default serverController;
