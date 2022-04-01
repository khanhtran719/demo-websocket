const socket = io('http://localhost:3001');

const message = document.getElementById('message');
const messages = document.getElementById('messages');

const handleSubmitNewMessage = () => {
  socket.emit('message', { data: message.value });
  document.getElementById("message").value = "";
};

socket.on('message', ({ data }) => {
  handleNewMessage(data);
});

const handleNewMessage = (message) => {
  messages.appendChild(buildNewMessage(message));
};

const buildNewMessage = (message) => {
  const li = document.createElement('li');
  li.appendChild(document.createTextNode(message));
  return li;
};