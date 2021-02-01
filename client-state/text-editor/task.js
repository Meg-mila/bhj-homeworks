'use strict';

const editor = document.getElementById('editor');
const btn =document.getElementById('button');

editor.value = localStorage.getItem('text');

editor.addEventListener('input', () => {
    localStorage.setItem('text', editor.value);
});

btn.addEventListener('click', () => {
    editor.value = '';
    localStorage.clear();
});
