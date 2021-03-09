export const systemMsg = (text) => {
  const ul = document.querySelector(".chat_box");
  const li = document.createElement("li");
  li.textContent = text;
  li.setAttribute("class", "system");
  ul.appendChild(li);
};

export const userMsg = (text, user, className) => {
  const ul = document.querySelector(".chat_box");
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.textContent = `${user} ${text}`;
  li.setAttribute("class", className || "");
  li.appendChild(span);
  ul.appendChild(li);
  li.scrollIntoView();
};
