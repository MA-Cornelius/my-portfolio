"use strict";

var aboutParagraph = document.getElementById("what2do");
var nameOfDev = document.getElementById("name");
var cursorGlow = document.createElement('div');
cursorGlow.className = 'cursor-glow';
document.body.appendChild(cursorGlow);
document.addEventListener('mousemove', function (e) {
  cursorGlow.style.left = "".concat(e.clientX, "px");
  cursorGlow.style.top = "".concat(e.clientY, "px");
});