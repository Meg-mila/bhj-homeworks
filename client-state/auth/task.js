'use strict';

const signin = document.getElementById('signin');
const signinBtn = document.getElementById('signin__btn');
const welcome = document.getElementById('welcome');
const userId = document.getElementById('user_id');

signin.classList.add('signin_active');
signinBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const form = document.getElementById('signin__form');
    const formData = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/auth.php');
    xhr.addEventListener('readystatechange', () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const response = JSON.parse(xhr.responseText);
            if (response.success) {
                localStorage.userId = response.user_id;
                signin.classList.remove('signin_active');
                welcome.classList.add('welcome_active');
                userId.innerText = localStorage.userId;
            } else {
                alert('Неверный логин/пароль');
            }
        }
    });
    xhr.send(formData);
});

