import { quiz } from "./quiz.js";

let users = [];

const server = (socket, io) => {
  socket.on("client_set_name", (data) => {
    socket.name = data.name;
    users.push({
      id: socket.id,
      name: socket.name,
      painter: false,
    });
    io.emit("server_update_user", { users });
    socket.broadcast.emit("server_new_user", { name: data.name });
  });

  socket.on("disconnect", () => {
    socket.broadcast.emit("disconnected", { name: socket.name });
    users = users.filter((item) => item.id !== socket.id);
    socket.broadcast.emit("server_update_user", { users });
  });

  socket.on("client_send_msg", (data) =>
    socket.broadcast.emit("server_send_msg", {
      message: data.message,
      name: socket.name || "Anon",
    })
  );

  // 색상 관련 event
  socket.on("client_begin", () => socket.broadcast.emit("server_begin"));

  socket.on("client_paint", ({ x, y }) =>
    socket.broadcast.emit("server_paint", { x, y })
  );

  socket.on("client_fill", (data) =>
    socket.broadcast.emit("server_fill", data)
  );
  socket.on("client_color", (data) =>
    socket.broadcast.emit("server_color", data)
  );

  socket.on("client_lineWidth", (data) =>
    socket.broadcast.emit("server_lineWidth", data)
  );

  // 게임 관련 event
  socket.on("client_game_start", () => {
    users.forEach((item) => (item.painter = false));
    const painter = users[Math.floor(Math.random() * users.length)];
    painter["painter"] = true;
    const answer = quiz[Math.floor(Math.random() * quiz.length)];
    io.emit("server_game_start", { users, answer });
  });

  socket.on("client_submit_answer", (data) =>
    io.emit("server_submit_answer", data)
  );

  socket.on("client_game_end", () => io.emit("server_game_end"));
};

export default server;
