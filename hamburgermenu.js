'use strict';

window.addEventListener('load', sidenVises);

function sidenVises() {
  console.log('sidenVises');
  document.querySelector('#menuknap').addEventListener('click', toggleMenu);
}

function toggleMenu() {
  console.log('toggleMenu');
  document.querySelector('#menu').classList.toggle('hidden');

  let erSkjult = document.querySelector('#menu').classList.contains('hidden');

  if (erSkjult == true) {
    document.querySelector('#menuknap').textContent = 'Menu';
  } else {
    document.querySelector('#menuknap').textContent = 'Close';
  }
}

let prevScrollpos = window.pageYOffset;

// Skjult menu ved scroll

// window.onscroll = function () {
//   console.log("Menu forsvinder");
//   let currentScrollPos = window.pageYOffset;
//   if (prevScrollpos > currentScrollPos) {
//     document.querySelector("header").style.top = "0";
//     document.querySelector("main").style = "margin-top: 0px";
//   } else {
//     document.querySelector("header").style = "top: -127px;";
//     document.querySelector("main").style = "margin-top: -127px";
//   }
//   prevScrollpos = currentScrollPos;
// };
