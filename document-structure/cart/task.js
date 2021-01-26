'use strict';

let quantity = document.getElementsByClassName('product__quantity-value');
let add = document.getElementsByClassName('product__add');
let cartProducts = document.querySelector('.cart__products');
let product = document.getElementsByClassName('product');
let plus = document.getElementsByClassName('product__quantity-control_inc');
let minus = document.getElementsByClassName('product__quantity-control_dec');

for (let i = 0; i < quantity.length; i++) {

    plus[i].addEventListener('click', () => {
        quantity[i].textContent++;
    })

    minus[i].addEventListener('click', () => {
        quantity[i].textContent--;

        if (quantity[i].textContent < '1') {
            quantity[i].textContent = '1';
        }
    });

    add[i].addEventListener('click', () => {
        if(quantity[i].textContent === '0') {
            return
        }
        for (let j = 0; j < cartProducts.children.length; j++) {
            if (cartProducts.children[j].dataset.id === product[i].dataset.id) {
                return cartProducts.children[j].querySelector('.cart__product-count').textContent = Number(cartProducts.children[j].querySelector('.cart__product-count').textContent) + Number(quantity[j].textContent);
            }
        }

        cartProducts.insertAdjacentHTML('beforeend', `
            <div class="cart__product" data-id="${product[i].dataset.id}">
                <img class="cart__product-image" src="${product[i].querySelector('img').getAttribute('src')}">
                <div class="cart__product-count">${quantity[i].textContent}</div>
            </div>
        `);
    });
}
