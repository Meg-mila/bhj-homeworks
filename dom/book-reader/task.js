'use strict';

const btns = document.querySelectorAll('.font-size');
const book = document.querySelector('.book');

btns.forEach((item) => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector('.font-size_active').classList.remove('font-size_active');
        item.classList.add('font-size_active');
        if (item.dataset.size === 'small') {
            book.classList.add('book_fs-small');
        } else if (item.dataset.size === 'big') {
            book.classList.add('book_fs-big');
        } else {
            book.classList.remove('book_fs-small', 'book_fs-big');
        }
    });
});
