import express from "express";
import { join } from "path";
import socket from "socket.io";
import morgan from "morgan";
import server from "./server";

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

const express_server = app.listen(PORT, handleListen);

export const io = socket(express_server);

io.on("connection", (socket) => server(socket, io));
