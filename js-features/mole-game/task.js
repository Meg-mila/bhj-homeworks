'use strict'
const hit = document.getElementById('dead');
const miss = document.getElementById('lost');

const getHole = index => document.getElementById(`hole${index}`);

function reloadGame() {
    hit.textContent = 0;
    miss.textContent = 0;
};

for (let i = 1; i < 10; i++) {
    const hole = getHole(i);
    hole.onclick = function () {
        hole.classList.contains('hole_has-mole') ? hit.textContent++ : miss.textContent++;

        if (hit.textContent == 10) {
            alert('Вы победили');
            reloadGame();
        }
        ;

        if (miss.textContent == 5) {
            alert('Вы проиграли');
            reloadGame()
        }
        ;
    };
}
;
