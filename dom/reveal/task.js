'use strict';

const reveal = document.querySelectorAll('.reveal');
const viewportHeight = window.innerHeight;

document.addEventListener('scroll', () => {
    reveal.forEach((item, i) => {
        if (item.getBoundingClientRect().top < viewportHeight && item.getBoundingClientRect().bottom > 0) {
            item.classList.add('reveal_active');
        } else {
            item.classList.remove('reveal_active');
        }
    });
});

