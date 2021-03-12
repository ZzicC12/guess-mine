import {
  client_update_user,
  client_new_user,
  client_disconnected,
  client_send_msg,
  client_begin,
  client_paint,
  client_fill,
  client_submit_answer,
  client_lineWidth,
  client_game_start,
  client_game_end,
  client_color,
} from "./clientController.js";

const socket = io("/");

export const getSocket = () => socket;

export const client = (name) => {
  socket.emit("client_set_name", { name });
  socket.on("server_update_user", (data) => client_update_user(data));
  socket.on("server_new_user", (data) => client_new_user(data));
  socket.on("disconnected", (data) => client_disconnected(data));
  socket.on("server_send_msg", (data) => client_send_msg(data));
  socket.on("server_begin", () => client_begin());
  socket.on("server_paint", (data) => client_paint(data));
  socket.on("server_fill", (data) => client_fill(data));
  socket.on("server_lineWidth", (data) => client_lineWidth(data));
  socket.on("server_game_start", (data) => client_game_start(data));
  socket.on("server_submit_answer", (data) => client_submit_answer(data));
  socket.on("server_game_end", () => client_game_end());
  socket.on("server_color", (data) => client_color(data));
};
