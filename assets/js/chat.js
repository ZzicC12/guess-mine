import { userMsg } from "./printMsg";
import { getSocket } from "./client";

const client = getSocket();
const chat_form = document.querySelector(".chat");
const input = chat_form.querySelector("input");

const handleSubmit = (event) => {
  event.preventDefault();
  const { value } = input;

  if (value) {
    userMsg(value, "", "me");
    client.emit("client_send_msg", { message: value });
    input.value = "";
  }
};

function init() {
  chat_form.addEventListener("submit", handleSubmit);
}

init();
