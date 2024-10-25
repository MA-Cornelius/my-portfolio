"use strict";

var nav = document.getElementsByClassName("line"); // for(var i=0; i<nav.length; i++){
//     nav.addEventListener("hover",function(){
//     this.style.color="pink"
// });
// };

function changeText() {
  nav.textContent = "OKAyys";
}

nav.addEventListener("click", "changeText");