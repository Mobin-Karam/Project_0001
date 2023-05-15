'use strict'

const panels = document.querySelectorAll('.panel');
const header = document.querySelectorAll('h1');
panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        removeActiveClass()
        panel.classList.add('active')
        header.forEach((head) => {
            removeActiveClassHeader();
            head.classList.add('activeh1');
        });
    });
});

function removeActiveClassHeader() {
    header.forEach((hd) => {
        hd.classList.remove('activeh1');
    });
};

function removeActiveClass() {
    panels.forEach((pan) => {
        pan.classList.remove('active');
    });
};
