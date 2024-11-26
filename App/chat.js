const chatWindow = document.getElementById("chat-window");
const messageInput = document.getElementById("message-input");
const sendButton = document.getElementById("send-button");

// Función para agregar mensajes al chat
function addMessage(text, sender) {
    const messageDiv = document.createElement("div");
    messageDiv.classList.add("message", sender);
    messageDiv.textContent = text;
    chatWindow.appendChild(messageDiv);

    // Hacer scroll automático hacia el último mensaje
    chatWindow.scrollTop = chatWindow.scrollHeight;
}

// Enviar mensaje al presionar el botón
sendButton.addEventListener("click", () => {
    const userMessage = messageInput.value.trim();
    if (userMessage) {
        addMessage(userMessage, "user"); // Mensaje del usuario
        messageInput.value = ""; // Limpiar el input

        // Respuesta automática ficticia del veterinario
        setTimeout(() => {
            addMessage("Gracias por tu mensaje. Te responderé en breve.", "bot");
        }, 1000);
    }
});

// Enviar mensaje al presionar Enter
messageInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        sendButton.click();
    }
});
