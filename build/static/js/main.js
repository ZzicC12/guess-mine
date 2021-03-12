"use strict";

(function e(t, n, r) {
  function s(o, u) {
    if (!n[o]) {
      if (!t[o]) {
        var a = typeof require == "function" && require;
        if (!u && a) return a(o, !0);
        if (i) return i(o, !0);
        throw new Error("Cannot find module '" + o + "'");
      }

      var f = n[o] = {
        exports: {}
      };
      t[o][0].call(f.exports, function (e) {
        var n = t[o][1][e];
        return s(n ? n : e);
      }, f, f.exports, e, t, n, r);
    }

    return n[o].exports;
  }

  var i = typeof require == "function" && require;

  for (var o = 0; o < r.length; o++) {
    s(r[o]);
  }

  return s;
})({
  1: [function (require, module, exports) {
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
  }, {
    "./client": 2,
    "./printMsg": 8
  }],
  2: [function (require, module, exports) {
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
  }, {
    "./clientController.js": 3
  }],
  3: [function (require, module, exports) {
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
  }, {
    "./client.js": 2,
    "./paint.js": 7,
    "./printMsg.js": 8
  }],
  4: [function (require, module, exports) {
    "use strict";

    require("./clientController.js");

    require("./login.js");

    require("./client.js");

    require("./chat.js");

    require("./paint.js");

    require("./game.js");

    require("./printMsg");
  }, {
    "./chat.js": 1,
    "./client.js": 2,
    "./clientController.js": 3,
    "./game.js": 5,
    "./login.js": 6,
    "./paint.js": 7,
    "./printMsg": 8
  }],
  5: [function (require, module, exports) {
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
  }, {
    "./client.js": 2,
    "./printMsg.js": 8
  }],
  6: [function (require, module, exports) {
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
  }, {
    "./client.js": 2,
    "./printMsg": 8
  }],
  7: [function (require, module, exports) {
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
  }, {
    "./client": 2
  }],
  8: [function (require, module, exports) {
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
  }, {}]
}, {}, [4]);