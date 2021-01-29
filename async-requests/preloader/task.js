'use strict';

const items = document.getElementById("items");
const loader = document.getElementById("loader");

let xhr = new XMLHttpRequest();
xhr.open("GET", "https://netology-slow-rest.herokuapp.com");
xhr.send();

xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
        let data = JSON.parse(xhr.responseText);
        loader.classList.remove('loader_active');

        for (let valute in data.response.Valute) {

            items.innerHTML += `<div class="item">
            <div class="item__code">${data.response.Valute[valute].CharCode}</div>
            <div class="item__value">${data.response.Valute[valute].Value}</div>
            <div class="item__currency">руб.</div>
            </div>
            `
        }
    }
};
