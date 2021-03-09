import { clientController } from "./clientController.js";
import { systemMsg } from "./printMsg";

const login_form = document.querySelector(".login");
const input = login_form.querySelector("input");

const logIn = (name) => {
  clientController(name);
};

const handleSubmit = (event) => {
  event.preventDefault();
  localStorage.setItem("username", input.value);
  systemMsg(`Hi ${input.value}`);
  logIn(input.value);
};

function init() {
  const username = localStorage.getItem("username");
  if (username === null) {
    login_form.style.display = "block";
    login_form.addEventListener("submit", handleSubmit);
  } else {
    login_form.style.display = "none";
    systemMsg(`Hi ${username}`);
    logIn(username);
  }
}

init();
