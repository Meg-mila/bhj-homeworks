'use strict';

const openChat = document.querySelector('.chat-widget');
const input = document.getElementById("chat-widget__input");
const chatMessages = document.getElementById("chat-widget__messages");

openChat.addEventListener('click', () => {
    openChat.classList.add('chat-widget_active');
} );

const robotPhrases = [
    "Добрый день, позвоните через 10 лет",
    "До свидания!",
    "Никого нет дома",
    "Кто здесь?",
    "Где ваша совесть?",
    "Мы ничего не будем вам продавать!",
    "Не пишите нам больше!",
    "Ну уж нет",
    "Сколько еще раз вам повторять? Нет!",
    "Откуда такая агрессия?"
];
function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
};

input.addEventListener('keypress', e => {
    if (e.key == 'Enter') {
        const date = new Date();
        chatMessages.innerHTML += `
        <div class="message message_client">
          <div class="message__time">${date.getHours()}:${date.getMinutes()}</div>
          <div class="message__text">
            ${input.value}
          </div>
        </div>
        <div class="message">
          <div class="message__time">${date.getHours()}:${date.getMinutes()}</div>
          <div class="message__text">
            ${robotPhrases[getRandom(0, robotPhrases.length - 1)]}
          </div>
        </div>`
        input.value='';
    }
});


