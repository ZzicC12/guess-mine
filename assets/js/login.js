import { client } from "./client.js";
import { systemMsg } from "./printMsg";

const login_form = document.querySelector(".login");
const input = login_form.querySelector("input");
const login_section = document.querySelector(".login_section");
const game_section = document.querySelector(".game_section");
const answer_box = document.querySelector(".submit");

const logIn = (name) => {
  client(name);
  systemMsg(`Hi ${name}`);
};

const handleSubmit = (event) => {
  const { value } = input;
  event.preventDefault();
  localStorage.setItem("username", value);
  logIn(value);
  login_section.classList.add("none");
  game_section.classList.remove("none");
};

function init() {
  answer_box.classList.add("none");
  const username = localStorage.getItem("username");
  if (username === null) {
    login_form.addEventListener("submit", handleSubmit);
    game_section.classList.add("none");
  } else {
    login_section.classList.add("none");
    logIn(username);
  }
}

init();
