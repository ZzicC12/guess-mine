import express from "express";
import { join } from "path";
import socket from "socket.io";
import morgan from "morgan";

const app = express();
const PORT = 4000;

app.set("view engine", "pug");
app.set("views", join(__dirname, "views"));
app.use(express.static(join(__dirname, "static")));
app.use(morgan("dev"));

app.get("/", (req, res) => res.render("home"));

const handleListen = () => {
  console.log(`✅ Server running: http://localhost:${PORT}`);
};

const server = app.listen(PORT, handleListen);

const io = socket(server);

io.on("connection", (socket) => {
  socket.on("newMessage", (data) =>
    socket.broadcast.emit("receive_message", {
      message: data.message,
      name: socket.name || "Anon",
    })
  );
  socket.on("setName", (data) => {
    socket.name = data.name;
  });
});
