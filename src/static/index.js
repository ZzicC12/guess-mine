const socket = io("/");

function sendMessage(message) {
  socket.emit("newMessage", { message });
}

function setName(name) {
  socket.emit("setName", { name });
}

const handleReceive = (data) => {
  console.log(data.name, ":", data.message);
};

socket.on("receive_message", handleReceive);
