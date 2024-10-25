"use strict";

var aboutParagraph = document.getElementById("what2do");
var nameOfDev = document.getElementById("name");
var cursorGlow = document.createElement('div');
cursorGlow.className = 'cursor-glow';
document.body.appendChild(cursorGlow);
document.addEventListener('mousemove', function (e) {
  cursorGlow.style.left = "".concat(e.clientX, "px");
  cursorGlow.style.top = "".concat(e.clientY, "px");
}); // const parentDiv = document.querySelector('.experience');
// const heading = document.getElementsByClassName('.role');
// const images = document.getElementsByClassName('.images');
// parentDiv.addEventListener('mouseenter', () => {
//     parentDiv.forEach(parentDiv => parentDiv.classList.add('hover-effect'));
//     heading.forEach(headings => heading.classList.add('text-hover'));
//     images.forEach(images => images.classList.add('image-hover'));
// });
// parentDiv.addEventListener('mouseleave', () => {
//     parentDiv.forEach(parentDiv => parentDiv.classList.remove('hover-effect'));
//     heading.forEach(headings => heading.classList.remove('text-hover'));
//     images.forEach(images => images.classList.remove('image-hover'));
// });
// parentDiv.addEventListener('mouseenter', () => {
//     parentDiv.classList.add('hover-effect');
//     role.classList.add('text-hover');
//     role.classList.add('image-hover');
// });
// parentDiv.addEventListener('mouseleave', () => {
//     parentDiv.classList.remove('hover-effect'); 
//     role.classList.remove('text-hover');
//     role.classList.remove('image-hover');
// });