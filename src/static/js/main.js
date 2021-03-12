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
};

exports.client = client;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudC5qcyJdLCJuYW1lcyI6WyJzb2NrZXQiLCJpbyIsImdldFNvY2tldCIsImNsaWVudCIsIm5hbWUiLCJlbWl0Iiwib24iLCJkYXRhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBY0EsSUFBTUEsTUFBTSxHQUFHQyxFQUFFLENBQUMsR0FBRCxDQUFqQjs7QUFFTyxJQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWTtBQUFBLFNBQU1GLE1BQU47QUFBQSxDQUFsQjs7OztBQUVBLElBQU1HLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUNDLElBQUQsRUFBVTtBQUM5QkosRUFBQUEsTUFBTSxDQUFDSyxJQUFQLENBQVksaUJBQVosRUFBK0I7QUFBRUQsSUFBQUEsSUFBSSxFQUFKQTtBQUFGLEdBQS9CO0FBQ0FKLEVBQUFBLE1BQU0sQ0FBQ00sRUFBUCxDQUFVLG9CQUFWLEVBQWdDLFVBQUNDLElBQUQ7QUFBQSxXQUFVLDBDQUFtQkEsSUFBbkIsQ0FBVjtBQUFBLEdBQWhDO0FBQ0FQLEVBQUFBLE1BQU0sQ0FBQ00sRUFBUCxDQUFVLGlCQUFWLEVBQTZCLFVBQUNDLElBQUQ7QUFBQSxXQUFVLHVDQUFnQkEsSUFBaEIsQ0FBVjtBQUFBLEdBQTdCO0FBQ0FQLEVBQUFBLE1BQU0sQ0FBQ00sRUFBUCxDQUFVLGNBQVYsRUFBMEIsVUFBQ0MsSUFBRDtBQUFBLFdBQVUsMkNBQW9CQSxJQUFwQixDQUFWO0FBQUEsR0FBMUI7QUFDQVAsRUFBQUEsTUFBTSxDQUFDTSxFQUFQLENBQVUsaUJBQVYsRUFBNkIsVUFBQ0MsSUFBRDtBQUFBLFdBQVUsdUNBQWdCQSxJQUFoQixDQUFWO0FBQUEsR0FBN0I7QUFDQVAsRUFBQUEsTUFBTSxDQUFDTSxFQUFQLENBQVUsY0FBVixFQUEwQjtBQUFBLFdBQU0scUNBQU47QUFBQSxHQUExQjtBQUNBTixFQUFBQSxNQUFNLENBQUNNLEVBQVAsQ0FBVSxjQUFWLEVBQTBCLFVBQUNDLElBQUQ7QUFBQSxXQUFVLG9DQUFhQSxJQUFiLENBQVY7QUFBQSxHQUExQjtBQUNBUCxFQUFBQSxNQUFNLENBQUNNLEVBQVAsQ0FBVSxhQUFWLEVBQXlCLFVBQUNDLElBQUQ7QUFBQSxXQUFVLG1DQUFZQSxJQUFaLENBQVY7QUFBQSxHQUF6QjtBQUNBUCxFQUFBQSxNQUFNLENBQUNNLEVBQVAsQ0FBVSxrQkFBVixFQUE4QixVQUFDQyxJQUFEO0FBQUEsV0FBVSx3Q0FBaUJBLElBQWpCLENBQVY7QUFBQSxHQUE5QjtBQUNBUCxFQUFBQSxNQUFNLENBQUNNLEVBQVAsQ0FBVSxtQkFBVixFQUErQixVQUFDQyxJQUFEO0FBQUEsV0FBVSx5Q0FBa0JBLElBQWxCLENBQVY7QUFBQSxHQUEvQjtBQUNBUCxFQUFBQSxNQUFNLENBQUNNLEVBQVAsQ0FBVSxzQkFBVixFQUFrQyxVQUFDQyxJQUFEO0FBQUEsV0FBVSw0Q0FBcUJBLElBQXJCLENBQVY7QUFBQSxHQUFsQztBQUNBUCxFQUFBQSxNQUFNLENBQUNNLEVBQVAsQ0FBVSxpQkFBVixFQUE2QjtBQUFBLFdBQU0sd0NBQU47QUFBQSxHQUE3QjtBQUNELENBYk0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBjbGllbnRfdXBkYXRlX3VzZXIsXG4gIGNsaWVudF9uZXdfdXNlcixcbiAgY2xpZW50X2Rpc2Nvbm5lY3RlZCxcbiAgY2xpZW50X3NlbmRfbXNnLFxuICBjbGllbnRfYmVnaW4sXG4gIGNsaWVudF9wYWludCxcbiAgY2xpZW50X2ZpbGwsXG4gIGNsaWVudF9zdWJtaXRfYW5zd2VyLFxuICBjbGllbnRfbGluZVdpZHRoLFxuICBjbGllbnRfZ2FtZV9zdGFydCxcbiAgY2xpZW50X2dhbWVfZW5kLFxufSBmcm9tIFwiLi9jbGllbnRDb250cm9sbGVyLmpzXCI7XG5cbmNvbnN0IHNvY2tldCA9IGlvKFwiL1wiKTtcblxuZXhwb3J0IGNvbnN0IGdldFNvY2tldCA9ICgpID0+IHNvY2tldDtcblxuZXhwb3J0IGNvbnN0IGNsaWVudCA9IChuYW1lKSA9PiB7XG4gIHNvY2tldC5lbWl0KFwiY2xpZW50X3NldF9uYW1lXCIsIHsgbmFtZSB9KTtcbiAgc29ja2V0Lm9uKFwic2VydmVyX3VwZGF0ZV91c2VyXCIsIChkYXRhKSA9PiBjbGllbnRfdXBkYXRlX3VzZXIoZGF0YSkpO1xuICBzb2NrZXQub24oXCJzZXJ2ZXJfbmV3X3VzZXJcIiwgKGRhdGEpID0+IGNsaWVudF9uZXdfdXNlcihkYXRhKSk7XG4gIHNvY2tldC5vbihcImRpc2Nvbm5lY3RlZFwiLCAoZGF0YSkgPT4gY2xpZW50X2Rpc2Nvbm5lY3RlZChkYXRhKSk7XG4gIHNvY2tldC5vbihcInNlcnZlcl9zZW5kX21zZ1wiLCAoZGF0YSkgPT4gY2xpZW50X3NlbmRfbXNnKGRhdGEpKTtcbiAgc29ja2V0Lm9uKFwic2VydmVyX2JlZ2luXCIsICgpID0+IGNsaWVudF9iZWdpbigpKTtcbiAgc29ja2V0Lm9uKFwic2VydmVyX3BhaW50XCIsIChkYXRhKSA9PiBjbGllbnRfcGFpbnQoZGF0YSkpO1xuICBzb2NrZXQub24oXCJzZXJ2ZXJfZmlsbFwiLCAoZGF0YSkgPT4gY2xpZW50X2ZpbGwoZGF0YSkpO1xuICBzb2NrZXQub24oXCJzZXJ2ZXJfbGluZVdpZHRoXCIsIChkYXRhKSA9PiBjbGllbnRfbGluZVdpZHRoKGRhdGEpKTtcbiAgc29ja2V0Lm9uKFwic2VydmVyX2dhbWVfc3RhcnRcIiwgKGRhdGEpID0+IGNsaWVudF9nYW1lX3N0YXJ0KGRhdGEpKTtcbiAgc29ja2V0Lm9uKFwic2VydmVyX3N1Ym1pdF9hbnN3ZXJcIiwgKGRhdGEpID0+IGNsaWVudF9zdWJtaXRfYW5zd2VyKGRhdGEpKTtcbiAgc29ja2V0Lm9uKFwic2VydmVyX2dhbWVfZW5kXCIsICgpID0+IGNsaWVudF9nYW1lX2VuZCgpKTtcbn07XG4iXX0=
},{"./clientController.js":3}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.client_game_end = exports.client_submit_answer = exports.client_game_start = exports.client_lineWidth = exports.client_fill = exports.client_paint = exports.client_begin = exports.client_send_msg = exports.client_disconnected = exports.client_new_user = exports.client_update_user = void 0;

