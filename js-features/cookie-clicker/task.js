'use strict'
let timer;
let backTime = 10;

function countdown() {
    document.getElementById('clicker__counter').innerHTML = backTime;

    if (backTime < 0) {
        clearInterval(timer);
        alert('Вы победили в конкурсе');
    }

    backTime--;
}
timer = setInterval(countdown, 1000);
