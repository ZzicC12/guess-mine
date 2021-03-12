export const systemMsg = (text) => {
  const ul = document.querySelector(".chat_box");
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.textContent = text;
  li.setAttribute("class", "system");
  li.appendChild(span);
  ul.appendChild(li);
  li.scrollIntoView({ block: "end" });
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

export const userList = ({ users }) => {
  const ul = document.querySelector(".user_list");
  ul.innerHTML = "";
  users.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item.name;
    ul.appendChild(li);
  });
};
