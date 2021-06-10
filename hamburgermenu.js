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