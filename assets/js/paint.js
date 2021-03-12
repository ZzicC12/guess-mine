import { getSocket } from "./client";
import { current_status } from "./clientController.js";

export const canvas = document.querySelector("#jsCanvas");
export const ctx = canvas.getContext("2d");
export const controls = document.querySelector(".controls");

const color_array = Array.from(document.querySelectorAll(".controls__color"));
const range = document.querySelector("#jsRange");
const btns = document.querySelector(".controls__btns");
const paint = document.querySelector("#jsPaint");
const fill = document.querySelector("#jsFill");

let painting = false;
let mode = "Paint";
let currentColor = "";

const client = getSocket();

const changeMode = (event) => {
  if (event.target.textContent === "Paint") {
    mode = "Paint";
    event.target.style.opacity = 1;
    fill.style.opacity = 0.5;
    color_array.forEach((item) => (item.style.transform = "scale(1)"));
  } else {
    mode = "Fill";
    event.target.style.opacity = 1;
    paint.style.opacity = 0.5;
    color_array.forEach((item) => (item.style.transform = "scale(1)"));
  }
};

const handleInput = (event) => {
  const {
    target: { value },
  } = event;
  ctx.lineWidth = value;
  current_status() && client.emit("client_lineWidth", { value });
};

const paintEnd = () => {
  painting = false;
};

const drawing = (event) => {
  if (painting) {
    const x = event.offsetX;
    const y = event.offsetY;
    ctx.lineTo(x, y);
    ctx.stroke();
    current_status() && client.emit("client_paint", { x, y });
  }
};

const paintStart = () => {
  if (mode === "Paint") {
    ctx.beginPath();
    painting = true;
    current_status() && client.emit("client_begin");
  }
};

const handleColor = (event) => {
  const {
    target: {
      dataset: { number },
      style: { backgroundColor },
    },
  } = event;
  ctx.strokeStyle = backgroundColor;
  ctx.fillStyle = backgroundColor;
  currentColor = backgroundColor;
  current_status() && client.emit("client_color", currentColor);
  if (mode === "Fill") {
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    current_status() && client.emit("client_fill", { color: currentColor });
  }
  color_array.forEach((item) => {
    if (item.dataset.number != number) {
      item.style.transform = "scale(1)";
    } else {
      item.style.transform = "scale(1.5)";
    }
  });
};

export const disable = () => {
  btns.removeEventListener("click", changeMode);
  range.removeEventListener("input", handleInput);
  canvas.removeEventListener("mousedown", paintStart);
  canvas.removeEventListener("mousemove", drawing);
  canvas.removeEventListener("mouseup", paintEnd);
  canvas.removeEventListener("mouseleave", paintEnd);
};

export const enable = () => {
  btns.addEventListener("click", changeMode);
  range.addEventListener("input", handleInput);
  canvas.addEventListener("mousedown", paintStart);
  canvas.addEventListener("mousemove", drawing);
  canvas.addEventListener("mouseup", paintEnd);
  canvas.addEventListener("mouseleave", paintEnd);
};

export const initial_setting = () => {
  // 기본 색상, 굵기 설정
  ctx.lineWidth = 5;
  ctx.strokeStyle = "rgb(44, 44, 44)";
  // control 설정
  color_array.forEach((item) => (item.style.transform = "scale(1)"));
  color_array[0].style.transform = "scale(1.5)";
  controls.classList.remove("none");
  fill.style.opacity = 0.5;
};

function init() {
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  color_array.forEach((item) => item.addEventListener("click", handleColor));
  enable();
  initial_setting();
}

init();
