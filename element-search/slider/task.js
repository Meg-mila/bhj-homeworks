'use strict'
const slider = document.querySelectorAll('.slider__item');
const prev = document.querySelector('.slider__arrow_prev');
const next = document.querySelector('.slider__arrow_next');
let numberSlider = 0;

prev.onclick = () => {
    if (numberSlider - 1 < 0) {
        numberSlider = slider.length - 1;
    } else {
        numberSlider -= 1;
    }
    change(numberSlider);
}
next.onclick = () => {
    if (numberSlider + 1 === slider.length) {
        numberSlider = 0;
    } else {
        numberSlider += 1;
    }
    change(numberSlider);
}

function change(i) {
    [...slider].forEach((item) => item.classList.remove('slider__item_active'));
    slider[i].classList.add('slider__item_active');
}
