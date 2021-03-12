(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var _printMsg = require("./printMsg");

var _client = require("./client");

var client = (0, _client.getSocket)();
var chat_form = document.querySelector(".chat");
var input = chat_form.querySelector("input");

var handleSubmit = function handleSubmit(event) {
  event.preventDefault();
  var value = input.value;

  if (value) {
    (0, _printMsg.userMsg)(value, "", "me");
    client.emit("client_send_msg", {
      message: value
    });
    input.value = "";
  }
};

function init() {
  chat_form.addEventListener("submit", handleSubmit);
}

init();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXQuanMiXSwibmFtZXMiOlsiY2xpZW50IiwiY2hhdF9mb3JtIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiaW5wdXQiLCJoYW5kbGVTdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwidmFsdWUiLCJlbWl0IiwibWVzc2FnZSIsImluaXQiLCJhZGRFdmVudExpc3RlbmVyIl0sIm1hcHBpbmdzIjoiOztBQUFBOztBQUNBOztBQUVBLElBQU1BLE1BQU0sR0FBRyx3QkFBZjtBQUNBLElBQU1DLFNBQVMsR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLE9BQXZCLENBQWxCO0FBQ0EsSUFBTUMsS0FBSyxHQUFHSCxTQUFTLENBQUNFLGFBQVYsQ0FBd0IsT0FBeEIsQ0FBZDs7QUFFQSxJQUFNRSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxLQUFELEVBQVc7QUFDOUJBLEVBQUFBLEtBQUssQ0FBQ0MsY0FBTjtBQUQ4QixNQUV0QkMsS0FGc0IsR0FFWkosS0FGWSxDQUV0QkksS0FGc0I7O0FBSTlCLE1BQUlBLEtBQUosRUFBVztBQUNULDJCQUFRQSxLQUFSLEVBQWUsRUFBZixFQUFtQixJQUFuQjtBQUNBUixJQUFBQSxNQUFNLENBQUNTLElBQVAsQ0FBWSxpQkFBWixFQUErQjtBQUFFQyxNQUFBQSxPQUFPLEVBQUVGO0FBQVgsS0FBL0I7QUFDQUosSUFBQUEsS0FBSyxDQUFDSSxLQUFOLEdBQWMsRUFBZDtBQUNEO0FBQ0YsQ0FURDs7QUFXQSxTQUFTRyxJQUFULEdBQWdCO0FBQ2RWLEVBQUFBLFNBQVMsQ0FBQ1csZ0JBQVYsQ0FBMkIsUUFBM0IsRUFBcUNQLFlBQXJDO0FBQ0Q7O0FBRURNLElBQUkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VyTXNnIH0gZnJvbSBcIi4vcHJpbnRNc2dcIjtcbmltcG9ydCB7IGdldFNvY2tldCB9IGZyb20gXCIuL2NsaWVudFwiO1xuXG5jb25zdCBjbGllbnQgPSBnZXRTb2NrZXQoKTtcbmNvbnN0IGNoYXRfZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2hhdFwiKTtcbmNvbnN0IGlucHV0ID0gY2hhdF9mb3JtLnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFwiKTtcblxuY29uc3QgaGFuZGxlU3VibWl0ID0gKGV2ZW50KSA9PiB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIGNvbnN0IHsgdmFsdWUgfSA9IGlucHV0O1xuXG4gIGlmICh2YWx1ZSkge1xuICAgIHVzZXJNc2codmFsdWUsIFwiXCIsIFwibWVcIik7XG4gICAgY2xpZW50LmVtaXQoXCJjbGllbnRfc2VuZF9tc2dcIiwgeyBtZXNzYWdlOiB2YWx1ZSB9KTtcbiAgICBpbnB1dC52YWx1ZSA9IFwiXCI7XG4gIH1cbn07XG5cbmZ1bmN0aW9uIGluaXQoKSB7XG4gIGNoYXRfZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGhhbmRsZVN1Ym1pdCk7XG59XG5cbmluaXQoKTtcbiJdfQ==
},{"./client":2,"./printMsg":8}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.client = exports.getSocket = void 0;

var _clientController = require("./clientController.js");

var socket = io("/");

var getSocket = function getSocket() {
  return socket;
};

exports.getSocket = getSocket;

var client = function client(name) {
  socket.emit("client_set_name", {
    name: name
  });
  socket.on("server_update_user", function (data) {
    return (0, _clientController.client_update_user)(data);
  });
  socket.on("server_new_user", function (data) {
    return (0, _clientController.client_new_user)(data);
  });
  socket.on("disconnected", function (data) {
    return (0, _clientController.client_disconnected)(data);
  });
  socket.on("server_send_msg", function (data) {
    return (0, _clientController.client_send_msg)(data);
  });
  socket.on("server_begin", function () {
    return (0, _clientController.client_begin)();
  });
  socket.on("server_paint", function (data) {
    return (0, _clientController.client_paint)(data);
  });
  socket.on("server_fill", function (data) {
    return (0, _clientController.client_fill)(data);
  });
  socket.on("server_lineWidth", function (data) {
    return (0, _clientController.client_lineWidth)(data);
  });
  socket.on("server_game_start", function (data) {
    return (0, _clientController.client_game_start)(data);
  });
  socket.on("server_submit_answer", function (data) {
    return (0, _clientController.client_submit_answer)(data);
  });
  socket.on("server_game_end", function () {
    return (0, _clientController.client_game_end)();
  });
  socket.on("server_color", function (data) {
    return (0, _clientController.client_color)(data);
  });
};

