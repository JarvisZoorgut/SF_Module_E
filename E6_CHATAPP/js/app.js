const loginForm = document.getElementById('login-form');
const messenger = document.getElementById('messenger');
const chatList = document.getElementById('chat-list');
const messageList = document.getElementById('message-list');
const messageInput = document.getElementById('message-input');
const userList = document.getElementById('user-list');

const loginBtn = document.getElementById('login-btn');
const sendBtn = document.getElementById('send-btn');

let currentChatId = null;
let socket = null;
let token = null;  // Будем использовать для авторизации

// Логин пользователя
loginBtn.addEventListener('click', () => {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    fetch('/api/token/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
    })
    .then(response => response.json())
    .then(data => {
        token = data.access;
        loginForm.style.display = 'none';
        messenger.style.display = 'block';
        loadChats();
        loadUsers();
    })
    .catch(error => {
        console.error('Error:', error);
    });
});

// Загрузка чатов
function loadChats() {
    fetch('/api/chats/', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`,
        }
    })
    .then(response => response.json())
    .then(chats => {
        chatList.innerHTML = '';
        chats.forEach(chat => {
            const li = document.createElement('li');
            li.textContent = chat.name;
            li.addEventListener('click', () => openChat(chat.id));
            chatList.appendChild(li);
        });
    });
}

// Загрузка пользователей
function loadUsers() {
    fetch('/api/users/', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`,
        }
    })
    .then(response => response.json())
    .then(users => {
        userList.innerHTML = '';
        users.forEach(user => {
            const li = document.createElement('li');
            li.textContent = user.username;
            li.addEventListener('click', () => createChatWithUser(user.id));
            userList.appendChild(li);
        });
    });
}

// Открытие чата
function openChat(chatId) {
    currentChatId = chatId;
    messageList.innerHTML = '';

    // Отключение предыдущего WebSocket
    if (socket) {
        socket.close();
    }

    // Подключение нового WebSocket
    socket = new WebSocket(`ws://localhost:8000/ws/chat/${chatId}/`);

    socket.onmessage = function(event) {
        const data = JSON.parse(event.data);
        const message = document.createElement('div');
        message.textContent = `${data.sender}: ${data.message}`;
        messageList.appendChild(message);
    };

    // Загрузка истории сообщений
    fetch(`/api/chats/${chatId}/messages/`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`,
        }
    })
    .then(response => response.json())
    .then(messages => {
        messages.forEach(message => {
            const div = document.createElement('div');
            div.textContent = `${message.sender.username}: ${message.content}`;
            messageList.appendChild(div);
        });
    });
}

// Отправка сообщения
sendBtn.addEventListener('click', () => {
    const message = messageInput.value;
    if (message && currentChatId && socket) {
        socket.send(JSON.stringify({
            'message': message
        }));
        messageInput.value = '';
    }
});

// Создание нового чата с пользователем
function createChatWithUser(userId) {
    fetch('/api/chats/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({ members: [userId] }),
    })
    .then(response => response.json())
    .then(chat => {
        loadChats();  // Обновляем список чатов
        openChat(chat.id);
    });
}
