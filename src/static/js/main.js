(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var _printMsg = require("./printMsg");

var _clientController = require("./clientController");

var chat_form = document.querySelector(".chat");
var input = chat_form.querySelector("input");

var handleSubmit = function handleSubmit(event) {
  event.preventDefault();

  if (input.value) {
    var socket = (0, _clientController.getSocket)();
    (0, _printMsg.userMsg)(input.value, "", "me");
    socket.emit("sendMsg", {
      message: input.value
    });
    input.value = "";
  }
};

function init() {
  chat_form.addEventListener("submit", handleSubmit);
}

init();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXQuanMiXSwibmFtZXMiOlsiY2hhdF9mb3JtIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiaW5wdXQiLCJoYW5kbGVTdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwidmFsdWUiLCJzb2NrZXQiLCJlbWl0IiwibWVzc2FnZSIsImluaXQiLCJhZGRFdmVudExpc3RlbmVyIl0sIm1hcHBpbmdzIjoiOztBQUFBOztBQUNBOztBQUVBLElBQU1BLFNBQVMsR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLE9BQXZCLENBQWxCO0FBQ0EsSUFBTUMsS0FBSyxHQUFHSCxTQUFTLENBQUNFLGFBQVYsQ0FBd0IsT0FBeEIsQ0FBZDs7QUFFQSxJQUFNRSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxLQUFELEVBQVc7QUFDOUJBLEVBQUFBLEtBQUssQ0FBQ0MsY0FBTjs7QUFDQSxNQUFJSCxLQUFLLENBQUNJLEtBQVYsRUFBaUI7QUFDZixRQUFNQyxNQUFNLEdBQUcsa0NBQWY7QUFDQSwyQkFBUUwsS0FBSyxDQUFDSSxLQUFkLEVBQXFCLEVBQXJCLEVBQXlCLElBQXpCO0FBQ0FDLElBQUFBLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZLFNBQVosRUFBdUI7QUFBRUMsTUFBQUEsT0FBTyxFQUFFUCxLQUFLLENBQUNJO0FBQWpCLEtBQXZCO0FBQ0FKLElBQUFBLEtBQUssQ0FBQ0ksS0FBTixHQUFjLEVBQWQ7QUFDRDtBQUNGLENBUkQ7O0FBVUEsU0FBU0ksSUFBVCxHQUFnQjtBQUNkWCxFQUFBQSxTQUFTLENBQUNZLGdCQUFWLENBQTJCLFFBQTNCLEVBQXFDUixZQUFyQztBQUNEOztBQUVETyxJQUFJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlck1zZyB9IGZyb20gXCIuL3ByaW50TXNnXCI7XG5pbXBvcnQgeyBnZXRTb2NrZXQgfSBmcm9tIFwiLi9jbGllbnRDb250cm9sbGVyXCI7XG5cbmNvbnN0IGNoYXRfZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2hhdFwiKTtcbmNvbnN0IGlucHV0ID0gY2hhdF9mb3JtLnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFwiKTtcblxuY29uc3QgaGFuZGxlU3VibWl0ID0gKGV2ZW50KSA9PiB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIGlmIChpbnB1dC52YWx1ZSkge1xuICAgIGNvbnN0IHNvY2tldCA9IGdldFNvY2tldCgpO1xuICAgIHVzZXJNc2coaW5wdXQudmFsdWUsIFwiXCIsIFwibWVcIik7XG4gICAgc29ja2V0LmVtaXQoXCJzZW5kTXNnXCIsIHsgbWVzc2FnZTogaW5wdXQudmFsdWUgfSk7XG4gICAgaW5wdXQudmFsdWUgPSBcIlwiO1xuICB9XG59O1xuXG5mdW5jdGlvbiBpbml0KCkge1xuICBjaGF0X2Zvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBoYW5kbGVTdWJtaXQpO1xufVxuXG5pbml0KCk7XG4iXX0=
},{"./clientController":2,"./printMsg":5}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clientController = exports.getSocket = void 0;

var _printMsg = require("./printMsg.js");

var socket = io("/");

var getSocket = function getSocket() {
  return socket;
};

exports.getSocket = getSocket;

var clientController = function clientController(name) {
  socket.emit("setName", {
    name: name
  });
  socket.on("newUser", function (data) {
    return (0, _printMsg.systemMsg)("".concat(data, " join"), "system");
  });
  socket.on("disconnected", function (data) {
    return (0, _printMsg.systemMsg)("".concat(data.name, " left"), "system");
  });
  socket.on("receive_message", function (data) {
    return (0, _printMsg.userMsg)(" : ".concat(data.message), data.name, "you");
  });
};

