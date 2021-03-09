import { userMsg } from "./printMsg";
import { getSocket } from "./clientController";

const chat_form = document.querySelector(".chat");
const input = chat_form.querySelector("input");

const handleSubmit = (event) => {
  event.preventDefault();
  if (input.value) {
    const socket = getSocket();
    userMsg(input.value, "", "me");
    socket.emit("sendMsg", { message: input.value });
    input.value = "";
  }
};

function init() {
  chat_form.addEventListener("submit", handleSubmit);
}

init();
