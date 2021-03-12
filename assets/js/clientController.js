import { systemMsg, userMsg, userList } from "./printMsg.js";
import {
  canvas,
  ctx,
  controls,
  enable,
  disable,
  initial_setting,
} from "./paint.js";
import { getSocket } from "./client.js";

const client = getSocket();
const btn = document.querySelector(".start_btn");
const answer_box = document.querySelector(".submit");
let quiz_answer;
let status = false;
const start_sound = new Audio("/sound/start.MP3");
const correct_sound = new Audio("/sound/correct.MP3");
const wrong_sound = new Audio("/sound/wrong.MP3");

export const current_status = () => status;

export const client_update_user = (data) => userList(data);

export const client_new_user = (data) => systemMsg(`${data.name} join`);

export const client_disconnected = (data) => systemMsg(`${data.name} left`);

export const client_send_msg = (data) =>
  userMsg(` : ${data.message}`, data.name, "you");

export const client_begin = () => ctx.beginPath();

export const client_paint = (data) => {
  ctx.lineTo(data.x, data.y);
  ctx.stroke();
};

export const client_fill = (data) => {
  ctx.fillStyle = data.color;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
};

export const client_lineWidth = (data) => {
  const range = document.querySelector("#jsRange");
  ctx.lineWidth = data.value;
  range.value = data.value;
};

export const client_color = (data) => (ctx.strokeStyle = data);

export const client_game_start = (data) => {
  status = true;
  btn.textContent = "Game Stop";
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  initial_setting();
  quiz_answer = data.answer;
  const master = data.users.find((item) => item.painter === true);
  systemMsg("Game Start");
  start_sound.play();

  if (client.id === master.id) {
    systemMsg("당신은 출제자입니다.");
    controls.classList.remove("none");
    systemMsg(`제시어 : ${data.answer}`);
  } else {
    systemMsg("문제를 풀어주세요.");
    disable();
    answer_box.classList.remove("none");
    controls.classList.add("none");
    btn.style.visibility = "hidden";
  }
};

export const client_submit_answer = (data) => {
  if (quiz_answer === data.answer) {
    systemMsg(`${data.answer} 🎉 정답입니다.`);
    correct_sound.play();
    client_game_end();
  } else {
    wrong_sound.play();
    systemMsg(`${data.answer} ❌ 오답입니다.`);
  }
};

export const client_game_end = () => {
  status = false;
  btn.style.visibility = "visible";
  enable();
  initial_setting();
  btn.textContent = "Game Start";
  answer_box.classList.add("none");
  systemMsg("Game End");
};
