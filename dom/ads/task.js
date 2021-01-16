'use strict';
const rotator = document.querySelectorAll('.rotator');

const change = () => {
    rotator.forEach((item) => {
        const rotatorCase = Array.from(item.querySelectorAll('.rotator__case'));
        let index = rotatorCase.findIndex(elem => elem.classList.contains('rotator__case_active'));

        rotatorCase[index].classList.remove('rotator__case_active');
        if (index === rotatorCase.length - 1) {
            index = -1;
        }
        rotatorCase[index + 1].classList.add('rotator__case_active');
    })
}
setInterval(change, 1000);


