import { systemMsg } from "./printMsg.js";
import { getSocket } from "./client.js";

const btn = document.querySelector(".start_btn");
const ul = document.querySelector(".user_list");
const answer_form = document.querySelector(".answer_form");

export const current_status = () => status;

const client = getSocket();

const handleSubmit = (event) => {
  event.preventDefault();
  const input = answer_form.querySelector("input");
  client.emit("client_submit_answer", { answer: input.value });
  input.value = "";
};

const gameStart = (event) => {
  const member = ul.childElementCount;
  const {
    target: { textContent },
  } = event;
  switch (textContent) {
    case "Game Start":
      if (member === 1) {
        systemMsg("참여 인원이 부족합니다.");
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
