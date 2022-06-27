'use strict';

const box = document.querySelector('.box');

const width = box.clientWidth;
const height = box.clientHeight;

const widthoffset = box.offsetWidth;
const heightoffset = box.offsetHeight;

const widthscroll = box.scrollWidth;
const heightscroll = box.scrollHeight;

console.log(width, height);
console.log(widthoffset, heightoffset);
console.log(widthscroll, heightscroll);

const btn = document.querySelector('button');
btn.addEventListener('click', ()=>{
    box.style.height = heightscroll + 'px'; 
    console.log(box.scrolltop);
});

console.log(box.getBoundingClientRect().top);

const style = window.getComputedStyle(box);
console.log(style.display);

