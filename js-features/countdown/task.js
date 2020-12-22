'use strict'
let time;
let backTime = 59

function countdown() {
    document.getElementById('timer').innerHTML = backTime;

    if (backTime < 0) {
        clearInterval(time);
        alert('Вы победили в конкурсе');
    }

    backTime--;
}
time = setInterval(countdown, 1000);