exports.clientController = clientController;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudENvbnRyb2xsZXIuanMiXSwibmFtZXMiOlsic29ja2V0IiwiaW8iLCJnZXRTb2NrZXQiLCJjbGllbnRDb250cm9sbGVyIiwibmFtZSIsImVtaXQiLCJvbiIsImRhdGEiLCJtZXNzYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0EsSUFBTUEsTUFBTSxHQUFHQyxFQUFFLENBQUMsR0FBRCxDQUFqQjs7QUFFTyxJQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWTtBQUFBLFNBQU1GLE1BQU47QUFBQSxDQUFsQjs7OztBQUVBLElBQU1HLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsQ0FBQ0MsSUFBRCxFQUFVO0FBQ3hDSixFQUFBQSxNQUFNLENBQUNLLElBQVAsQ0FBWSxTQUFaLEVBQXVCO0FBQUVELElBQUFBLElBQUksRUFBSkE7QUFBRixHQUF2QjtBQUNBSixFQUFBQSxNQUFNLENBQUNNLEVBQVAsQ0FBVSxTQUFWLEVBQXFCLFVBQUNDLElBQUQ7QUFBQSxXQUFVLG1DQUFhQSxJQUFiLFlBQTBCLFFBQTFCLENBQVY7QUFBQSxHQUFyQjtBQUNBUCxFQUFBQSxNQUFNLENBQUNNLEVBQVAsQ0FBVSxjQUFWLEVBQTBCLFVBQUNDLElBQUQ7QUFBQSxXQUFVLG1DQUFhQSxJQUFJLENBQUNILElBQWxCLFlBQStCLFFBQS9CLENBQVY7QUFBQSxHQUExQjtBQUNBSixFQUFBQSxNQUFNLENBQUNNLEVBQVAsQ0FBVSxpQkFBVixFQUE2QixVQUFDQyxJQUFEO0FBQUEsV0FDM0Isb0NBQWNBLElBQUksQ0FBQ0MsT0FBbkIsR0FBOEJELElBQUksQ0FBQ0gsSUFBbkMsRUFBeUMsS0FBekMsQ0FEMkI7QUFBQSxHQUE3QjtBQUdELENBUE0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBzeXN0ZW1Nc2csIHVzZXJNc2cgfSBmcm9tIFwiLi9wcmludE1zZy5qc1wiO1xuY29uc3Qgc29ja2V0ID0gaW8oXCIvXCIpO1xuXG5leHBvcnQgY29uc3QgZ2V0U29ja2V0ID0gKCkgPT4gc29ja2V0O1xuXG5leHBvcnQgY29uc3QgY2xpZW50Q29udHJvbGxlciA9IChuYW1lKSA9PiB7XG4gIHNvY2tldC5lbWl0KFwic2V0TmFtZVwiLCB7IG5hbWUgfSk7XG4gIHNvY2tldC5vbihcIm5ld1VzZXJcIiwgKGRhdGEpID0+IHN5c3RlbU1zZyhgJHtkYXRhfSBqb2luYCwgXCJzeXN0ZW1cIikpO1xuICBzb2NrZXQub24oXCJkaXNjb25uZWN0ZWRcIiwgKGRhdGEpID0+IHN5c3RlbU1zZyhgJHtkYXRhLm5hbWV9IGxlZnRgLCBcInN5c3RlbVwiKSk7XG4gIHNvY2tldC5vbihcInJlY2VpdmVfbWVzc2FnZVwiLCAoZGF0YSkgPT5cbiAgICB1c2VyTXNnKGAgOiAke2RhdGEubWVzc2FnZX1gLCBkYXRhLm5hbWUsIFwieW91XCIpXG4gICk7XG59O1xuIl19
},{"./printMsg.js":5}],3:[function(require,module,exports){
"use strict";

require("./login.js");

require("./clientController.js");

require("./chat.js");
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZha2VfMWUwNmFhMDUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFDQTs7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4vbG9naW4uanNcIjtcbmltcG9ydCBcIi4vY2xpZW50Q29udHJvbGxlci5qc1wiO1xuaW1wb3J0IFwiLi9jaGF0LmpzXCI7XG4iXX0=
},{"./chat.js":1,"./clientController.js":2,"./login.js":4}],4:[function(require,module,exports){
"use strict";

var _clientController = require("./clientController.js");

var _printMsg = require("./printMsg");

var login_form = document.querySelector(".login");
var input = login_form.querySelector("input");

var logIn = function logIn(name) {
  (0, _clientController.clientController)(name);
};

var handleSubmit = function handleSubmit(event) {
  event.preventDefault();
  localStorage.setItem("username", input.value);
  (0, _printMsg.systemMsg)("Hi ".concat(input.value));
  logIn(input.value);
};

function init() {
  var username = localStorage.getItem("username");

  if (username === null) {
    login_form.style.display = "block";
    login_form.addEventListener("submit", handleSubmit);
  } else {
    login_form.style.display = "none";
    (0, _printMsg.systemMsg)("Hi ".concat(username));
    logIn(username);
  }
}

init();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmpzIl0sIm5hbWVzIjpbImxvZ2luX2Zvcm0iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJpbnB1dCIsImxvZ0luIiwibmFtZSIsImhhbmRsZVN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwidmFsdWUiLCJpbml0IiwidXNlcm5hbWUiLCJnZXRJdGVtIiwic3R5bGUiLCJkaXNwbGF5IiwiYWRkRXZlbnRMaXN0ZW5lciJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFDQTs7QUFFQSxJQUFNQSxVQUFVLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixRQUF2QixDQUFuQjtBQUNBLElBQU1DLEtBQUssR0FBR0gsVUFBVSxDQUFDRSxhQUFYLENBQXlCLE9BQXpCLENBQWQ7O0FBRUEsSUFBTUUsS0FBSyxHQUFHLFNBQVJBLEtBQVEsQ0FBQ0MsSUFBRCxFQUFVO0FBQ3RCLDBDQUFpQkEsSUFBakI7QUFDRCxDQUZEOztBQUlBLElBQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLEtBQUQsRUFBVztBQUM5QkEsRUFBQUEsS0FBSyxDQUFDQyxjQUFOO0FBQ0FDLEVBQUFBLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixVQUFyQixFQUFpQ1AsS0FBSyxDQUFDUSxLQUF2QztBQUNBLHdDQUFnQlIsS0FBSyxDQUFDUSxLQUF0QjtBQUNBUCxFQUFBQSxLQUFLLENBQUNELEtBQUssQ0FBQ1EsS0FBUCxDQUFMO0FBQ0QsQ0FMRDs7QUFPQSxTQUFTQyxJQUFULEdBQWdCO0FBQ2QsTUFBTUMsUUFBUSxHQUFHSixZQUFZLENBQUNLLE9BQWIsQ0FBcUIsVUFBckIsQ0FBakI7O0FBQ0EsTUFBSUQsUUFBUSxLQUFLLElBQWpCLEVBQXVCO0FBQ3JCYixJQUFBQSxVQUFVLENBQUNlLEtBQVgsQ0FBaUJDLE9BQWpCLEdBQTJCLE9BQTNCO0FBQ0FoQixJQUFBQSxVQUFVLENBQUNpQixnQkFBWCxDQUE0QixRQUE1QixFQUFzQ1gsWUFBdEM7QUFDRCxHQUhELE1BR087QUFDTE4sSUFBQUEsVUFBVSxDQUFDZSxLQUFYLENBQWlCQyxPQUFqQixHQUEyQixNQUEzQjtBQUNBLDBDQUFnQkgsUUFBaEI7QUFDQVQsSUFBQUEsS0FBSyxDQUFDUyxRQUFELENBQUw7QUFDRDtBQUNGOztBQUVERCxJQUFJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY2xpZW50Q29udHJvbGxlciB9IGZyb20gXCIuL2NsaWVudENvbnRyb2xsZXIuanNcIjtcbmltcG9ydCB7IHN5c3RlbU1zZyB9IGZyb20gXCIuL3ByaW50TXNnXCI7XG5cbmNvbnN0IGxvZ2luX2Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxvZ2luXCIpO1xuY29uc3QgaW5wdXQgPSBsb2dpbl9mb3JtLnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFwiKTtcblxuY29uc3QgbG9nSW4gPSAobmFtZSkgPT4ge1xuICBjbGllbnRDb250cm9sbGVyKG5hbWUpO1xufTtcblxuY29uc3QgaGFuZGxlU3VibWl0ID0gKGV2ZW50KSA9PiB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidXNlcm5hbWVcIiwgaW5wdXQudmFsdWUpO1xuICBzeXN0ZW1Nc2coYEhpICR7aW5wdXQudmFsdWV9YCk7XG4gIGxvZ0luKGlucHV0LnZhbHVlKTtcbn07XG5cbmZ1bmN0aW9uIGluaXQoKSB7XG4gIGNvbnN0IHVzZXJuYW1lID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VybmFtZVwiKTtcbiAgaWYgKHVzZXJuYW1lID09PSBudWxsKSB7XG4gICAgbG9naW5fZm9ybS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgIGxvZ2luX2Zvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBoYW5kbGVTdWJtaXQpO1xuICB9IGVsc2Uge1xuICAgIGxvZ2luX2Zvcm0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIHN5c3RlbU1zZyhgSGkgJHt1c2VybmFtZX1gKTtcbiAgICBsb2dJbih1c2VybmFtZSk7XG4gIH1cbn1cblxuaW5pdCgpO1xuIl19
},{"./clientController.js":2,"./printMsg":5}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userMsg = exports.systemMsg = void 0;

var systemMsg = function systemMsg(text) {
  var ul = document.querySelector(".chat_box");
  var li = document.createElement("li");
  li.textContent = text;
  li.setAttribute("class", "system");
  ul.appendChild(li);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByaW50TXNnLmpzIl0sIm5hbWVzIjpbInN5c3RlbU1zZyIsInRleHQiLCJ1bCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImxpIiwiY3JlYXRlRWxlbWVudCIsInRleHRDb250ZW50Iiwic2V0QXR0cmlidXRlIiwiYXBwZW5kQ2hpbGQiLCJ1c2VyTXNnIiwidXNlciIsImNsYXNzTmFtZSIsInNwYW4iLCJzY3JvbGxJbnRvVmlldyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFPLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNDLElBQUQsRUFBVTtBQUNqQyxNQUFNQyxFQUFFLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixXQUF2QixDQUFYO0FBQ0EsTUFBTUMsRUFBRSxHQUFHRixRQUFRLENBQUNHLGFBQVQsQ0FBdUIsSUFBdkIsQ0FBWDtBQUNBRCxFQUFBQSxFQUFFLENBQUNFLFdBQUgsR0FBaUJOLElBQWpCO0FBQ0FJLEVBQUFBLEVBQUUsQ0FBQ0csWUFBSCxDQUFnQixPQUFoQixFQUF5QixRQUF6QjtBQUNBTixFQUFBQSxFQUFFLENBQUNPLFdBQUgsQ0FBZUosRUFBZjtBQUNELENBTk07Ozs7QUFRQSxJQUFNSyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFDVCxJQUFELEVBQU9VLElBQVAsRUFBYUMsU0FBYixFQUEyQjtBQUNoRCxNQUFNVixFQUFFLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixXQUF2QixDQUFYO0FBQ0EsTUFBTUMsRUFBRSxHQUFHRixRQUFRLENBQUNHLGFBQVQsQ0FBdUIsSUFBdkIsQ0FBWDtBQUNBLE1BQU1PLElBQUksR0FBR1YsUUFBUSxDQUFDRyxhQUFULENBQXVCLE1BQXZCLENBQWI7QUFDQU8sRUFBQUEsSUFBSSxDQUFDTixXQUFMLGFBQXNCSSxJQUF0QixjQUE4QlYsSUFBOUI7QUFDQUksRUFBQUEsRUFBRSxDQUFDRyxZQUFILENBQWdCLE9BQWhCLEVBQXlCSSxTQUFTLElBQUksRUFBdEM7QUFDQVAsRUFBQUEsRUFBRSxDQUFDSSxXQUFILENBQWVJLElBQWY7QUFDQVgsRUFBQUEsRUFBRSxDQUFDTyxXQUFILENBQWVKLEVBQWY7QUFDQUEsRUFBQUEsRUFBRSxDQUFDUyxjQUFIO0FBQ0QsQ0FUTSIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBzeXN0ZW1Nc2cgPSAodGV4dCkgPT4ge1xuICBjb25zdCB1bCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2hhdF9ib3hcIik7XG4gIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICBsaS50ZXh0Q29udGVudCA9IHRleHQ7XG4gIGxpLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwic3lzdGVtXCIpO1xuICB1bC5hcHBlbmRDaGlsZChsaSk7XG59O1xuXG5leHBvcnQgY29uc3QgdXNlck1zZyA9ICh0ZXh0LCB1c2VyLCBjbGFzc05hbWUpID0+IHtcbiAgY29uc3QgdWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNoYXRfYm94XCIpO1xuICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBzcGFuLnRleHRDb250ZW50ID0gYCR7dXNlcn0gJHt0ZXh0fWA7XG4gIGxpLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIGNsYXNzTmFtZSB8fCBcIlwiKTtcbiAgbGkuYXBwZW5kQ2hpbGQoc3Bhbik7XG4gIHVsLmFwcGVuZENoaWxkKGxpKTtcbiAgbGkuc2Nyb2xsSW50b1ZpZXcoKTtcbn07XG4iXX0=
},{}]},{},[3])