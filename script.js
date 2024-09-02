document.querySelector('.open-dialogue-btn').addEventListener('click', function() {
    document.getElementById('profile-dialogue').style.display = 'flex';
});

document.querySelector('.close-dialogue-btn').addEventListener('click', function() {
    document.getElementById('profile-dialogue').style.display = 'none';
});


// chatbot
document.addEventListener('DOMContentLoaded', () => {
    const chatbot = document.getElementById('chatbot');
    const chatbotToggle = document.getElementById('chatbot-toggle');
    const chatbotClose = document.getElementById('chatbot-close');
    const chatbotSend = document.getElementById('chatbot-send');
    const chatbotUserInput = document.getElementById('chatbot-user-input');
    const chatbotMessages = document.getElementById('chatbot-messages');

    // Function to toggle chatbot visibility
    function toggleChatbot() {
        if (chatbot.style.display === 'flex') {
            chatbot.style.display = 'none';
        } else {
            chatbot.style.display = 'flex';
        }
    }

    // Toggle Chatbot Visibility on Button Click
    chatbotToggle.addEventListener('click', toggleChatbot);

    // Close Chatbot on Close Button Click
    chatbotClose.addEventListener('click', () => {
        chatbot.style.display = 'none';
    });

    // Function to send message
    function sendMessage() {
        const message = chatbotUserInput.value.trim();
        if (message === '') return;

        appendMessage(message, 'user');
        chatbotUserInput.value = '';
        respond(message);
    }

    // Append message to chat window
    function appendMessage(message, sender) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message', `${sender}-message`);
        const messageSpan = document.createElement('span');
        messageSpan.textContent = message;
        messageDiv.appendChild(messageSpan);
        chatbotMessages.appendChild(messageDiv);
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    }

    // Basic response function
    function respond(message) {
        const lowerCaseMessage = message.toLowerCase();
        let response = "I'm sorry, I didn't understand that. Could you please rephrase?";

        if (lowerCaseMessage.includes('hello') || lowerCaseMessage.includes('hi')) {
            response = 'Hello! How can I assist you today?';
        } else if (lowerCaseMessage.includes('pickup') || lowerCaseMessage.includes('schedule')) {
            response = 'You can schedule a pickup by clicking on the "Join the community" button on our homepage or by contacting our support team.';
        } else if (lowerCaseMessage.includes('pricing') || lowerCaseMessage.includes('cost')) {
            response = 'Our pricing plans are available under the "Our Pricing Plan" section. We offer various packages to suit your needs.';
        } else if (lowerCaseMessage.includes('recycle') || lowerCaseMessage.includes('recycling')) {
            response = 'We recycle your waste to keep the environment pollution-free. Learn more in the "How It Works" section.';
        } else if (lowerCaseMessage.includes('join') || lowerCaseMessage.includes('hiring')) {
            response = 'We are always looking for dedicated sanitation workers. Click on "Join us" to create your profile.';
        }

        appendMessage(response, 'bot');
    }

    // Send Message on Button Click
    chatbotSend.addEventListener('click', sendMessage);

    // Send Message on Enter Key
    chatbotUserInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });
});


// login button
document.addEventListener('DOMContentLoaded', () => {
    const loginButton = document.getElementById('login-button');
    const loginContainer = document.getElementById('login-container');
    const loginForm = document.getElementById('login');

    // Show the login form when the Login button is clicked
    loginButton.addEventListener('click', () => {
        loginContainer.style.display = 'block';
    });

    // Handle the login form submission
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value.trim();

        if (username && password) {
            console.log(`Username: ${username}, Password: ${password}`);
            alert('Login successful!');

            // Close the login form after a successful login
            loginContainer.style.display = 'none';
        } else {
            alert('Please fill in both fields.');
        }
    });
});