var _printMsg = require("./printMsg.js");

var _paint = require("./paint.js");

var _client = require("./client.js");

var client = (0, _client.getSocket)();
var btn = document.querySelector(".start_btn");
var answer_box = document.querySelector(".submit");
var quiz_answer;

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
  _paint.ctx.strokeStyle = data.color;

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

var client_game_start = function client_game_start(data) {
  btn.textContent = "Game Stop";
  _paint.ctx.fillStyle = "white";

  _paint.ctx.fillRect(0, 0, _paint.canvas.width, _paint.canvas.height);

  (0, _paint.initial_setting)();
  quiz_answer = data.answer;
  var master = data.users.find(function (item) {
    return item.painter === true;
  });
  (0, _printMsg.systemMsg)("Game Start");

  if (client.id === master.id) {
    (0, _printMsg.systemMsg)("당신은 출제자입니다.");

    _paint.controls.classList.remove("none");

    (0, _printMsg.systemMsg)("\uC81C\uC2DC\uC5B4 : ".concat(data.answer));
  } else {
    (0, _printMsg.systemMsg)("문제를 풀어주세요.");
    (0, _paint.disable)();
    answer_box.classList.remove("none");

    _paint.controls.classList.add("none");
  }
};

exports.client_game_start = client_game_start;

var client_submit_answer = function client_submit_answer(data) {
  if (quiz_answer === data.answer) {
    (0, _printMsg.systemMsg)("".concat(data.answer, " \uD83C\uDF89 \uC815\uB2F5\uC785\uB2C8\uB2E4."));
    client_game_end();
  } else {
    (0, _printMsg.systemMsg)("".concat(data.answer, " \u274C \uC624\uB2F5\uC785\uB2C8\uB2E4."));
  }
};

exports.client_submit_answer = client_submit_answer;

var client_game_end = function client_game_end() {
  (0, _paint.enable)();
  (0, _paint.initial_setting)();
  btn.textContent = "Game Start";
  answer_box.classList.add("none");
  (0, _printMsg.systemMsg)("Game End");
};

