"use strict";
/*

  Может стоит переделать на data-event=""

*/

function ClickSelector(element, className) {
  try {
    if (element.classList.contains(className)) {
      return element;
    } else {
      let el = (element.closest('.' + className)) ? element.closest('.' + className) : false;
      return el;
    }
  } catch (err) {
  }
}

function documentClicks() {
  document.addEventListener('click', function (e) {

    // Все действия с этом блоке зависят от element
    let
      target = e.target,
      element = false;

    // Пример на все случаи
    // if (document.querySelector('.select')) {
    //   element = ClickSelector(target, 'select');
    //   if (element) {
    //     #code...
    //   } else {
    //     selectClose();
    //     document.querySelector('.selector').classList.remove('active');
    //   }
    // }

    if (document.querySelector('#menu')) {
      element = ClickSelector(target, 'e_menu');
      if (element) {
        modalToggle('menu');
        element.classList.toggle('active');
      }
      element = ClickSelector(target, 'e_menu_close');
      if (element) {
        modalClose('menu');
        document.querySelector('.header__menu').classList.remove('active');
      }
      element = ClickSelector(target, 'menu-nav');
      if (element) {
        modalClose('menu');
        document.querySelector('.header__menu').classList.remove('active');
      }
    }


    if (document.querySelector('#pet')) {
      element = ClickSelector(target, 'e_pet');
      if (element) {
        modalOpen('pet');
      }
      element = ClickSelector(target, 'e_pet_close');
      if (element) {
        modalClose('pet');
      }
    }
  });
}


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


