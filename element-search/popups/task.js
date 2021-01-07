"use strict";

const main = document.getElementById("modal_main");
const close = [...document.getElementsByClassName("modal__close")];
const success = document.querySelector(".show-success");
const modal_success = document.getElementById("modal_success");

main.classList.add("modal_active");

close.forEach(item => {
    item.onclick = () => {
        main.classList.remove("modal_active");
        modal_success.classList.remove("modal_active");
    }
});

success.onclick = () => {
    modal_success.classList.add("modal_active");
    main.classList.remove("modal_active");
}