exports.client = client;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudC5qcyJdLCJuYW1lcyI6WyJzb2NrZXQiLCJpbyIsImdldFNvY2tldCIsImNsaWVudCIsIm5hbWUiLCJlbWl0Iiwib24iLCJkYXRhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBZUEsSUFBTUEsTUFBTSxHQUFHQyxFQUFFLENBQUMsR0FBRCxDQUFqQjs7QUFFTyxJQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWTtBQUFBLFNBQU1GLE1BQU47QUFBQSxDQUFsQjs7OztBQUVBLElBQU1HLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUNDLElBQUQsRUFBVTtBQUM5QkosRUFBQUEsTUFBTSxDQUFDSyxJQUFQLENBQVksaUJBQVosRUFBK0I7QUFBRUQsSUFBQUEsSUFBSSxFQUFKQTtBQUFGLEdBQS9CO0FBQ0FKLEVBQUFBLE1BQU0sQ0FBQ00sRUFBUCxDQUFVLG9CQUFWLEVBQWdDLFVBQUNDLElBQUQ7QUFBQSxXQUFVLDBDQUFtQkEsSUFBbkIsQ0FBVjtBQUFBLEdBQWhDO0FBQ0FQLEVBQUFBLE1BQU0sQ0FBQ00sRUFBUCxDQUFVLGlCQUFWLEVBQTZCLFVBQUNDLElBQUQ7QUFBQSxXQUFVLHVDQUFnQkEsSUFBaEIsQ0FBVjtBQUFBLEdBQTdCO0FBQ0FQLEVBQUFBLE1BQU0sQ0FBQ00sRUFBUCxDQUFVLGNBQVYsRUFBMEIsVUFBQ0MsSUFBRDtBQUFBLFdBQVUsMkNBQW9CQSxJQUFwQixDQUFWO0FBQUEsR0FBMUI7QUFDQVAsRUFBQUEsTUFBTSxDQUFDTSxFQUFQLENBQVUsaUJBQVYsRUFBNkIsVUFBQ0MsSUFBRDtBQUFBLFdBQVUsdUNBQWdCQSxJQUFoQixDQUFWO0FBQUEsR0FBN0I7QUFDQVAsRUFBQUEsTUFBTSxDQUFDTSxFQUFQLENBQVUsY0FBVixFQUEwQjtBQUFBLFdBQU0scUNBQU47QUFBQSxHQUExQjtBQUNBTixFQUFBQSxNQUFNLENBQUNNLEVBQVAsQ0FBVSxjQUFWLEVBQTBCLFVBQUNDLElBQUQ7QUFBQSxXQUFVLG9DQUFhQSxJQUFiLENBQVY7QUFBQSxHQUExQjtBQUNBUCxFQUFBQSxNQUFNLENBQUNNLEVBQVAsQ0FBVSxhQUFWLEVBQXlCLFVBQUNDLElBQUQ7QUFBQSxXQUFVLG1DQUFZQSxJQUFaLENBQVY7QUFBQSxHQUF6QjtBQUNBUCxFQUFBQSxNQUFNLENBQUNNLEVBQVAsQ0FBVSxrQkFBVixFQUE4QixVQUFDQyxJQUFEO0FBQUEsV0FBVSx3Q0FBaUJBLElBQWpCLENBQVY7QUFBQSxHQUE5QjtBQUNBUCxFQUFBQSxNQUFNLENBQUNNLEVBQVAsQ0FBVSxtQkFBVixFQUErQixVQUFDQyxJQUFEO0FBQUEsV0FBVSx5Q0FBa0JBLElBQWxCLENBQVY7QUFBQSxHQUEvQjtBQUNBUCxFQUFBQSxNQUFNLENBQUNNLEVBQVAsQ0FBVSxzQkFBVixFQUFrQyxVQUFDQyxJQUFEO0FBQUEsV0FBVSw0Q0FBcUJBLElBQXJCLENBQVY7QUFBQSxHQUFsQztBQUNBUCxFQUFBQSxNQUFNLENBQUNNLEVBQVAsQ0FBVSxpQkFBVixFQUE2QjtBQUFBLFdBQU0sd0NBQU47QUFBQSxHQUE3QjtBQUNBTixFQUFBQSxNQUFNLENBQUNNLEVBQVAsQ0FBVSxjQUFWLEVBQTBCLFVBQUNDLElBQUQ7QUFBQSxXQUFVLG9DQUFhQSxJQUFiLENBQVY7QUFBQSxHQUExQjtBQUNELENBZE0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBjbGllbnRfdXBkYXRlX3VzZXIsXG4gIGNsaWVudF9uZXdfdXNlcixcbiAgY2xpZW50X2Rpc2Nvbm5lY3RlZCxcbiAgY2xpZW50X3NlbmRfbXNnLFxuICBjbGllbnRfYmVnaW4sXG4gIGNsaWVudF9wYWludCxcbiAgY2xpZW50X2ZpbGwsXG4gIGNsaWVudF9zdWJtaXRfYW5zd2VyLFxuICBjbGllbnRfbGluZVdpZHRoLFxuICBjbGllbnRfZ2FtZV9zdGFydCxcbiAgY2xpZW50X2dhbWVfZW5kLFxuICBjbGllbnRfY29sb3IsXG59IGZyb20gXCIuL2NsaWVudENvbnRyb2xsZXIuanNcIjtcblxuY29uc3Qgc29ja2V0ID0gaW8oXCIvXCIpO1xuXG5leHBvcnQgY29uc3QgZ2V0U29ja2V0ID0gKCkgPT4gc29ja2V0O1xuXG5leHBvcnQgY29uc3QgY2xpZW50ID0gKG5hbWUpID0+IHtcbiAgc29ja2V0LmVtaXQoXCJjbGllbnRfc2V0X25hbWVcIiwgeyBuYW1lIH0pO1xuICBzb2NrZXQub24oXCJzZXJ2ZXJfdXBkYXRlX3VzZXJcIiwgKGRhdGEpID0+IGNsaWVudF91cGRhdGVfdXNlcihkYXRhKSk7XG4gIHNvY2tldC5vbihcInNlcnZlcl9uZXdfdXNlclwiLCAoZGF0YSkgPT4gY2xpZW50X25ld191c2VyKGRhdGEpKTtcbiAgc29ja2V0Lm9uKFwiZGlzY29ubmVjdGVkXCIsIChkYXRhKSA9PiBjbGllbnRfZGlzY29ubmVjdGVkKGRhdGEpKTtcbiAgc29ja2V0Lm9uKFwic2VydmVyX3NlbmRfbXNnXCIsIChkYXRhKSA9PiBjbGllbnRfc2VuZF9tc2coZGF0YSkpO1xuICBzb2NrZXQub24oXCJzZXJ2ZXJfYmVnaW5cIiwgKCkgPT4gY2xpZW50X2JlZ2luKCkpO1xuICBzb2NrZXQub24oXCJzZXJ2ZXJfcGFpbnRcIiwgKGRhdGEpID0+IGNsaWVudF9wYWludChkYXRhKSk7XG4gIHNvY2tldC5vbihcInNlcnZlcl9maWxsXCIsIChkYXRhKSA9PiBjbGllbnRfZmlsbChkYXRhKSk7XG4gIHNvY2tldC5vbihcInNlcnZlcl9saW5lV2lkdGhcIiwgKGRhdGEpID0+IGNsaWVudF9saW5lV2lkdGgoZGF0YSkpO1xuICBzb2NrZXQub24oXCJzZXJ2ZXJfZ2FtZV9zdGFydFwiLCAoZGF0YSkgPT4gY2xpZW50X2dhbWVfc3RhcnQoZGF0YSkpO1xuICBzb2NrZXQub24oXCJzZXJ2ZXJfc3VibWl0X2Fuc3dlclwiLCAoZGF0YSkgPT4gY2xpZW50X3N1Ym1pdF9hbnN3ZXIoZGF0YSkpO1xuICBzb2NrZXQub24oXCJzZXJ2ZXJfZ2FtZV9lbmRcIiwgKCkgPT4gY2xpZW50X2dhbWVfZW5kKCkpO1xuICBzb2NrZXQub24oXCJzZXJ2ZXJfY29sb3JcIiwgKGRhdGEpID0+IGNsaWVudF9jb2xvcihkYXRhKSk7XG59O1xuIl19
},{"./clientController.js":3}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.client_game_end = exports.client_submit_answer = exports.client_game_start = exports.client_color = exports.client_lineWidth = exports.client_fill = exports.client_paint = exports.client_begin = exports.client_send_msg = exports.client_disconnected = exports.client_new_user = exports.client_update_user = exports.current_status = void 0;

var _printMsg = require("./printMsg.js");

var _paint = require("./paint.js");

var _client = require("./client.js");

var client = (0, _client.getSocket)();
var btn = document.querySelector(".start_btn");
var answer_box = document.querySelector(".submit");
var quiz_answer;
var status = false;
var start_sound = new Audio("/sound/start.MP3");
var correct_sound = new Audio("/sound/correct.MP3");
var wrong_sound = new Audio("/sound/wrong.MP3");

var current_status = function current_status() {
  return status;
};

exports.current_status = current_status;

var client_update_user = function client_update_user(data) {
  return (0, _printMsg.userList)(data);
};

exports.client_update_user = client_update_user;

var client_new_user = function client_new_user(data) {
  return (0, _printMsg.systemMsg)("".concat(data.name, " join"));
};

exports.client_new_user = client_new_user;

var client_disconnected = function client_disconnected(data) {
  return (0, _printMsg.systemMsg)("".concat(data.name, " left"));
};

exports.client_disconnected = client_disconnected;

var client_send_msg = function client_send_msg(data) {
  return (0, _printMsg.userMsg)(" : ".concat(data.message), data.name, "you");
};

exports.client_send_msg = client_send_msg;

var client_begin = function client_begin() {
  return _paint.ctx.beginPath();
};

exports.client_begin = client_begin;

var client_paint = function client_paint(data) {
  _paint.ctx.lineTo(data.x, data.y);

  _paint.ctx.stroke();
};

exports.client_paint = client_paint;

var client_fill = function client_fill(data) {
  _paint.ctx.fillStyle = data.color;

  _paint.ctx.fillRect(0, 0, _paint.canvas.width, _paint.canvas.height);
};

exports.client_fill = client_fill;

var client_lineWidth = function client_lineWidth(data) {
  var range = document.querySelector("#jsRange");
  _paint.ctx.lineWidth = data.value;
  range.value = data.value;
};

exports.client_lineWidth = client_lineWidth;

var client_color = function client_color(data) {
  return _paint.ctx.strokeStyle = data;
};

exports.client_color = client_color;

var client_game_start = function client_game_start(data) {
  status = true;
  btn.textContent = "Game Stop";
  _paint.ctx.fillStyle = "white";

  _paint.ctx.fillRect(0, 0, _paint.canvas.width, _paint.canvas.height);

  (0, _paint.initial_setting)();
  quiz_answer = data.answer;
  var master = data.users.find(function (item) {
    return item.painter === true;
  });
  (0, _printMsg.systemMsg)("Game Start");
  start_sound.play();

  if (client.id === master.id) {
    (0, _printMsg.systemMsg)("당신은 출제자입니다.");

    _paint.controls.classList.remove("none");

    (0, _printMsg.systemMsg)("\uC81C\uC2DC\uC5B4 : ".concat(data.answer));
  } else {
    (0, _printMsg.systemMsg)("문제를 풀어주세요.");
    (0, _paint.disable)();
    answer_box.classList.remove("none");

    _paint.controls.classList.add("none");

    btn.style.visibility = "hidden";
  }
};

exports.client_game_start = client_game_start;

var client_submit_answer = function client_submit_answer(data) {
  if (quiz_answer === data.answer) {
    (0, _printMsg.systemMsg)("".concat(data.answer, " \uD83C\uDF89 \uC815\uB2F5\uC785\uB2C8\uB2E4."));
    correct_sound.play();
    client_game_end();
  } else {
    wrong_sound.play();
    (0, _printMsg.systemMsg)("".concat(data.answer, " \u274C \uC624\uB2F5\uC785\uB2C8\uB2E4."));
  }
};

exports.client_submit_answer = client_submit_answer;

var client_game_end = function client_game_end() {
  status = false;
  btn.style.visibility = "visible";
  (0, _paint.enable)();
  (0, _paint.initial_setting)();
  btn.textContent = "Game Start";
  answer_box.classList.add("none");
  (0, _printMsg.systemMsg)("Game End");
};

