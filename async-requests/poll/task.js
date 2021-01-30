'use strict';

let pollTitle = document.getElementById('poll__title');
let pollAnswers = document.getElementById('poll__answers');

let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php');
xhr.send();
xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
        let data = JSON.parse(xhr.responseText).data;
        pollTitle.innerHTML = data.title;

        for (let i = 0; i < data.answers.length; i++) {
            pollAnswers.insertAdjacentHTML('beforeEnd',
                `<button class="poll__answer">
                         ${data.answers[i]}
                      </button>`);
        }
    }
});
pollAnswers.addEventListener('click', (el) => {
    if (el.target.classList.contains('poll__answer')) {
        alert('Спасибо, ваш голос засчитан!');
    }
});
