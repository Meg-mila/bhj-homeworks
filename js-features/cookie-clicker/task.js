'use strict'
const counter = document.getElementById('clicker__counter');
const cookie = document.getElementById('cookie');
let sumClick = 0;

cookie.onclick = function() {
    sumClick++;
    counter.textContent++;
    if (sumClick % 2 === 0) {
        cookie.width = 200;
    } else {
        cookie.width = 220;
    }
}
