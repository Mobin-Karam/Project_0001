'use strict'


let imagebox5 = document.querySelector('.imgbox5')
imagebox5.addEventListener('click', () => {
    let element = document.querySelector('.imgbox5');
    element.style.width = '400px';
    element.style.setProperty('100px', '400px')
});