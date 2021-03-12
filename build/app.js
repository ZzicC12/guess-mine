"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.io = void 0;

var _express = _interopRequireDefault(require("express"));

var _path = require("path");

var _socket = _interopRequireDefault(require("socket.io"));

var _morgan = _interopRequireDefault(require("morgan"));

var _server = _interopRequireDefault(require("./server"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
var PORT = 4000;
app.set("view engine", "pug");
app.set("views", (0, _path.join)(__dirname, "views"));
app.use(_express["default"]["static"]((0, _path.join)(__dirname, "static")));
app.use((0, _morgan["default"])("dev"));
app.get("/", function (req, res) {
  return res.render("home");
});

var handleListen = function handleListen() {
  console.log("\u2705 Server running: http://localhost:".concat(PORT));
};

var express_server = app.listen(PORT, handleListen);
var io = (0, _socket["default"])(express_server);
exports.io = io;
io.on("connection", function (socket) {
  return (0, _server["default"])(socket, io);
});