exports.client_game_end = client_game_end;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudENvbnRyb2xsZXIuanMiXSwibmFtZXMiOlsiY2xpZW50IiwiYnRuIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiYW5zd2VyX2JveCIsInF1aXpfYW5zd2VyIiwiY2xpZW50X3VwZGF0ZV91c2VyIiwiZGF0YSIsImNsaWVudF9uZXdfdXNlciIsIm5hbWUiLCJjbGllbnRfZGlzY29ubmVjdGVkIiwiY2xpZW50X3NlbmRfbXNnIiwibWVzc2FnZSIsImNsaWVudF9iZWdpbiIsImN0eCIsImJlZ2luUGF0aCIsImNsaWVudF9wYWludCIsInN0cm9rZVN0eWxlIiwiY29sb3IiLCJsaW5lVG8iLCJ4IiwieSIsInN0cm9rZSIsImNsaWVudF9maWxsIiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJjYW52YXMiLCJ3aWR0aCIsImhlaWdodCIsImNsaWVudF9saW5lV2lkdGgiLCJyYW5nZSIsImxpbmVXaWR0aCIsInZhbHVlIiwiY2xpZW50X2dhbWVfc3RhcnQiLCJ0ZXh0Q29udGVudCIsImFuc3dlciIsIm1hc3RlciIsInVzZXJzIiwiZmluZCIsIml0ZW0iLCJwYWludGVyIiwiaWQiLCJjb250cm9scyIsImNsYXNzTGlzdCIsInJlbW92ZSIsImFkZCIsImNsaWVudF9zdWJtaXRfYW5zd2VyIiwiY2xpZW50X2dhbWVfZW5kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBUUE7O0FBRUEsSUFBTUEsTUFBTSxHQUFHLHdCQUFmO0FBQ0EsSUFBTUMsR0FBRyxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsWUFBdkIsQ0FBWjtBQUNBLElBQU1DLFVBQVUsR0FBR0YsUUFBUSxDQUFDQyxhQUFULENBQXVCLFNBQXZCLENBQW5CO0FBQ0EsSUFBSUUsV0FBSjs7QUFFTyxJQUFNQyxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLENBQUNDLElBQUQ7QUFBQSxTQUFVLHdCQUFTQSxJQUFULENBQVY7QUFBQSxDQUEzQjs7OztBQUVBLElBQU1DLGVBQWUs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SSxDQUFDNEIsTUFBbEI7QUFDQVksSUFBQUEsZUFBZTtBQUNoQixHQUhELE1BR087QUFDTCx1Q0FBYXhDLElBQUksQ0FBQzRCLE1BQWxCO0FBQ0Q7QUFDRixDQVBNOzs7O0FBU0EsSUFBTVksZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixHQUFNO0FBQ25DO0FBQ0E7QUFDQTlDLEVBQUFBLEdBQUcsQ0FBQ2lDLFdBQUosR0FBa0IsWUFBbEI7QUFDQTlCLEVBQUFBLFVBQVUsQ0FBQ3VDLFNBQVgsQ0FBcUJFLEdBQXJCLENBQXlCLE1BQXpCO0FBQ0EsMkJBQVUsVUFBVjtBQUNELENBTk0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBzeXN0ZW1Nc2csIHVzZXJNc2csIHVzZXJMaXN0IH0gZnJvbSBcIi4vcHJpbnRNc2cuanNcIjtcbmltcG9ydCB7XG4gIGNhbnZhcyxcbiAgY3R4LFxuICBjb250cm9scyxcbiAgZW5hYmxlLFxuICBkaXNhYmxlLFxuICBpbml0aWFsX3NldHRpbmcsXG59IGZyb20gXCIuL3BhaW50LmpzXCI7XG5pbXBvcnQgeyBnZXRTb2NrZXQgfSBmcm9tIFwiLi9jbGllbnQuanNcIjtcblxuY29uc3QgY2xpZW50ID0gZ2V0U29ja2V0KCk7XG5jb25zdCBidG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnN0YXJ0X2J0blwiKTtcbmNvbnN0IGFuc3dlcl9ib3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnN1Ym1pdFwiKTtcbmxldCBxdWl6X2Fuc3dlcjtcblxuZXhwb3J0IGNvbnN0IGNsaWVudF91cGRhdGVfdXNlciA9IChkYXRhKSA9PiB1c2VyTGlzdChkYXRhKTtcblxuZXhwb3J0IGNvbnN0IGNsaWVudF9uZXdfdXNlciA9IChkYXRhKSA9PiBzeXN0ZW1Nc2coYCR7ZGF0YS5uYW1lfSBqb2luYCk7XG5cbmV4cG9ydCBjb25zdCBjbGllbnRfZGlzY29ubmVjdGVkID0gKGRhdGEpID0+IHN5c3RlbU1zZyhgJHtkYXRhLm5hbWV9IGxlZnRgKTtcblxuZXhwb3J0IGNvbnN0IGNsaWVudF9zZW5kX21zZyA9IChkYXRhKSA9PlxuICB1c2VyTXNnKGAgOiAke2RhdGEubWVzc2FnZX1gLCBkYXRhLm5hbWUsIFwieW91XCIpO1xuXG5leHBvcnQgY29uc3QgY2xpZW50X2JlZ2luID0gKCkgPT4gY3R4LmJlZ2luUGF0aCgpO1xuXG5leHBvcnQgY29uc3QgY2xpZW50X3BhaW50ID0gKGRhdGEpID0+IHtcbiAgY3R4LnN0cm9rZVN0eWxlID0gZGF0YS5jb2xvcjtcbiAgY3R4LmxpbmVUbyhkYXRhLngsIGRhdGEueSk7XG4gIGN0eC5zdHJva2UoKTtcbn07XG5cbmV4cG9ydCBjb25zdCBjbGllbnRfZmlsbCA9IChkYXRhKSA9PiB7XG4gIGN0eC5maWxsU3R5bGUgPSBkYXRhLmNvbG9yO1xuICBjdHguZmlsbFJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcbn07XG5cbmV4cG9ydCBjb25zdCBjbGllbnRfbGluZVdpZHRoID0gKGRhdGEpID0+IHtcbiAgY29uc3QgcmFuZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2pzUmFuZ2VcIik7XG4gIGN0eC5saW5lV2lkdGggPSBkYXRhLnZhbHVlO1xuICByYW5nZS52YWx1ZSA9IGRhdGEudmFsdWU7XG59O1xuXG5leHBvcnQgY29uc3QgY2xpZW50X2dhbWVfc3RhcnQgPSAoZGF0YSkgPT4ge1xuICBidG4udGV4dENvbnRlbnQgPSBcIkdhbWUgU3RvcFwiO1xuICBjdHguZmlsbFN0eWxlID0gXCJ3aGl0ZVwiO1xuICBjdHguZmlsbFJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcbiAgaW5pdGlhbF9zZXR0aW5nKCk7XG4gIHF1aXpfYW5zd2VyID0gZGF0YS5hbnN3ZXI7XG4gIGNvbnN0IG1hc3RlciA9IGRhdGEudXNlcnMuZmluZCgoaXRlbSkgPT4gaXRlbS5wYWludGVyID09PSB0cnVlKTtcbiAgc3lzdGVtTXNnKFwiR2FtZSBTdGFydFwiKTtcbiAgaWYgKGNsaWVudC5pZCA9PT0gbWFzdGVyLmlkKSB7XG4gICAgc3lzdGVtTXNnKFwi64u57Iug7J2AIOy2nOygnOyekOyeheuLiOuLpC5cIik7XG4gICAgY29udHJvbHMuY2xhc3NMaXN0LnJlbW92ZShcIm5vbmVcIik7XG4gICAgc3lzdGVtTXNnKGDsoJzsi5zslrQgOiAke2RhdGEuYW5zd2VyfWApO1xuICB9IGVsc2Uge1xuICAgIHN5c3RlbU1zZyhcIuusuOygnOulvCDtkoDslrTso7zshLjsmpQuXCIpO1xuICAgIGRpc2FibGUoKTtcbiAgICBhbnN3ZXJfYm94LmNsYXNzTGlzdC5yZW1vdmUoXCJub25lXCIpO1xuICAgIGNvbnRyb2xzLmNsYXNzTGlzdC5hZGQoXCJub25lXCIpO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgY2xpZW50X3N1Ym1pdF9hbnN3ZXIgPSAoZGF0YSkgPT4ge1xuICBpZiAocXVpel9hbnN3ZXIgPT09IGRhdGEuYW5zd2VyKSB7XG4gICAgc3lzdGVtTXNnKGAke2RhdGEuYW5zd2VyfSDwn46JIOygleuLteyeheuLiOuLpC5gKTtcbiAgICBjbGllbnRfZ2FtZV9lbmQoKTtcbiAgfSBlbHNlIHtcbiAgICBzeXN0ZW1Nc2coYCR7ZGF0YS5hbnN3ZXJ9IOKdjCDsmKTri7XsnoXri4jri6QuYCk7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBjbGllbnRfZ2FtZV9lbmQgPSAoKSA9PiB7XG4gIGVuYWJsZSgpO1xuICBpbml0aWFsX3NldHRpbmcoKTtcbiAgYnRuLnRleHRDb250ZW50ID0gXCJHYW1lIFN0YXJ0XCI7XG4gIGFuc3dlcl9ib3guY2xhc3NMaXN0LmFkZChcIm5vbmVcIik7XG4gIHN5c3RlbU1zZyhcIkdhbWUgRW5kXCIpO1xufTtcbiJdfQ==
},{"./client.js":2,"./paint.js":7,"./printMsg.js":8}],4:[function(require,module,exports){
"use strict";

require("./clientController.js");

require("./login.js");

require("./client.js");

require("./chat.js");

require("./paint.js");

require("./game.js");

require("./printMsg");
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZha2VfODQ5NWU5MjAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4vY2xpZW50Q29udHJvbGxlci5qc1wiO1xuaW1wb3J0IFwiLi9sb2dpbi5qc1wiO1xuaW1wb3J0IFwiLi9jbGllbnQuanNcIjtcbmltcG9ydCBcIi4vY2hhdC5qc1wiO1xuaW1wb3J0IFwiLi9wYWludC5qc1wiO1xuaW1wb3J0IFwiLi9nYW1lLmpzXCI7XG5pbXBvcnQgXCIuL3ByaW50TXNnXCI7XG4iXX0=
},{"./chat.js":1,"./client.js":2,"./clientController.js":3,"./game.js":5,"./login.js":6,"./paint.js":7,"./printMsg":8}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.current_status = void 0;

var _printMsg = require("./printMsg.js");

var _client = require("./client.js");

var btn = document.querySelector(".start_btn");
var ul = document.querySelector(".user_list");
var answer_form = document.querySelector(".answer_form");

var current_status = function current_status() {
  return status;
};

exports.current_status = current_status;
var client = (0, _client.getSocket)();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhbWUuanMiXSwibmFtZXMiOlsiYnRuIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwidWwiLCJhbnN3ZXJfZm9ybSIsImN1cnJlbnRfc3RhdHVzIiwic3RhdHVzIiwiY2xpZW50IiwiaGFuZGxlU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImlucHV0IiwiZW1pdCIsImFuc3dlciIsInZhbHVlIiwiZ2FtZVN0YXJ0IiwibWVtYmVyIiwiY2hpbGRFbGVtZW50Q291bnQiLCJ0ZXh0Q29udGVudCIsInRhcmdldCIsImluaXQiLCJhZGRFdmVudExpc3RlbmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBRUEsSUFBTUEsR0FBRyxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsWUFBdkIsQ0FBWjtBQUNBLElBQU1DLEVBQUUsR0FBR0YsUUFBUSxDQUFDQyxhQUFULENBQXVCLFlBQXZCLENBQVg7QUFDQSxJQUFNRSxXQUFXLEdBQUdILFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixjQUF2QixDQUFwQjs7QUFFTyxJQUFNRyxjQUFjLEdBQUcsU0FBakJBLGNBQWlCO0FBQUEsU0FBTUMsTUFBTjtBQUFBLENBQXZCOzs7QUFFUCxJQUFNQyxNQUFNLEdBQUcsd0JBQWY7O0FBRUEsSUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsS0FBRCxFQUFXO0FBQzlCQSxFQUFBQSxLQUFLLENBQUNDLGNBQU47QUFDQSxNQUFNQyxLQUFLLEdBQUdQLFdBQVcsQ0FBQ0YsYUFBWixDQUEwQixPQUExQixDQUFkO0FBQ0FLLEVBQUFBLE1BQU0sQ0FBQ0ssSUFBUCxDQUFZLHNCQUFaLEVBQW9DO0FBQUVDLElBQUFBLE1BQU0sRUFBRUYsS0FBSyxDQUFDRztBQUFoQixHQUFwQztBQUNBSCxFQUFBQSxLQUFLLENBQUNHLEtBQU4sR0FBYyxFQUFkO0FBQ0QsQ0FMRDs7QUFPQSxJQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFDTixLQUFELEVBQVc7QUFDM0IsTUFBTU8sTUFBTSxHQUFHYixFQUFFLENBQUNjLGlCQUFsQjtBQUQyQixNQUdmQyxXQUhlLEdBSXZCVCxLQUp1QixDQUd6QlUsTUFIeUIsQ0FHZkQsV0FIZTs7QUFLM0IsVUFBUUEsV0FBUjtBQUNFLFNBQUssWUFBTDtBQUNFLFVBQUlGLE1BQU0sS0FBSyxDQUFmLEVBQWtCO0FBQ2hCLGlDQUFVLGVBQVY7QUFDRCxPQUZELE1BRU87QUFDTFQsUUFBQUEsTUFBTSxDQUFDSyxJQUFQLENBQVksbUJBQVo7QUFDRDs7QUFDRDs7QUFDRixTQUFLLFdBQUw7QUFDRUwsTUFBQUEsTUFBTSxDQUFDSyxJQUFQLENBQVksaUJBQVo7QUFDQTtBQVZKO0FBWUQsQ0FqQkQ7O0FBbUJBLFNBQVNRLElBQVQsR0FBZ0I7QUFDZHBCLEVBQUFBLEdBQUcsQ0FBQ3FCLGdCQUFKLENBQXFCLE9BQXJCLEVBQThCTixTQUE5QjtBQUNBWCxFQUFBQSxXQUFXLENBQUNpQixnQkFBWixDQUE2QixRQUE3QixFQUF1Q2IsWUFBdkM7QUFDRDs7QUFDRFksSUFBSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHN5c3RlbU1zZyB9IGZyb20gXCIuL3ByaW50TXNnLmpzXCI7XG5pbXBvcnQgeyBnZXRTb2NrZXQgfSBmcm9tIFwiLi9jbGllbnQuanNcIjtcblxuY29uc3QgYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zdGFydF9idG5cIik7XG5jb25zdCB1bCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudXNlcl9saXN0XCIpO1xuY29uc3QgYW5zd2VyX2Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFuc3dlcl9mb3JtXCIpO1xuXG5leHBvcnQgY29uc3QgY3VycmVudF9zdGF0dXMgPSAoKSA9PiBzdGF0dXM7XG5cbmNvbnN0IGNsaWVudCA9IGdldFNvY2tldCgpO1xuXG5jb25zdCBoYW5kbGVTdWJtaXQgPSAoZXZlbnQpID0+IHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgY29uc3QgaW5wdXQgPSBhbnN3ZXJfZm9ybS5xdWVyeVNlbGVjdG9yKFwiaW5wdXRcIik7XG4gIGNsaWVudC5lbWl0KFwiY2xpZW50X3N1Ym1pdF9hbnN3ZXJcIiwgeyBhbnN3ZXI6IGlucHV0LnZhbHVlIH0pO1xuICBpbnB1dC52YWx1ZSA9IFwiXCI7XG59O1xuXG5jb25zdCBnYW1lU3RhcnQgPSAoZXZlbnQpID0+IHtcbiAgY29uc3QgbWVtYmVyID0gdWwuY2hpbGRFbGVtZW50Q291bnQ7XG4gIGNvbnN0IHtcbiAgICB0YXJnZXQ6IHsgdGV4dENvbnRlbnQgfSxcbiAgfSA9IGV2ZW50O1xuICBzd2l0Y2ggKHRleHRDb250ZW50KSB7XG4gICAgY2FzZSBcIkdhbWUgU3RhcnRcIjpcbiAgICAgIGlmIChtZW1iZXIgPT09IDEpIHtcbiAgICAgICAgc3lzdGVtTXNnKFwi7LC47JesIOyduOybkOydtCDrtoDsobHtlanri4jri6QuXCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2xpZW50LmVtaXQoXCJjbGllbnRfZ2FtZV9zdGFydFwiKTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJHYW1lIFN0b3BcIjpcbiAgICAgIGNsaWVudC5lbWl0KFwiY2xpZW50X2dhbWVfZW5kXCIpO1xuICAgICAgYnJlYWs7XG4gIH1cbn07XG5cbmZ1bmN0aW9uIGluaXQoKSB7XG4gIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZ2FtZVN0YXJ0KTtcbiAgYW5zd2VyX2Zvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBoYW5kbGVTdWJtaXQpO1xufVxuaW5pdCgpO1xuIl19
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
var btn = document.querySelector(".start_btn");
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

  if (btn.textContent === "Game Stop") {
    client.emit("client_lineWidth", {
      value: value
    });
  }
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

    if (btn.textContent === "Game Stop") {
      client.emit("client_paint", {
        x: x,
        y: y,
        color: currentColor
      });
    }
  }
};

