"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _quiz = require("./quiz.js");

var users = [];

var server = function server(socket, io) {
  socket.on("client_set_name", function (data) {
    socket.name = data.name;
    users.push({
      id: socket.id,
      name: socket.name,
      painter: false
    });
    io.emit("server_update_user", {
      users: users
    });
    socket.broadcast.emit("server_new_user", {
      name: data.name
    });
  });
  socket.on("disconnect", function () {
    socket.broadcast.emit("disconnected", {
      name: socket.name
    });
    users = users.filter(function (item) {
      return item.id !== socket.id;
    });
    socket.broadcast.emit("server_update_user", {
      users: users
    });
  });
  socket.on("client_send_msg", function (data) {
    return socket.broadcast.emit("server_send_msg", {
      message: data.message,
      name: socket.name || "Anon"
    });
  });
  socket.on("client_begin", function () {
    return socket.broadcast.emit("server_begin");
  });
  socket.on("client_paint", function (_ref) {
    var x = _ref.x,
        y = _ref.y,
        color = _ref.color;
    return socket.broadcast.emit("server_paint", {
      x: x,
      y: y,
      color: color
    });
  });
  socket.on("client_fill", function (data) {
    return socket.broadcast.emit("server_fill", data);
  });
  socket.on("client_lineWidth", function (data) {
    return socket.broadcast.emit("server_lineWidth", data);
  });
  socket.on("client_game_start", function () {
    users.forEach(function (item) {
      return item.painter = false;
    });
    var painter = users[Math.floor(Math.random() * users.length)];
    painter["painter"] = true;

    var answer = _quiz.quiz[Math.floor(Math.random() * _quiz.quiz.length)];

    io.emit("server_game_start", {
      users: users,
      answer: answer
    });
  });
  socket.on("client_submit_answer", function (data) {
    io.emit("server_submit_answer", data);
  });
  socket.on("client_game_end", function () {
    return io.emit("server_game_end");
  });
};

var _default = server;
exports["default"] = _default;