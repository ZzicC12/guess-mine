import { systemMsg, userMsg } from "./printMsg.js";
const socket = io("/");

export const getSocket = () => socket;

export const clientController = (name) => {
  socket.emit("setName", { name });
  socket.on("newUser", (data) => systemMsg(`${data} join`, "system"));
  socket.on("disconnected", (data) => systemMsg(`${data.name} left`, "system"));
  socket.on("receive_message", (data) =>
    userMsg(` : ${data.message}`, data.name, "you")
  );
};
