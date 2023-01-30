"use strict";
@@include('common/clicks.js')

/* BEGIN BASE FUNCTIONS */

// Модальные окна.
function modalOpen(eID) {
  document.querySelector('html').classList.add('overflow-hidden');
  let element = document.getElementById(eID);
  element.classList.remove('hidden');
}
function modalClose(eID) {
  document.querySelector('html').classList.remove('overflow-hidden');
  let element = document.getElementById(eID);
  element.classList.add('hidden');
}
function modalToggle(eID) {
  document.querySelector('html').classList.toggle('overflow-hidden');
  let element = document.getElementById(eID);
  element.classList.toggle('hidden');
}
/* END BASE FUNCTIONS */


// const smoothLinks = document.querySelectorAll('a[href^="#"]');
// for (let smoothLink of smoothLinks) {
//   smoothLink.addEventListener('click', function (e) {
//     e.preventDefault();
//     const id = smoothLink.getAttribute('href');

//     document.querySelector(id).scrollIntoView({
//       behavior: 'smooth',
//       block: 'start'
//     });
//   });
// };

function footer() {
  if (document.querySelector('footer')) {
    document.querySelector('.wrapper').style.paddingBottom = document.querySelector('footer').clientHeight + 'px';
  }
}


// Основной код после загрузки страницы.
document.addEventListener('DOMContentLoaded', function () {


  (function () { // Базовые функции
    documentClicks();
    footer();
  }());
});


function menuRemove() {
  modalClose('menu')
  document.querySelector('.header__menu').classList.remove('active');
}

window.addEventListener('resize', function () {
  footer();

  if (window.innerWidth >= 767) {
    menuRemove();
  }
});


