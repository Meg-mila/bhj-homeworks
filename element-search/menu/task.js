"use strict";

const links = [...document.getElementsByClassName("menu__link")];

links.forEach(item => {
    item.onclick = () => {
        const active = document.querySelector(".menu_active");
        if (item.closest("li.menu__item").querySelector("ul.menu_sub")) {
            item.closest("li.menu__item").querySelector("ul.menu_sub").classList.toggle("menu_active");
            if (active) {
                active.classList.remove("menu_active");
            }
            return false;
        }
    }
});
