(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var socket = io("/");

function sendMessage(message) {
  socket.emit("newMessage", {
    message: message
  });
}

function setName(name) {
  socket.emit("setName", {
    name: name
  });
}

var handleReceive = function handleReceive(data) {
  console.log(data.name, ":", data.message);
};

socket.on("receive_message", handleReceive);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZha2VfNTY0MmFiODUuanMiXSwibmFtZXMiOlsic29ja2V0IiwiaW8iLCJzZW5kTWVzc2FnZSIsIm1lc3NhZ2UiLCJlbWl0Iiwic2V0TmFtZSIsIm5hbWUiLCJoYW5kbGVSZWNlaXZlIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJvbiJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNQSxNQUFNLEdBQUdDLEVBQUUsQ0FBQyxHQUFELENBQWpCOztBQUVBLFNBQVNDLFdBQVQsQ0FBcUJDLE9BQXJCLEVBQThCO0FBQzVCSCxFQUFBQSxNQUFNLENBQUNJLElBQVAsQ0FBWSxZQUFaLEVBQTBCO0FBQUVELElBQUFBLE9BQU8sRUFBUEE7QUFBRixHQUExQjtBQUNEOztBQUVELFNBQVNFLE9BQVQsQ0FBaUJDLElBQWpCLEVBQXVCO0FBQ3JCTixFQUFBQSxNQUFNLENBQUNJLElBQVAsQ0FBWSxTQUFaLEVBQXVCO0FBQUVFLElBQUFBLElBQUksRUFBSkE7QUFBRixHQUF2QjtBQUNEOztBQUVELElBQU1DLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBQ0MsSUFBRCxFQUFVO0FBQzlCQyxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsSUFBSSxDQUFDRixJQUFqQixFQUF1QixHQUF2QixFQUE0QkUsSUFBSSxDQUFDTCxPQUFqQztBQUNELENBRkQ7O0FBSUFILE1BQU0sQ0FBQ1csRUFBUCxDQUFVLGlCQUFWLEVBQTZCSixhQUE3QiIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHNvY2tldCA9IGlvKFwiL1wiKTtcblxuZnVuY3Rpb24gc2VuZE1lc3NhZ2UobWVzc2FnZSkge1xuICBzb2NrZXQuZW1pdChcIm5ld01lc3NhZ2VcIiwgeyBtZXNzYWdlIH0pO1xufVxuXG5mdW5jdGlvbiBzZXROYW1lKG5hbWUpIHtcbiAgc29ja2V0LmVtaXQoXCJzZXROYW1lXCIsIHsgbmFtZSB9KTtcbn1cblxuY29uc3QgaGFuZGxlUmVjZWl2ZSA9IChkYXRhKSA9PiB7XG4gIGNvbnNvbGUubG9nKGRhdGEubmFtZSwgXCI6XCIsIGRhdGEubWVzc2FnZSk7XG59O1xuXG5zb2NrZXQub24oXCJyZWNlaXZlX21lc3NhZ2VcIiwgaGFuZGxlUmVjZWl2ZSk7XG4iXX0=
},{}]},{},[1])