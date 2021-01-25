'use strict';

const tooltips = document.querySelectorAll('.has-tooltip');

tooltips.forEach((item) => {
    item.insertAdjacentHTML("beforeEnd", `<div class="tooltip">${item.title}</div>`);
    item.addEventListener('click', (event) => {
        event.preventDefault();
        const tooltipItem = item.querySelector('.tooltip');
        if (tooltipItem.classList.contains("tooltip_active")) {
            tooltipItem.classList.remove("tooltip_active");
        } else {
            const tootlip = document.querySelectorAll(".tooltip");
            tootlip.forEach((e) => e.classList.remove("tooltip_active"));
            tooltipItem.classList.add("tooltip_active");
        }
    });
});

