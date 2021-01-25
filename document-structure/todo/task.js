'use strict';

const input = document.getElementById('task__input');
const tasksList = document.getElementById('tasks__list');
const button = document.getElementById('tasks__add');

button.addEventListener('click', e => {
    e.preventDefault();
    addTask();
});
input.addEventListener('keypress', e => {
    if (e.key === 'Enter') {
        addTask();
    }
});

function addTask() {
     if (input.value !== '') {
         let htmlContainer =
             `<div class="task">
                <div class="task__title">${input.value}</div>
                <a href="#" class="task__remove">&times;</a>
             </div>`;

         tasksList.insertAdjacentHTML('beforeEnd', htmlContainer);
     }
    input.value = '';
};

tasksList.addEventListener('click', e => {
    if (e.target.classList.contains('task__remove')) {
        e.target.closest('.task').remove();
    }
})