var paintStart = function paintStart() {
  if (mode === "Paint") {
    ctx.beginPath();
    painting = true;

    if (btn.textContent === "Game Stop") {
      client.emit("client_begin");
    }
  }
};

var handleColor = function handleColor(event) {
  var _event$target = event.target,
      number = _event$target.dataset.number,
      backgroundColor = _event$target.style.backgroundColor;
  ctx.strokeStyle = backgroundColor;
  ctx.fillStyle = backgroundColor;
  currentColor = backgroundColor;

  if (mode === "Fill") {
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    if (btn.textContent === "Game Stop") {
      client.emit("client_fill", {
        color: currentColor
      });
    }
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
  ctx.strokeStyle = "rgb(44, 44, 44)";
  color_array.forEach(function (item) {
    return item.style.transform = "scale(1)";
  });
  color_array[0].style.transform = "scale(1.5)";
  var value = 5;
  client.emit("client_lineWidth", {
    value: value
  });
  controls.classList.remove("none");
};

exports.initial_setting = initial_setting;

function init() {
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  color_array[0].style.transform = "scale(1.5)";
  fill.style.opacity = 0.5;
  color_array.forEach(function (item) {
    return item.addEventListener("click", handleColor);
  });
  enable();
  initial_setting();
}

init();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhaW50LmpzIl0sIm5hbWVzIjpbImNhbnZhcyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImN0eCIsImdldENvbnRleHQiLCJjb250cm9scyIsImNvbG9yX2FycmF5IiwiQXJyYXkiLCJmcm9tIiwicXVlcnlTZWxlY3RvckFsbCIsInJhbmdlIiwiYnRucyIsInBhaW50IiwiZmlsbCIsImJ0biIsInBhaW50aW5nIiwibW9kZSIsImN1cnJlbnRDb2xvciIsImNsaWVudCIsImNoYW5nZU1vZGUiLCJldmVudCIsInRhcmdldCIsInRleHRDb250ZW50Iiwic3R5bGUiLCJvcGFjaXR5IiwiZm9yRWFjaCIsIml0ZW0iLCJ0cmFuc2Zvcm0iLCJoYW5kbGVJbnB1dCIsInZhbHVlIiwibGluZVdpZHRoIiwiZW1pdCIsInBhaW50RW5kIiwiZHJhd2luZyIsIngiLCJvZmZzZXRYIiwieSIsIm9mZnNldFkiLCJsaW5lVG8iLCJzdHJva2UiLCJjb2xvciIsInBhaW50U3RhcnQiLCJiZWdpblBhdGgiLCJoYW5kbGVDb2xvciIsIm51bWJlciIsImRhdGFzZXQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJzdHJva2VTdHlsZSIsImZpbGxTdHlsZSIsImZpbGxSZWN0Iiwid2lkdGgiLCJoZWlnaHQiLCJkaXNhYmxlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImVuYWJsZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJpbml0aWFsX3NldHRpbmciLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJpbml0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBRU8sSUFBTUEsTUFBTSxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsV0FBdkIsQ0FBZjs7QUFDQSxJQUFNQyxHQUFHLEdBQUdILE1BQU0sQ0FBQ0ksVUFBUCxDQUFrQixJQUFsQixDQUFaOztBQUNBLElBQU1DLFFBQVEsR0FBR0osUUFBUSxDQUFDQyxhQUFULENBQXVCLFdBQXZCLENBQWpCOztBQUVQLElBQU1JLFdBQVcsR0FBR0MsS0FB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QSxXQUFVQSxJQUFJLENBQUM2QixnQkFBTCxDQUFzQixPQUF0QixFQUErQlosV0FBL0IsQ0FBVjtBQUFBLEdBQXBCO0FBQ0FXLEVBQUFBLE1BQU07QUFDTkUsRUFBQUEsZUFBZTtBQUNoQjs7QUFFREcsSUFBSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldFNvY2tldCB9IGZyb20gXCIuL2NsaWVudFwiO1xuXG5leHBvcnQgY29uc3QgY2FudmFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNqc0NhbnZhc1wiKTtcbmV4cG9ydCBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuZXhwb3J0IGNvbnN0IGNvbnRyb2xzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250cm9sc1wiKTtcblxuY29uc3QgY29sb3JfYXJyYXkgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY29udHJvbHNfX2NvbG9yXCIpKTtcbmNvbnN0IHJhbmdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNqc1JhbmdlXCIpO1xuY29uc3QgYnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udHJvbHNfX2J0bnNcIik7XG5jb25zdCBwYWludCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjanNQYWludFwiKTtcbmNvbnN0IGZpbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2pzRmlsbFwiKTtcbmNvbnN0IGJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3RhcnRfYnRuXCIpO1xuXG5sZXQgcGFpbnRpbmcgPSBmYWxzZTtcbmxldCBtb2RlID0gXCJQYWludFwiO1xubGV0IGN1cnJlbnRDb2xvciA9IFwiXCI7XG5cbmNvbnN0IGNsaWVudCA9IGdldFNvY2tldCgpO1xuXG5jb25zdCBjaGFuZ2VNb2RlID0gKGV2ZW50KSA9PiB7XG4gIGlmIChldmVudC50YXJnZXQudGV4dENvbnRlbnQgPT09IFwiUGFpbnRcIikge1xuICAgIG1vZGUgPSBcIlBhaW50XCI7XG4gICAgZXZlbnQudGFyZ2V0LnN0eWxlLm9wYWNpdHkgPSAxO1xuICAgIGZpbGwuc3R5bGUub3BhY2l0eSA9IDAuNTtcbiAgICBjb2xvcl9hcnJheS5mb3JFYWNoKChpdGVtKSA9PiAoaXRlbS5zdHlsZS50cmFuc2Zvcm0gPSBcInNjYWxlKDEpXCIpKTtcbiAgfSBlbHNlIHtcbiAgICBtb2RlID0gXCJGaWxsXCI7XG4gICAgZXZlbnQudGFyZ2V0LnN0eWxlLm9wYWNpdHkgPSAxO1xuICAgIHBhaW50LnN0eWxlLm9wYWNpdHkgPSAwLjU7XG4gICAgY29sb3JfYXJyYXkuZm9yRWFjaCgoaXRlbSkgPT4gKGl0ZW0uc3R5bGUudHJhbnNmb3JtID0gXCJzY2FsZSgxKVwiKSk7XG4gIH1cbn07XG5cbmNvbnN0IGhhbmRsZUlucHV0ID0gKGV2ZW50KSA9PiB7XG4gIGNvbnN0IHtcbiAgICB0YXJnZXQ6IHsgdmFsdWUgfSxcbiAgfSA9IGV2ZW50O1xuICBjdHgubGluZVdpZHRoID0gdmFsdWU7XG4gIGlmIChidG4udGV4dENvbnRlbnQgPT09IFwiR2FtZSBTdG9wXCIpIHtcbiAgICBjbGllbnQuZW1pdChcImNsaWVudF9saW5lV2lkdGhcIiwgeyB2YWx1ZSB9KTtcbiAgfVxufTtcblxuY29uc3QgcGFpbnRFbmQgPSAoKSA9PiB7XG4gIHBhaW50aW5nID0gZmFsc2U7XG59O1xuXG5jb25zdCBkcmF3aW5nID0gKGV2ZW50KSA9PiB7XG4gIGlmIChwYWludGluZykge1xuICAgIGNvbnN0IHggPSBldmVudC5vZmZzZXRYO1xuICAgIGNvbnN0IHkgPSBldmVudC5vZmZzZXRZO1xuICAgIGN0eC5saW5lVG8oeCwgeSk7XG4gICAgY3R4LnN0cm9rZSgpO1xuICAgIGlmIChidG4udGV4dENvbnRlbnQgPT09IFwiR2FtZSBTdG9wXCIpIHtcbiAgICAgIGNsaWVudC5lbWl0KFwiY2xpZW50X3BhaW50XCIsIHsgeCwgeSwgY29sb3I6IGN1cnJlbnRDb2xvciB9KTtcbiAgICB9XG4gIH1cbn07XG5cbmNvbnN0IHBhaW50U3RhcnQgPSAoKSA9PiB7XG4gIGlmIChtb2RlID09PSBcIlBhaW50XCIpIHtcbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgcGFpbnRpbmcgPSB0cnVlO1xuICAgIGlmIChidG4udGV4dENvbnRlbnQgPT09IFwiR2FtZSBTdG9wXCIpIHtcbiAgICAgIGNsaWVudC5lbWl0KFwiY2xpZW50X2JlZ2luXCIpO1xuICAgIH1cbiAgfVxufTtcblxuY29uc3QgaGFuZGxlQ29sb3IgPSAoZXZlbnQpID0+IHtcbiAgY29uc3Qge1xuICAgIHRhcmdldDoge1xuICAgICAgZGF0YXNldDogeyBudW1iZXIgfSxcbiAgICAgIHN0eWxlOiB7IGJhY2tncm91bmRDb2xvciB9LFxuICAgIH0sXG4gIH0gPSBldmVudDtcbiAgY3R4LnN0cm9rZVN0eWxlID0gYmFja2dyb3VuZENvbG9yO1xuICBjdHguZmlsbFN0eWxlID0gYmFja2dyb3VuZENvbG9yO1xuICBjdXJyZW50Q29sb3IgPSBiYWNrZ3JvdW5kQ29sb3I7XG4gIGlmIChtb2RlID09PSBcIkZpbGxcIikge1xuICAgIGN0eC5maWxsUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuICAgIGlmIChidG4udGV4dENvbnRlbnQgPT09IFwiR2FtZSBTdG9wXCIpIHtcbiAgICAgIGNsaWVudC5lbWl0KFwiY2xpZW50X2ZpbGxcIiwgeyBjb2xvcjogY3VycmVudENvbG9yIH0pO1xuICAgIH1cbiAgfVxuICBjb2xvcl9hcnJheS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgaWYgKGl0ZW0uZGF0YXNldC5udW1iZXIgIT0gbnVtYmVyKSB7XG4gICAgICBpdGVtLnN0eWxlLnRyYW5zZm9ybSA9IFwic2NhbGUoMSlcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgaXRlbS5zdHlsZS50cmFuc2Zvcm0gPSBcInNjYWxlKDEuNSlcIjtcbiAgICB9XG4gIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IGRpc2FibGUgPSAoKSA9PiB7XG4gIGJ0bnMucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNoYW5nZU1vZGUpO1xuICByYW5nZS5yZW1vdmVFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgaGFuZGxlSW5wdXQpO1xuICBjYW52YXMucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBwYWludFN0YXJ0KTtcbiAgY2FudmFzLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgZHJhd2luZyk7XG4gIGNhbnZhcy5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCBwYWludEVuZCk7XG4gIGNhbnZhcy5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCBwYWludEVuZCk7XG59O1xuXG5leHBvcnQgY29uc3QgZW5hYmxlID0gKCkgPT4ge1xuICBidG5zLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjaGFuZ2VNb2RlKTtcbiAgcmFuZ2UuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIGhhbmRsZUlucHV0KTtcbiAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgcGFpbnRTdGFydCk7XG4gIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIGRyYXdpbmcpO1xuICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgcGFpbnRFbmQpO1xuICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgcGFpbnRFbmQpO1xufTtcblxuZXhwb3J0IGNvbnN0IGluaXRpYWxfc2V0dGluZyA9ICgpID0+IHtcbiAgY3R4LnN0cm9rZVN0eWxlID0gXCJyZ2IoNDQsIDQ0LCA0NClcIjtcbiAgY29sb3JfYXJyYXkuZm9yRWFjaCgoaXRlbSkgPT4gKGl0ZW0uc3R5bGUudHJhbnNmb3JtID0gXCJzY2FsZSgxKVwiKSk7XG4gIGNvbG9yX2FycmF5WzBdLnN0eWxlLnRyYW5zZm9ybSA9IFwic2NhbGUoMS41KVwiO1xuICBjb25zdCB2YWx1ZSA9IDU7XG4gIGNsaWVudC5lbWl0KFwiY2xpZW50X2xpbmVXaWR0aFwiLCB7IHZhbHVlIH0pO1xuICBjb250cm9scy5jbGFzc0xpc3QucmVtb3ZlKFwibm9uZVwiKTtcbn07XG5cbmZ1bmN0aW9uIGluaXQoKSB7XG4gIGN0eC5maWxsU3R5bGUgPSBcIndoaXRlXCI7XG4gIGN0eC5maWxsUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuICBjb2xvcl9hcnJheVswXS5zdHlsZS50cmFuc2Zvcm0gPSBcInNjYWxlKDEuNSlcIjtcbiAgZmlsbC5zdHlsZS5vcGFjaXR5ID0gMC41O1xuICBjb2xvcl9hcnJheS5mb3JFYWNoKChpdGVtKSA9PiBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVDb2xvcikpO1xuICBlbmFibGUoKTtcbiAgaW5pdGlhbF9zZXR0aW5nKCk7XG59XG5cbmluaXQoKTtcbiJdfQ==
},{"./client":2}],8:[function(require,module,exports){
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