exports.client_game_end = client_game_end;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudENvbnRyb2xsZXIuanMiXSwibmFtZXMiOlsiY2xpZW50IiwiYnRuIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiYW5zd2VyX2JveCIsInF1aXpfYW5zd2VyIiwic3RhdHVzIiwic3RhcnRfc291bmQiLCJBdWRpbyIsImNvcnJlY3Rfc291bmQiLCJ3cm9uZ19zb3VuZCIsImN1cnJlbnRfc3RhdHVzIiwiY2xpZW50X3VwZGF0ZV91c2VyIiwiZGF0YSIsImNsaWVudF9uZXdfdXNlciIsIm5hbWUiLCJjbGllbnRfZGlzY29ubmVjdGVkIiwiY2xpZW50X3NlbmRfbXNnIiwibWVzc2FnZSIsImNsaWVudF9iZWdpbiIsImN0eCIsImJlZ2luUGF0aCIsImNsaWVudF9wYWludCIsImxpbmVUbyIsIngiLCJ5Iiwic3Ryb2tlIiwiY2xpZW50X2ZpbGwiLCJmaWxsU3R5bGUiLCJjb2xvciIsImZpbGxSZWN0IiwiY2FudmFzIiwid2lkdGgiLCJoZWlnaHQiLCJjbGllbnRfbGluZVdpZHRoIiwicmFuZ2UiLCJsaW5lV2lkdGgiLCJ2YWx1ZSIsImNsaWVudF9jb2xvciIsInN0cm9rZVN0eWxlIiwiY2xpZW50X2dhbWVfc3RhcnQiLCJ0ZXh0Q29udGVudCIsImFuc3dlciIsIm1hc3RlciIsInVzZXJzIiwiZmluZCIsIml0ZW0iLCJwYWludGVyIiwicGxheSIsImlkIiwiY29udHJvbHMiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJhZGQiLCJzdHlsZSIsInZpc2liaWxpdHkiLCJjbGllbnRfc3VibWl0X2Fuc3dlciIsImNsaWVudF9nYW1lX2VuZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQVFBOztBQUVBLElBQU1BLE1BQU0sR0FBRyx3QkFBZjtBQUNBLElBQU1DLEdBQUcsR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLFlBQXZCLENBQVo7QUFDQSxJQUFNQyxVQUFVLEdBQUdGLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixTQUF2QixDQUFuQjtBQUNBLElBQUlFLFdBQUo7QUFDQSxJQUFJQyxNQUFNLEdBQUcsS0FBYjtBQUNBLElBQU1DLFdBQVcsR0FBRyxJQUFJQyxLQUFKLENBQVUsa0JBQVYsQ0FBcEI7QUFDQSxJQUFNQyxhQUFhLEdBQUcsSUFBSUQsS0FBSixDQUFVLG9CQUFWLENBQXRCO0FBQ0EsSUFBTUUsV0FBVyxHQUFHLElBQUlGLEtBQUosQ0FBVSxrQkFBVixDQUFwQjs7QUFFTyxJQUFNRyxjQUFjLEdBQUcsU0FBakJBLGNBQWlCO0FBQUEsU0FBTUwsTUFBTjtBQUFBLENBQXZCOzs7O0FBRUEsSUFBTU0sa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixDQUFDQyxJQUFEO0FBQUEsU0FBVSx3QkFBU0EsSUFBVCxDQUFWO0FBQUEsQ0FBM0I7Ozs7QUFFQSxJQUFNQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUNELElBQUQ7QUFBQSxTQUFVLG1DQUFhQSxJQUFJLENBQUNFLElBQWxCLFdBQVY7QUFBQSxDQUF4Qjs7OztBQUVBLElBQU1DLG1CQUFtQixHQUFHLFNBQXRCQSxtQkFBc0IsQ0FBQ0gsSUFBRDtBQUFBLFNBQVUsbUNBQWFBLElBQUksQ0FBQ0UsSUFBbEIsV0FBVjtBQUFBLENBQTVCOzs7O0FBRUEsSUFBTUUsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFDSixJQUFEO0FBQUEsU0FDN0Isb0NBQWNBLElBQUksQ0FBQ0ssT0FBbkIsR0FBOEJMLElBQUksQ0FBQ0UsSUFBbkMsRUFBeUMsS0FBekMsQ0FENkI7QUFBQSxDQUF4Qjs7OztBQUdBLElBQU1JLFlBQVksR0FBRyxTQUFmQSxZQUFlO0FBQUEsU0FBTUMsV0FBSUMsU0FBSixFQUFOO0FBQUEsQ0FBckI7Ozs7QUFFQSxJQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDVCxJQUFELEVBQVU7QUFDcENPLGFBQUlHLE1BQUosQ0FBV1YsSUFBSSxDQUFDVyxDQUFoQixFQUFtQlgsSUFBSSxDQUFDWSxDQUF4Qjs7QUFDQUwsYUFBSU0sTUFBSjtBQUNELENBSE07Ozs7QUFLQSxJQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDZCxJQUFELEVBQVU7QUFDbkNPLGFBQUlRLFNBQUosR0FBZ0JmLElBQUksQ0FBQ2dCLEtBQXJCOztBQUNBVCxhQUFJVSxRQUFKLENBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQkMsY0FBT0MsS0FBMUIsRUFBaUNELGNBQU9FLE1BQXhDO0FBQ0QsQ0FITTs7OztBQUtBLElBQU1DLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsQ0FBQ3JCLElBQUQsRUFBVTtBQUN4QyxNQUFNc0IsS0FBSyxHQUFHakMsUUFBUSxDQUFDQyxhQUFULENBQXVCLFVBQXZCLENBQWQ7QUFDQWlCLGFBQUlnQixTQUFKLEdBQWdCdkIsSUFBSSxDQUFDd0IsS0FBckI7QUFDQUYsRUFBQUEsS0FBSyxDQUFDRSxLQUFOLEdBQWN4QixJQUFJLENBQUN3QixLQUFuQjtBQUNELENBSk07Ozs7QUFNQSxJQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDekIsSUFBRDtBQUFBLFNBQVdPLFdBQUltQixXQUFKLEdBQWtCMUIsSUFBN0I7QUFBQSxDQUFyQjs7OztBQUVBLElBQU0yQixpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLENBQUMzQixJQUFELEVBQVU7QUFDekNQLEVBQUFBLE1BQU0sR0FBRyxJQUFUO0FBQ0FMLEVBQUFBLEdBQUcsQ0FBQ3dDLFdBQUosR0FBa0IsV0FBbEI7QUFDQXJCLGFBQUlRLFNBQUosR0FBZ0IsT0FBaEI7O0FBQ0FSLGFBQUlVLFFBQUosQ0FBYSxDQUFiLEVBQWdCLENBQWhCLEVBQW1CQyxjQUFPQyxLQUExQixFQUFpQ0QsY0FBT0UsTUFBeEM7O0FBQ0E7QUFDQTVCLEVBQUFBLFdBQVcsR0FBR1EsSUFBSSxDQUFDNkIsTUFBbkI7QUFDQSxNQUFNQyxNQUFNLEdBQUc5QixJQUFJLENBQUMrQixLQUFMLENBQVdDLElBQVgsQ0FBZ0IsVUFBQ0MsSUFBRDtBQUFBLFdBQVVBLElBQUksQ0FBQ0MsT0FBTCxLQUFpQixJQUEzQjtBQUFBLEdBQWhCLENBQWY7QUFDQSwyQkFBVSxZQUFWO0FBQ0F4QyxFQUFBQSxXQUFXLENBQUN5QyxJQUFaOztBQUVBLE1BQUloRCxNQUFNLENBQUNpRCxFQUFQLEtBQWNOLE1BQU0sQ0FBQ00sRUFBekIsRUFBNkI7QUFDM0IsNkJBQVUsYUFBVjs7QUFDQUMsb0JBQVNDLFNBQVQsQ0FBbUJDLE1BQW5CLENBQTBCLE1BQTFCOztBQUNBLDREQUFtQnZDLElBQUksQ0FBQzZCLE1BQXhCO0FBQ0QsR0FKRCxNQUlPO0FBQ0wsNkJBQVUsWUFBVjtBQUNBO0FBQ0F0QyxJQUFBQSxVQUFVLENBQUMrQyxTQUFYLENBQXFCQyxNQUFyQixDQUE0QixNQUE1Qjs7QUFDQUYsb0JBQVNDLFNBQVQsQ0FBbUJFLEdBQW5CLENBQXVCLE1BQXZCOztBQUNBcEQsSUFBQUEsR0FBRyxDQUFDcUQsS0FBSixDQUFVQyxVQUFWLEdBQXVCLFFBQXZCO0FBQ0Q7QUFDRixDQXRCTTs7OztBQXdCQSxJQUFNQyxvQkFBb0IsR0FBRyxTQUF2QkEsb0JBQXVCLENBQUMzQyxJQUFELEVBQVU7QUFDNUMsTUFBSVIsV0FBVyxLQUFLUSxJQUFJLENBQUM2QixNQUF6QixFQUFpQztBQUMvQix1Q0FBYTdCLElBQUksQ0FBQzZCLE1BQWxCO0FBQ0FqQyxJQUFBQSxhQUFhLENBQUN1QyxJQUFkO0FBQ0FTLElBQUFBLGVBQWU7QUFDaEIsR0FKRCxNQUlPO0FBQ0wvQyxJQUFBQSxXQUFXLENBQUNzQyxJQUFaO0FBQ0EsdUNBQWFuQyxJQUFJLENBQUM2QixNQUFsQjtBQUNEO0FBQ0YsQ0FUTTs7OztBQVdBLElBQU1lLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsR0FBTTtBQUNuQ25ELEVBQUFBLE1BQU0sR0FBRyxLQUFUO0FBQ0FMLEVBQUFBLEdBQUcsQ0FBQ3FELEtBQUosQ0FBVUMsVUFBVixHQUF1QixTQUF2QjtBQUNBO0FBQ0E7QUFDQXRELEVBQUFBLEdBQUcsQ0FBQ3dDLFdBQUosR0FBa0IsWUFBbEI7QUFDQXJDLEVBQUFBLFVBQVUsQ0FBQytDLFNBQVgsQ0FBcUJFLEdBQXJCLENBQXlCLE1BQXpCO0FBQ0EsMkJBQVUsVUFBVjtBQUNELENBUk0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBzeXN0ZW1Nc2csIHVzZXJNc2csIHVzZXJMaXN0IH0gZnJvbSBcIi4vcHJpbnRNc2cuanNcIjtcbmltcG9ydCB7XG4gIGNhbnZhcyxcbiAgY3R4LFxuICBjb250cm9scyxcbiAgZW5hYmxlLFxuICBkaXNhYmxlLFxuICBpbml0aWFsX3NldHRpbmcsXG59IGZyb20gXCIuL3BhaW50LmpzXCI7XG5pbXBvcnQgeyBnZXRTb2NrZXQgfSBmcm9tIFwiLi9jbGllbnQuanNcIjtcblxuY29uc3QgY2xpZW50ID0gZ2V0U29ja2V0KCk7XG5jb25zdCBidG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnN0YXJ0X2J0blwiKTtcbmNvbnN0IGFuc3dlcl9ib3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnN1Ym1pdFwiKTtcbmxldCBxdWl6X2Fuc3dlcjtcbmxldCBzdGF0dXMgPSBmYWxzZTtcbmNvbnN0IHN0YXJ0X3NvdW5kID0gbmV3IEF1ZGlvKFwiL3NvdW5kL3N0YXJ0Lk1QM1wiKTtcbmNvbnN0IGNvcnJlY3Rfc291bmQgPSBuZXcgQXVkaW8oXCIvc291bmQvY29ycmVjdC5NUDNcIik7XG5jb25zdCB3cm9uZ19zb3VuZCA9IG5ldyBBdWRpbyhcIi9zb3VuZC93cm9uZy5NUDNcIik7XG5cbmV4cG9ydCBjb25zdCBjdXJyZW50X3N0YXR1cyA9ICgpID0+IHN0YXR1cztcblxuZXhwb3J0IGNvbnN0IGNsaWVudF91cGRhdGVfdXNlciA9IChkYXRhKSA9PiB1c2VyTGlzdChkYXRhKTtcblxuZXhwb3J0IGNvbnN0IGNsaWVudF9uZXdfdXNlciA9IChkYXRhKSA9PiBzeXN0ZW1Nc2coYCR7ZGF0YS5uYW1lfSBqb2luYCk7XG5cbmV4cG9ydCBjb25zdCBjbGllbnRfZGlzY29ubmVjdGVkID0gKGRhdGEpID0+IHN5c3RlbU1zZyhgJHtkYXRhLm5hbWV9IGxlZnRgKTtcblxuZXhwb3J0IGNvbnN0IGNsaWVudF9zZW5kX21zZyA9IChkYXRhKSA9PlxuICB1c2VyTXNnKGAgOiAke2RhdGEubWVzc2FnZX1gLCBkYXRhLm5hbWUsIFwieW91XCIpO1xuXG5leHBvcnQgY29uc3QgY2xpZW50X2JlZ2luID0gKCkgPT4gY3R4LmJlZ2luUGF0aCgpO1xuXG5leHBvcnQgY29uc3QgY2xpZW50X3BhaW50ID0gKGRhdGEpID0+IHtcbiAgY3R4LmxpbmVUbyhkYXRhLngsIGRhdGEueSk7XG4gIGN0eC5zdHJva2UoKTtcbn07XG5cbmV4cG9ydCBjb25zdCBjbGllbnRfZmlsbCA9IChkYXRhKSA9PiB7XG4gIGN0eC5maWxsU3R5bGUgPSBkYXRhLmNvbG9yO1xuICBjdHguZmlsbFJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcbn07XG5cbmV4cG9ydCBjb25zdCBjbGllbnRfbGluZVdpZHRoID0gKGRhdGEpID0+IHtcbiAgY29uc3QgcmFuZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2pzUmFuZ2VcIik7XG4gIGN0eC5saW5lV2lkdGggPSBkYXRhLnZhbHVlO1xuICByYW5nZS52YWx1ZSA9IGRhdGEudmFsdWU7XG59O1xuXG5leHBvcnQgY29uc3QgY2xpZW50X2NvbG9yID0gKGRhdGEpID0+IChjdHguc3Ryb2tlU3R5bGUgPSBkYXRhKTtcblxuZXhwb3J0IGNvbnN0IGNsaWVudF9nYW1lX3N0YXJ0ID0gKGRhdGEpID0+IHtcbiAgc3RhdHVzID0gdHJ1ZTtcbiAgYnRuLnRleHRDb250ZW50ID0gXCJHYW1lIFN0b3BcIjtcbiAgY3R4LmZpbGxTdHlsZSA9IFwid2hpdGVcIjtcbiAgY3R4LmZpbGxSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG4gIGluaXRpYWxfc2V0dGluZygpO1xuICBxdWl6X2Fuc3dlciA9IGRhdGEuYW5zd2VyO1xuICBjb25zdCBtYXN0ZXIgPSBkYXRhLnVzZXJzLmZpbmQoKGl0ZW0pID0+IGl0ZW0ucGFpbnRlciA9PT0gdHJ1ZSk7XG4gIHN5c3RlbU1zZyhcIkdhbWUgU3RhcnRcIik7XG4gIHN0YXJ0X3NvdW5kLnBsYXkoKTtcblxuICBpZiAoY2xpZW50LmlkID09PSBtYXN0ZXIuaWQpIHtcbiAgICBzeXN0ZW1Nc2coXCLri7nsi6DsnYAg7Lac7KCc7J6Q7J6F64uI64ukLlwiKTtcbiAgICBjb250cm9scy5jbGFzc0xpc3QucmVtb3ZlKFwibm9uZVwiKTtcbiAgICBzeXN0ZW1Nc2coYOygnOyLnOyWtCA6ICR7ZGF0YS5hbnN3ZXJ9YCk7XG4gIH0gZWxzZSB7XG4gICAgc3lzdGVtTXNnKFwi66y47KCc66W8IO2SgOyWtOyjvOyEuOyalC5cIik7XG4gICAgZGlzYWJsZSgpO1xuICAgIGFuc3dlcl9ib3guY2xhc3NMaXN0LnJlbW92ZShcIm5vbmVcIik7XG4gICAgY29udHJvbHMuY2xhc3NMaXN0LmFkZChcIm5vbmVcIik7XG4gICAgYnRuLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgY2xpZW50X3N1Ym1pdF9hbnN3ZXIgPSAoZGF0YSkgPT4ge1xuICBpZiAocXVpel9hbnN3ZXIgPT09IGRhdGEuYW5zd2VyKSB7XG4gICAgc3lzdGVtTXNnKGAke2RhdGEuYW5zd2VyfSDwn46JIOygleuLteyeheuLiOuLpC5gKTtcbiAgICBjb3JyZWN0X3NvdW5kLnBsYXkoKTtcbiAgICBjbGllbnRfZ2FtZV9lbmQoKTtcbiAgfSBlbHNlIHtcbiAgICB3cm9uZ19zb3VuZC5wbGF5KCk7XG4gICAgc3lzdGVtTXNnKGAke2RhdGEuYW5zd2VyfSDinYwg7Jik64u17J6F64uI64ukLmApO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgY2xpZW50X2dhbWVfZW5kID0gKCkgPT4ge1xuICBzdGF0dXMgPSBmYWxzZTtcbiAgYnRuLnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcbiAgZW5hYmxlKCk7XG4gIGluaXRpYWxfc2V0dGluZygpO1xuICBidG4udGV4dENvbnRlbnQgPSBcIkdhbWUgU3RhcnRcIjtcbiAgYW5zd2VyX2JveC5jbGFzc0xpc3QuYWRkKFwibm9uZVwiKTtcbiAgc3lzdGVtTXNnKFwiR2FtZSBFbmRcIik7XG59O1xuIl19
},{"./client.js":2,"./paint.js":7,"./printMsg.js":8}],4:[function(require,module,exports){
"use strict";

require("./clientController.js");

require("./login.js");

require("./client.js");

require("./chat.js");

require("./paint.js");

require("./game.js");

require("./printMsg");
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZha2VfN2M4ODkzMzcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4vY2xpZW50Q29udHJvbGxlci5qc1wiO1xuaW1wb3J0IFwiLi9sb2dpbi5qc1wiO1xuaW1wb3J0IFwiLi9jbGllbnQuanNcIjtcbmltcG9ydCBcIi4vY2hhdC5qc1wiO1xuaW1wb3J0IFwiLi9wYWludC5qc1wiO1xuaW1wb3J0IFwiLi9nYW1lLmpzXCI7XG5pbXBvcnQgXCIuL3ByaW50TXNnXCI7XG4iXX0=
},{"./chat.js":1,"./client.js":2,"./clientController.js":3,"./game.js":5,"./login.js":6,"./paint.js":7,"./printMsg":8}],5:[function(require,module,exports){
"use strict";

var _printMsg = require("./printMsg.js");

var _client = require("./client.js");

var client = (0, _client.getSocket)();
var btn = document.querySelector(".start_btn");
var ul = document.querySelector(".user_list");
var answer_form = document.querySelector(".answer_form");

var handleSubmit = function handleSubmit(event) {
  event.preventDefault();
  var input = answer_form.querySelector("input");
  client.emit("client_submit_answer", {
    answer: input.value
  });
  input.value = "";
};

var gameStart = function gameStart(event) {
  var member = ul.childElementCount;
  var textContent = event.target.textContent;

  switch (textContent) {
    case "Game Start":
      if (member === 1) {
        (0, _printMsg.systemMsg)("참여 인원이 부족합니다.");
      } else {
        client.emit("client_game_start");
      }

      break;

    case "Game Stop":
      client.emit("client_game_end");
      break;
  }
};

function init() {
  btn.addEventListener("click", gameStart);
  answer_form.addEventListener("submit", handleSubmit);
}

init();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhbWUuanMiXSwibmFtZXMiOlsiY2xpZW50IiwiYnRuIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwidWwiLCJhbnN3ZXJfZm9ybSIsImhhbmRsZVN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJpbnB1dCIsImVtaXQiLCJhbnN3ZXIiLCJ2YWx1ZSIsImdhbWVTdGFydCIsIm1lbWJlciIsImNoaWxkRWxlbWVudENvdW50IiwidGV4dENvbnRlbnQiLCJ0YXJnZXQiLCJpbml0IiwiYWRkRXZlbnRMaXN0ZW5lciJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFDQTs7QUFFQSxJQUFNQSxNQUFNLEdBQUcsd0JBQWY7QUFFQSxJQUFNQyxHQUFHLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixZQUF2QixDQUFaO0FBQ0EsSUFBTUMsRUFBRSxHQUFHRixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsWUFBdkIsQ0FBWDtBQUNBLElBQU1FLFdBQVcsR0FBR0gsUUFBUSxDQUFDQyxhQUFULENBQXVCLGNBQXZCLENBQXBCOztBQUVBLElBQU1HLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLEtBQUQsRUFBVztBQUM5QkEsRUFBQUEsS0FBSyxDQUFDQyxjQUFOO0FBQ0EsTUFBTUMsS0FBSyxHQUFHSixXQUFXLENBQUNGLGFBQVosQ0FBMEIsT0FBMUIsQ0FBZDtBQUNBSCxFQUFBQSxNQUFNLENBQUNVLElBQVAsQ0FBWSxzQkFBWixFQUFvQztBQUFFQyxJQUFBQSxNQUFNLEVBQUVGLEtBQUssQ0FBQ0c7QUFBaEIsR0FBcEM7QUFDQUgsRUFBQUEsS0FBSyxDQUFDRyxLQUFOLEdBQWMsRUFBZDtBQUNELENBTEQ7O0FBT0EsSUFBTUMsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ04sS0FBRCxFQUFXO0FBQzNCLE1BQU1PLE1BQU0sR0FBR1YsRUFBRSxDQUFDVyxpQkFBbEI7QUFEMkIsTUFHZkMsV0FIZSxHQUl2QlQsS0FKdUIsQ0FHekJVLE1BSHlCLENBR2ZELFdBSGU7O0FBSzNCLFVBQVFBLFdBQVI7QUFDRSxTQUFLLFlBQUw7QUFDRSxVQUFJRixNQUFNLEtBQUssQ0FBZixFQUFrQjtBQUNoQixpQ0FBVSxlQUFWO0FBQ0QsT0FGRCxNQUVPO0FBQ0xkLFFBQUFBLE1BQU0sQ0FBQ1UsSUFBUCxDQUFZLG1CQUFaO0FBQ0Q7O0FBQ0Q7O0FBQ0YsU0FBSyxXQUFMO0FBQ0VWLE1BQUFBLE1BQU0sQ0FBQ1UsSUFBUCxDQUFZLGlCQUFaO0FBQ0E7QUFWSjtBQVlELENBakJEOztBQW1CQSxTQUFTUSxJQUFULEdBQWdCO0FBQ2RqQixFQUFBQSxHQUFHLENBQUNrQixnQkFBSixDQUFxQixPQUFyQixFQUE4Qk4sU0FBOUI7QUFDQVIsRUFBQUEsV0FBVyxDQUFDYyxnQkFBWixDQUE2QixRQUE3QixFQUF1Q2IsWUFBdkM7QUFDRDs7QUFDRFksSUFBSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHN5c3RlbU1zZyB9IGZyb20gXCIuL3ByaW50TXNnLmpzXCI7XG5pbXBvcnQgeyBnZXRTb2NrZXQgfSBmcm9tIFwiLi9jbGllbnQuanNcIjtcblxuY29uc3QgY2xpZW50ID0gZ2V0U29ja2V0KCk7XG5cbmNvbnN0IGJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3RhcnRfYnRuXCIpO1xuY29uc3QgdWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnVzZXJfbGlzdFwiKTtcbmNvbnN0IGFuc3dlcl9mb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hbnN3ZXJfZm9ybVwiKTtcblxuY29uc3QgaGFuZGxlU3VibWl0ID0gKGV2ZW50KSA9PiB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIGNvbnN0IGlucHV0ID0gYW5zd2VyX2Zvcm0ucXVlcnlTZWxlY3RvcihcImlucHV0XCIpO1xuICBjbGllbnQuZW1pdChcImNsaWVudF9zdWJtaXRfYW5zd2VyXCIsIHsgYW5zd2VyOiBpbnB1dC52YWx1ZSB9KTtcbiAgaW5wdXQudmFsdWUgPSBcIlwiO1xufTtcblxuY29uc3QgZ2FtZVN0YXJ0ID0gKGV2ZW50KSA9PiB7XG4gIGNvbnN0IG1lbWJlciA9IHVsLmNoaWxkRWxlbWVudENvdW50O1xuICBjb25zdCB7XG4gICAgdGFyZ2V0OiB7IHRleHRDb250ZW50IH0sXG4gIH0gPSBldmVudDtcbiAgc3dpdGNoICh0ZXh0Q29udGVudCkge1xuICAgIGNhc2UgXCJHYW1lIFN0YXJ0XCI6XG4gICAgICBpZiAobWVtYmVyID09PSAxKSB7XG4gICAgICAgIHN5c3RlbU1zZyhcIuywuOyXrCDsnbjsm5DsnbQg67aA7KGx7ZWp64uI64ukLlwiKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNsaWVudC5lbWl0KFwiY2xpZW50X2dhbWVfc3RhcnRcIik7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiR2FtZSBTdG9wXCI6XG4gICAgICBjbGllbnQuZW1pdChcImNsaWVudF9nYW1lX2VuZFwiKTtcbiAgICAgIGJyZWFrO1xuICB9XG59O1xuXG5mdW5jdGlvbiBpbml0KCkge1xuICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGdhbWVTdGFydCk7XG4gIGFuc3dlcl9mb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgaGFuZGxlU3VibWl0KTtcbn1cbmluaXQoKTtcbiJdfQ==
},{"./client.js":2,"./printMsg.js":8}],6:[function(require,module,exports){
"use strict";

var _client = require("./client.js");

var _printMsg = require("./printMsg");

var login_form = document.querySelector(".login");
var input = login_form.querySelector("input");
var login_section = document.querySelector(".login_section");
var game_section = document.querySelector(".game_section");
var answer_box = document.querySelector(".submit");

var logIn = function logIn(name) {
  (0, _client.client)(name);
  (0, _printMsg.systemMsg)("Hi ".concat(name));
};

var handleSubmit = function handleSubmit(event) {
  var value = input.value;
  event.preventDefault();
  localStorage.setItem("username", value);
  logIn(value);
  login_section.classList.add("none");
  game_section.classList.remove("none");
};

function init() {
  answer_box.classList.add("none");
  var username = localStorage.getItem("username");

  if (username === null) {
    login_form.addEventListener("submit", handleSubmit);
    game_section.classList.add("none");
  } else {
    login_section.classList.add("none");
    logIn(username);
  }
}

init();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmpzIl0sIm5hbWVzIjpbImxvZ2luX2Zvcm0iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJpbnB1dCIsImxvZ2luX3NlY3Rpb24iLCJnYW1lX3NlY3Rpb24iLCJhbnN3ZXJfYm94IiwibG9nSW4iLCJuYW1lIiwiaGFuZGxlU3VibWl0IiwiZXZlbnQiLCJ2YWx1ZSIsInByZXZlbnREZWZhdWx0IiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsImluaXQiLCJ1c2VybmFtZSIsImdldEl0ZW0iLCJhZGRFdmVudExpc3RlbmVyIl0sIm1hcHBpbmdzIjoiOztBQUFBOztBQUNBOztBQUVBLElBQU1BLFVBQVUsR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLFFBQXZCLENBQW5CO0FBQ0EsSUFBTUMsS0FBSyxHQUFHSCxVQUFVLENBQUNFLGFBQVgsQ0FBeUIsT0FBekIsQ0FBZDtBQUNBLElBQU1FLGFBQWEsR0FBR0gsUUFBUSxDQUFDQyxhQUFULENBQXVCLGdCQUF2QixDQUF0QjtBQUNBLElBQU1HLFlBQVksR0FBR0osUUFBUSxDQUFDQyxhQUFULENBQXVCLGVBQXZCLENBQXJCO0FBQ0EsSUFBTUksVUFBVSxHQUFHTCxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsU0FBdkIsQ0FBbkI7O0FBRUEsSUFBTUssS0FBSyxHQUFHLFNBQVJBLEtBQVEsQ0FBQ0MsSUFBRCxFQUFVO0FBQ3RCLHNCQUFPQSxJQUFQO0FBQ0Esd0NBQWdCQSxJQUFoQjtBQUNELENBSEQ7O0FBS0EsSUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsS0FBRCxFQUFXO0FBQUEsTUFDdEJDLEtBRHNCLEdBQ1pSLEtBRFksQ0FDdEJRLEtBRHNCO0FBRTlCRCxFQUFBQSxLQUFLLENBQUNFLGNBQU47QUFDQUMsRUFBQUEsWUFBWSxDQUFDQyxPQUFiLENBQXFCLFVBQXJCLEVBQWlDSCxLQUFqQztBQUNBSixFQUFBQSxLQUFLLENBQUNJLEtBQUQsQ0FBTDtBQUNBUCxFQUFBQSxhQUFhLENBQUNXLFNBQWQsQ0FBd0JDLEdBQXhCLENBQTRCLE1BQTVCO0FBQ0FYLEVBQUFBLFlBQVksQ0FBQ1UsU0FBYixDQUF1QkUsTUFBdkIsQ0FBOEIsTUFBOUI7QUFDRCxDQVBEOztBQVNBLFNBQVNDLElBQVQsR0FBZ0I7QUFDZFosRUFBQUEsVUFBVSxDQUFDUyxTQUFYLENBQXFCQyxHQUFyQixDQUF5QixNQUF6QjtBQUNBLE1BQU1HLFFBQVEsR0FBR04sWUFBWSxDQUFDTyxPQUFiLENBQXFCLFVBQXJCLENBQWpCOztBQUNBLE1BQUlELFFBQVEsS0FBSyxJQUFqQixFQUF1QjtBQUNyQm5CLElBQUFBLFVBQVUsQ0FBQ3FCLGdCQUFYLENBQTRCLFFBQTVCLEVBQXNDWixZQUF0QztBQUNBSixJQUFBQSxZQUFZLENBQUNVLFNBQWIsQ0FBdUJDLEdBQXZCLENBQTJCLE1BQTNCO0FBQ0QsR0FIRCxNQUdPO0FBQ0xaLElBQUFBLGFBQWEsQ0FBQ1csU0FBZCxDQUF3QkMsR0FBeEIsQ0FBNEIsTUFBNUI7QUFDQVQsSUFBQUEsS0FBSyxDQUFDWSxRQUFELENBQUw7QUFDRDtBQUNGOztBQUVERCxJQUFJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY2xpZW50IH0gZnJvbSBcIi4vY2xpZW50LmpzXCI7XG5pbXBvcnQgeyBzeXN0ZW1Nc2cgfSBmcm9tIFwiLi9wcmludE1zZ1wiO1xuXG5jb25zdCBsb2dpbl9mb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sb2dpblwiKTtcbmNvbnN0IGlucHV0ID0gbG9naW5fZm9ybS5xdWVyeVNlbGVjdG9yKFwiaW5wdXRcIik7XG5jb25zdCBsb2dpbl9zZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sb2dpbl9zZWN0aW9uXCIpO1xuY29uc3QgZ2FtZV9zZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5nYW1lX3NlY3Rpb25cIik7XG5jb25zdCBhbnN3ZXJfYm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zdWJtaXRcIik7XG5cbmNvbnN0IGxvZ0luID0gKG5hbWUpID0+IHtcbiAgY2xpZW50KG5hbWUpO1xuICBzeXN0ZW1Nc2coYEhpICR7bmFtZX1gKTtcbn07XG5cbmNvbnN0IGhhbmRsZVN1Ym1pdCA9IChldmVudCkgPT4ge1xuICBjb25zdCB7IHZhbHVlIH0gPSBpbnB1dDtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ1c2VybmFtZVwiLCB2YWx1ZSk7XG4gIGxvZ0luKHZhbHVlKTtcbiAgbG9naW5fc2VjdGlvbi5jbGFzc0xpc3QuYWRkKFwibm9uZVwiKTtcbiAgZ2FtZV9zZWN0aW9uLmNsYXNzTGlzdC5yZW1vdmUoXCJub25lXCIpO1xufTtcblxuZnVuY3Rpb24gaW5pdCgpIHtcbiAgYW5zd2VyX2JveC5jbGFzc0xpc3QuYWRkKFwibm9uZVwiKTtcbiAgY29uc3QgdXNlcm5hbWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJuYW1lXCIpO1xuICBpZiAodXNlcm5hbWUgPT09IG51bGwpIHtcbiAgICBsb2dpbl9mb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgaGFuZGxlU3VibWl0KTtcbiAgICBnYW1lX3NlY3Rpb24uY2xhc3NMaXN0LmFkZChcIm5vbmVcIik7XG4gIH0gZWxzZSB7XG4gICAgbG9naW5fc2VjdGlvbi5jbGFzc0xpc3QuYWRkKFwibm9uZVwiKTtcbiAgICBsb2dJbih1c2VybmFtZSk7XG4gIH1cbn1cblxuaW5pdCgpO1xuIl19
},{"./client.js":2,"./printMsg":8}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initial_setting = exports.enable = exports.disable = exports.controls = exports.ctx = exports.canvas = void 0;

var _client = require("./client");

var _clientController = require("./clientController.js");

var canvas = document.querySelector("#jsCanvas");
exports.canvas = canvas;
var ctx = canvas.getContext("2d");
exports.ctx = ctx;
var controls = document.querySelector(".controls");
exports.controls = controls;
var color_array = Array.from(document.querySelectorAll(".controls__color"));
var range = document.querySelector("#jsRange");
var btns = document.querySelector(".controls__btns");
var paint = document.querySelector("#jsPaint");
var fill = document.querySelector("#jsFill");
var painting = false;
var mode = "Paint";
var currentColor = "";
var client = (0, _client.getSocket)();

var changeMode = function changeMode(event) {
  if (event.target.textContent === "Paint") {
    mode = "Paint";
    event.target.style.opacity = 1;
    fill.style.opacity = 0.5;
    color_array.forEach(function (item) {
      return item.style.transform = "scale(1)";
    });
  } else {
    mode = "Fill";
    event.target.style.opacity = 1;
    paint.style.opacity = 0.5;
    color_array.forEach(function (item) {
      return item.style.transform = "scale(1)";
    });
  }
};

var handleInput = function handleInput(event) {
  var value = event.target.value;
  ctx.lineWidth = value;
  (0, _clientController.current_status)() && client.emit("client_lineWidth", {
    value: value
  });
};

var paintEnd = function paintEnd() {
  painting = false;
};

var drawing = function drawing(event) {
  if (painting) {
    var x = event.offsetX;
    var y = event.offsetY;
    ctx.lineTo(x, y);
    ctx.stroke();
    (0, _clientController.current_status)() && client.emit("client_paint", {
      x: x,
      y: y
    });
  }
};

var paintStart = function paintStart() {
  if (mode === "Paint") {
    ctx.beginPath();
    painting = true;
    (0, _clientController.current_status)() && client.emit("client_begin");
  }
};

var handleColor = function handleColor(event) {
  var _event$target = event.target,
      number = _event$target.dataset.number,
      backgroundColor = _event$target.style.backgroundColor;
  ctx.strokeStyle = backgroundColor;
  ctx.fillStyle = backgroundColor;
  currentColor = backgroundColor;
  (0, _clientController.current_status)() && client.emit("client_color", currentColor);

  if (mode === "Fill") {
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    (0, _clientController.current_status)() && client.emit("client_fill", {
      color: currentColor
    });
  }

  color_array.forEach(function (item) {
    if (item.dataset.number != number) {
      item.style.transform = "scale(1)";
    } else {
      item.style.transform = "scale(1.5)";
    }
  });
};

var disable = function disable() {
  btns.removeEventListener("click", changeMode);
  range.removeEventListener("input", handleInput);
  canvas.removeEventListener("mousedown", paintStart);
  canvas.removeEventListener("mousemove", drawing);
  canvas.removeEventListener("mouseup", paintEnd);
  canvas.removeEventListener("mouseleave", paintEnd);
};

exports.disable = disable;

var enable = function enable() {
  btns.addEventListener("click", changeMode);
  range.addEventListener("input", handleInput);
  canvas.addEventListener("mousedown", paintStart);
  canvas.addEventListener("mousemove", drawing);
  canvas.addEventListener("mouseup", paintEnd);
  canvas.addEventListener("mouseleave", paintEnd);
};

exports.enable = enable;

var initial_setting = function initial_setting() {
  // 기본 색상, 굵기 설정
  ctx.lineWidth = 5;
  ctx.strokeStyle = "rgb(44, 44, 44)"; // control 설정

  color_array.forEach(function (item) {
    return item.style.transform = "scale(1)";
  });
  color_array[0].style.transform = "scale(1.5)";
  controls.classList.remove("none");
  fill.style.opacity = 0.5;
};

exports.initial_setting = initial_setting;

function init() {
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  color_array.forEach(function (item) {
    return item.addEventListener("click", handleColor);
  });
  enable();
  initial_setting();
}

init();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhaW50LmpzIl0sIm5hbWVzIjpbImNhbnZhcyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImN0eCIsImdldENvbnRleHQiLCJjb250cm9scyIsImNvbG9yX2FycmF5IiwiQXJyYXkiLCJmcm9tIiwicXVlcnlTZWxlY3RvckFsbCIsInJhbmdlIiwiYnRucyIsInBhaW50IiwiZmlsbCIsInBhaW50aW5nIiwibW9kZSIsImN1cnJlbnRDb2xvciIsImNsaWVudCIsImNoYW5nZU1vZGUiLCJldmVudCIsInRhcmdldCIsInRleHRDb250ZW50Iiwic3R5bGUiLCJvcGFjaXR5IiwiZm9yRWFjaCIsIml0ZW0iLCJ0cmFuc2Zvcm0iLCJoYW5kbGVJbnB1dCIsInZhbHVlIiwibGluZVdpZHRoIiwiZW1pdCIsInBhaW50RW5kIiwiZHJhd2luZyIsIngiLCJvZmZzZXRYIiwieSIsIm9mZnNldFkiLCJsaW5lVG8iLCJzdHJva2UiLCJwYWludFN0YXJ0IiwiYmVnaW5QYXRoIiwiaGFuZGxlQ29sb3IiLCJudW1iZXIiLCJkYXRhc2V0IiwiYmFja2dyb3VuZENvbG9yIiwic3Ryb2tlU3R5bGUiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsIndpZHRoIiwiaGVpZ2h0IiwiY29sb3IiLCJkaXNhYmxlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImVuYWJsZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJpbml0aWFsX3NldHRpbmciLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJpbml0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBRU8sSUFBTUEsTUFBTSxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsV0FBdkIsQ0FBZjs7QUFDQSxJQUFNQyxHQUFHLEdBQUdILE1BQU0sQ0FBQ0ksVUFBUCxDQUFrQixJQUFsQixDQUFaOztBQUNBLElBQU1DLFFBQVEsR0FBR0osUUFBUSxDQUFDQyxhQUFULENBQXVCLFdBQXZCLENBQWpCOztBQUVQLElBQU1JLFdBQVcsR0FBR0MsS0FB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QixDQUFoQjtBQUNBMUIsRUFBQUEsR0FBRyxDQUFDMEMsV0FBSixHQUFrQixpQkFBbEIsQ0FIbUMsQ0FJbkM7O0FBQ0F2QyxFQUFBQSxXQUFXLENBQUNrQixPQUFaLENBQW9CLFVBQUNDLElBQUQ7QUFBQSxXQUFXQSxJQUFJLENBQUNILEtBQUwsQ0FBV0ksU0FBWCxHQUF1QixVQUFsQztBQUFBLEdBQXBCO0FBQ0FwQixFQUFBQSxXQUFXLENBQUMsQ0FBRCxDQUFYLENBQWVnQixLQUFmLENBQXFCSSxTQUFyQixHQUFpQyxZQUFqQztBQUNBckIsRUFBQUEsUUFBUSxDQUFDbUQsU0FBVCxDQUFtQkMsTUFBbkIsQ0FBMEIsTUFBMUI7QUFDQTVDLEVBQUFBLElBQUksQ0FBQ1MsS0FBTCxDQUFXQyxPQUFYLEdBQXFCLEdBQXJCO0FBQ0QsQ0FUTTs7OztBQVdQLFNBQVNtQyxJQUFULEdBQWdCO0FBQ2R2RCxFQUFBQSxHQUFHLENBQUMyQyxTQUFKLEdBQWdCLE9BQWhCO0FBQ0EzQyxFQUFBQSxHQUFHLENBQUM0QyxRQUFKLENBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQi9DLE1BQU0sQ0FBQ2dELEtBQTFCLEVBQWlDaEQsTUFBTSxDQUFDaUQsTUFBeEM7QUFDQTNDLEVBQUFBLFdBQVcsQ0FBQ2tCLE9BQVosQ0FBb0IsVUFBQ0MsSUFBRDtBQUFBLFdBQVVBLElBQUksQ0FBQzZCLGdCQUFMLENBQXNCLE9BQXRCLEVBQStCYixXQUEvQixDQUFWO0FBQUEsR0FBcEI7QUFDQVksRUFBQUEsTUFBTTtBQUNORSxFQUFBQSxlQUFlO0FBQ2hCOztBQUVERyxJQUFJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0U29ja2V0IH0gZnJvbSBcIi4vY2xpZW50XCI7XG5pbXBvcnQgeyBjdXJyZW50X3N0YXR1cyB9IGZyb20gXCIuL2NsaWVudENvbnRyb2xsZXIuanNcIjtcblxuZXhwb3J0IGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjanNDYW52YXNcIik7XG5leHBvcnQgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbmV4cG9ydCBjb25zdCBjb250cm9scyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udHJvbHNcIik7XG5cbmNvbnN0IGNvbG9yX2FycmF5ID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNvbnRyb2xzX19jb2xvclwiKSk7XG5jb25zdCByYW5nZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjanNSYW5nZVwiKTtcbmNvbnN0IGJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRyb2xzX19idG5zXCIpO1xuY29uc3QgcGFpbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2pzUGFpbnRcIik7XG5jb25zdCBmaWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNqc0ZpbGxcIik7XG5cbmxldCBwYWludGluZyA9IGZhbHNlO1xubGV0IG1vZGUgPSBcIlBhaW50XCI7XG5sZXQgY3VycmVudENvbG9yID0gXCJcIjtcblxuY29uc3QgY2xpZW50ID0gZ2V0U29ja2V0KCk7XG5cbmNvbnN0IGNoYW5nZU1vZGUgPSAoZXZlbnQpID0+IHtcbiAgaWYgKGV2ZW50LnRhcmdldC50ZXh0Q29udGVudCA9PT0gXCJQYWludFwiKSB7XG4gICAgbW9kZSA9IFwiUGFpbnRcIjtcbiAgICBldmVudC50YXJnZXQuc3R5bGUub3BhY2l0eSA9IDE7XG4gICAgZmlsbC5zdHlsZS5vcGFjaXR5ID0gMC41O1xuICAgIGNvbG9yX2FycmF5LmZvckVhY2goKGl0ZW0pID0+IChpdGVtLnN0eWxlLnRyYW5zZm9ybSA9IFwic2NhbGUoMSlcIikpO1xuICB9IGVsc2Uge1xuICAgIG1vZGUgPSBcIkZpbGxcIjtcbiAgICBldmVudC50YXJnZXQuc3R5bGUub3BhY2l0eSA9IDE7XG4gICAgcGFpbnQuc3R5bGUub3BhY2l0eSA9IDAuNTtcbiAgICBjb2xvcl9hcnJheS5mb3JFYWNoKChpdGVtKSA9PiAoaXRlbS5zdHlsZS50cmFuc2Zvcm0gPSBcInNjYWxlKDEpXCIpKTtcbiAgfVxufTtcblxuY29uc3QgaGFuZGxlSW5wdXQgPSAoZXZlbnQpID0+IHtcbiAgY29uc3Qge1xuICAgIHRhcmdldDogeyB2YWx1ZSB9LFxuICB9ID0gZXZlbnQ7XG4gIGN0eC5saW5lV2lkdGggPSB2YWx1ZTtcbiAgY3VycmVudF9zdGF0dXMoKSAmJiBjbGllbnQuZW1pdChcImNsaWVudF9saW5lV2lkdGhcIiwgeyB2YWx1ZSB9KTtcbn07XG5cbmNvbnN0IHBhaW50RW5kID0gKCkgPT4ge1xuICBwYWludGluZyA9IGZhbHNlO1xufTtcblxuY29uc3QgZHJhd2luZyA9IChldmVudCkgPT4ge1xuICBpZiAocGFpbnRpbmcpIHtcbiAgICBjb25zdCB4ID0gZXZlbnQub2Zmc2V0WDtcbiAgICBjb25zdCB5ID0gZXZlbnQub2Zmc2V0WTtcbiAgICBjdHgubGluZVRvKHgsIHkpO1xuICAgIGN0eC5zdHJva2UoKTtcbiAgICBjdXJyZW50X3N0YXR1cygpICYmIGNsaWVudC5lbWl0KFwiY2xpZW50X3BhaW50XCIsIHsgeCwgeSB9KTtcbiAgfVxufTtcblxuY29uc3QgcGFpbnRTdGFydCA9ICgpID0+IHtcbiAgaWYgKG1vZGUgPT09IFwiUGFpbnRcIikge1xuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBwYWludGluZyA9IHRydWU7XG4gICAgY3VycmVudF9zdGF0dXMoKSAmJiBjbGllbnQuZW1pdChcImNsaWVudF9iZWdpblwiKTtcbiAgfVxufTtcblxuY29uc3QgaGFuZGxlQ29sb3IgPSAoZXZlbnQpID0+IHtcbiAgY29uc3Qge1xuICAgIHRhcmdldDoge1xuICAgICAgZGF0YXNldDogeyBudW1iZXIgfSxcbiAgICAgIHN0eWxlOiB7IGJhY2tncm91bmRDb2xvciB9LFxuICAgIH0sXG4gIH0gPSBldmVudDtcbiAgY3R4LnN0cm9rZVN0eWxlID0gYmFja2dyb3VuZENvbG9yO1xuICBjdHguZmlsbFN0eWxlID0gYmFja2dyb3VuZENvbG9yO1xuICBjdXJyZW50Q29sb3IgPSBiYWNrZ3JvdW5kQ29sb3I7XG4gIGN1cnJlbnRfc3RhdHVzKCkgJiYgY2xpZW50LmVtaXQoXCJjbGllbnRfY29sb3JcIiwgY3VycmVudENvbG9yKTtcbiAgaWYgKG1vZGUgPT09IFwiRmlsbFwiKSB7XG4gICAgY3R4LmZpbGxSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG4gICAgY3VycmVudF9zdGF0dXMoKSAmJiBjbGllbnQuZW1pdChcImNsaWVudF9maWxsXCIsIHsgY29sb3I6IGN1cnJlbnRDb2xvciB9KTtcbiAgfVxuICBjb2xvcl9hcnJheS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgaWYgKGl0ZW0uZGF0YXNldC5udW1iZXIgIT0gbnVtYmVyKSB7XG4gICAgICBpdGVtLnN0eWxlLnRyYW5zZm9ybSA9IFwic2NhbGUoMSlcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgaXRlbS5zdHlsZS50cmFuc2Zvcm0gPSBcInNjYWxlKDEuNSlcIjtcbiAgICB9XG4gIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IGRpc2FibGUgPSAoKSA9PiB7XG4gIGJ0bnMucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNoYW5nZU1vZGUpO1xuICByYW5nZS5yZW1vdmVFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgaGFuZGxlSW5wdXQpO1xuICBjYW52YXMucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBwYWludFN0YXJ0KTtcbiAgY2FudmFzLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgZHJhd2luZyk7XG4gIGNhbnZhcy5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCBwYWludEVuZCk7XG4gIGNhbnZhcy5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCBwYWludEVuZCk7XG59O1xuXG5leHBvcnQgY29uc3QgZW5hYmxlID0gKCkgPT4ge1xuICBidG5zLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjaGFuZ2VNb2RlKTtcbiAgcmFuZ2UuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIGhhbmRsZUlucHV0KTtcbiAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgcGFpbnRTdGFydCk7XG4gIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIGRyYXdpbmcpO1xuICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgcGFpbnRFbmQpO1xuICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgcGFpbnRFbmQpO1xufTtcblxuZXhwb3J0IGNvbnN0IGluaXRpYWxfc2V0dGluZyA9ICgpID0+IHtcbiAgLy8g6riw67O4IOyDieyDgSwg6rW16riwIOyEpOyglVxuICBjdHgubGluZVdpZHRoID0gNTtcbiAgY3R4LnN0cm9rZVN0eWxlID0gXCJyZ2IoNDQsIDQ0LCA0NClcIjtcbiAgLy8gY29udHJvbCDshKTsoJVcbiAgY29sb3JfYXJyYXkuZm9yRWFjaCgoaXRlbSkgPT4gKGl0ZW0uc3R5bGUudHJhbnNmb3JtID0gXCJzY2FsZSgxKVwiKSk7XG4gIGNvbG9yX2FycmF5WzBdLnN0eWxlLnRyYW5zZm9ybSA9IFwic2NhbGUoMS41KVwiO1xuICBjb250cm9scy5jbGFzc0xpc3QucmVtb3ZlKFwibm9uZVwiKTtcbiAgZmlsbC5zdHlsZS5vcGFjaXR5ID0gMC41O1xufTtcblxuZnVuY3Rpb24gaW5pdCgpIHtcbiAgY3R4LmZpbGxTdHlsZSA9IFwid2hpdGVcIjtcbiAgY3R4LmZpbGxSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG4gIGNvbG9yX2FycmF5LmZvckVhY2goKGl0ZW0pID0+IGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZUNvbG9yKSk7XG4gIGVuYWJsZSgpO1xuICBpbml0aWFsX3NldHRpbmcoKTtcbn1cblxuaW5pdCgpO1xuIl19
},{"./client":2,"./clientController.js":3}],8:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userList = exports.userMsg = exports.systemMsg = void 0;

