'use strict';

const subscribe = document.getElementById('subscribe-modal');
const modalClose = document.querySelector('.modal__close');

if (!getCookie('modal')) {
    subscribe.classList.add('modal_active');
}

modalClose.addEventListener('click', () => {
    document.cookie = 'modal=closed';
    subscribe.classList.remove('modal_active');
});

function getCookie(name) {
    let matches = document.cookie.match(new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}
