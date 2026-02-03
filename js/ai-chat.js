const chatForm = document.getElementById("chatForm");
const chatInput = document.getElementById("chatInput");
const chatBox = document.getElementById("chatBox");

const addMessage = (text, type) => {
  const message = document.createElement("div");
  message.className = `msg ${type}`;

  const bubble = document.createElement("div");
  bubble.className = "msg-bubble";
  bubble.textContent = text;

  message.appendChild(bubble);
  chatBox.appendChild(message);
  chatBox.scrollTop = chatBox.scrollHeight;
};

chatForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const question = chatInput.value.trim();
  if (!question) return;

  addMessage(question, "user");
  chatInput.value = "";

  window.setTimeout(() => {
    addMessage("Thanks! I will help you shortly. Please check your notes section for detailed content.", "bot");
  }, 600);
});