var systemMsg = function systemMsg(text) {
  var ul = document.querySelector(".chat_box");
  var li = document.createElement("li");
  var span = document.createElement("span");
  span.textContent = text;
  li.setAttribute("class", "system");
  li.appendChild(span);
  ul.appendChild(li);
  li.scrollIntoView({
    block: "end"
  });
};

exports.systemMsg = systemMsg;

var userMsg = function userMsg(text, user, className) {
  var ul = document.querySelector(".chat_box");
  var li = document.createElement("li");
  var span = document.createElement("span");
  span.textContent = "".concat(user, " ").concat(text);
  li.setAttribute("class", className || "");
  li.appendChild(span);
  ul.appendChild(li);
  li.scrollIntoView();
};

exports.userMsg = userMsg;

var userList = function userList(_ref) {
  var users = _ref.users;
  var ul = document.querySelector(".user_list");
  ul.innerHTML = "";
  users.forEach(function (item) {
    var li = document.createElement("li");
    li.textContent = item.name;
    ul.appendChild(li);
  });
};

exports.userList = userList;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByaW50TXNnLmpzIl0sIm5hbWVzIjpbInN5c3RlbU1zZyIsInRleHQiLCJ1bCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImxpIiwiY3JlYXRlRWxlbWVudCIsInNwYW4iLCJ0ZXh0Q29udGVudCIsInNldEF0dHJpYnV0ZSIsImFwcGVuZENoaWxkIiwic2Nyb2xsSW50b1ZpZXciLCJibG9jayIsInVzZXJNc2ciLCJ1c2VyIiwiY2xhc3NOYW1lIiwidXNlckxpc3QiLCJ1c2VycyIsImlubmVySFRNTCIsImZvckVhY2giLCJpdGVtIiwibmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFPLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNDLElBQUQsRUFBVTtBQUNqQyxNQUFNQyxFQUFFLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixXQUF2QixDQUFYO0FBQ0EsTUFBTUMsRUFBRSxHQUFHRixRQUFRLENBQUNHLGFBQVQsQ0FBdUIsSUFBdkIsQ0FBWDtBQUNBLE1BQU1DLElBQUksR0FBR0osUUFBUSxDQUFDRyxhQUFULENBQXVCLE1BQXZCLENBQWI7QUFDQUMsRUFBQUEsSUFBSSxDQUFDQyxXQUFMLEdBQW1CUCxJQUFuQjtBQUNBSSxFQUFBQSxFQUFFLENBQUNJLFlBQUgsQ0FBZ0IsT0FBaEIsRUFBeUIsUUFBekI7QUFDQUosRUFBQUEsRUFBRSxDQUFDSyxXQUFILENBQWVILElBQWY7QUFDQUwsRUFBQUEsRUFBRSxDQUFDUSxXQUFILENBQWVMLEVBQWY7QUFDQUEsRUFBQUEsRUFBRSxDQUFDTSxjQUFILENBQWtCO0FBQUVDLElBQUFBLEtBQUssRUFBRTtBQUFULEdBQWxCO0FBQ0QsQ0FUTTs7OztBQVdBLElBQU1DLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQUNaLElBQUQsRUFBT2EsSUFBUCxFQUFhQyxTQUFiLEVBQTJCO0FBQ2hELE1BQU1iLEVBQUUsR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLFdBQXZCLENBQVg7QUFDQSxNQUFNQyxFQUFFLEdBQUdGLFFBQVEsQ0FBQ0csYUFBVCxDQUF1QixJQUF2QixDQUFYO0FBQ0EsTUFBTUMsSUFBSSxHQUFHSixRQUFRLENBQUNHLGFBQVQsQ0FBdUIsTUFBdkIsQ0FBYjtBQUNBQyxFQUFBQSxJQUFJLENBQUNDLFdBQUwsYUFBc0JNLElBQXRCLGNBQThCYixJQUE5QjtBQUNBSSxFQUFBQSxFQUFFLENBQUNJLFlBQUgsQ0FBZ0IsT0FBaEIsRUFBeUJNLFNBQVMsSUFBSSxFQUF0QztBQUNBVixFQUFBQSxFQUFFLENBQUNLLFdBQUgsQ0FBZUgsSUFBZjtBQUNBTCxFQUFBQSxFQUFFLENBQUNRLFdBQUgsQ0FBZUwsRUFBZjtBQUNBQSxFQUFBQSxFQUFFLENBQUNNLGNBQUg7QUFDRCxDQVRNOzs7O0FBV0EsSUFBTUssUUFBUSxHQUFHLFNBQVhBLFFBQVcsT0FBZTtBQUFBLE1BQVpDLEtBQVksUUFBWkEsS0FBWTtBQUNyQyxNQUFNZixFQUFFLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixZQUF2QixDQUFYO0FBQ0FGLEVBQUFBLEVBQUUsQ0FBQ2dCLFNBQUgsR0FBZSxFQUFmO0FBQ0FELEVBQUFBLEtBQUssQ0FBQ0UsT0FBTixDQUFjLFVBQUNDLElBQUQsRUFBVTtBQUN0QixRQUFNZixFQUFFLEdBQUdGLFFBQVEsQ0FBQ0csYUFBVCxDQUF1QixJQUF2QixDQUFYO0FBQ0FELElBQUFBLEVBQUUsQ0FBQ0csV0FBSCxHQUFpQlksSUFBSSxDQUFDQyxJQUF0QjtBQUNBbkIsSUFBQUEsRUFBRSxDQUFDUSxXQUFILENBQWVMLEVBQWY7QUFDRCxHQUpEO0FBS0QsQ0FSTSIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBzeXN0ZW1Nc2cgPSAodGV4dCkgPT4ge1xuICBjb25zdCB1bCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2hhdF9ib3hcIik7XG4gIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIHNwYW4udGV4dENvbnRlbnQgPSB0ZXh0O1xuICBsaS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInN5c3RlbVwiKTtcbiAgbGkuYXBwZW5kQ2hpbGQoc3Bhbik7XG4gIHVsLmFwcGVuZENoaWxkKGxpKTtcbiAgbGkuc2Nyb2xsSW50b1ZpZXcoeyBibG9jazogXCJlbmRcIiB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCB1c2VyTXNnID0gKHRleHQsIHVzZXIsIGNsYXNzTmFtZSkgPT4ge1xuICBjb25zdCB1bCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2hhdF9ib3hcIik7XG4gIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIHNwYW4udGV4dENvbnRlbnQgPSBgJHt1c2VyfSAke3RleHR9YDtcbiAgbGkuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgY2xhc3NOYW1lIHx8IFwiXCIpO1xuICBsaS5hcHBlbmRDaGlsZChzcGFuKTtcbiAgdWwuYXBwZW5kQ2hpbGQobGkpO1xuICBsaS5zY3JvbGxJbnRvVmlldygpO1xufTtcblxuZXhwb3J0IGNvbnN0IHVzZXJMaXN0ID0gKHsgdXNlcnMgfSkgPT4ge1xuICBjb25zdCB1bCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudXNlcl9saXN0XCIpO1xuICB1bC5pbm5lckhUTUwgPSBcIlwiO1xuICB1c2Vycy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgbGkudGV4dENvbnRlbnQgPSBpdGVtLm5hbWU7XG4gICAgdWwuYXBwZW5kQ2hpbGQobGkpO1xuICB9KTtcbn07XG4iXX0=
},{}]},{},[4])