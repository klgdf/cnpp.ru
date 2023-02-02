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

// modal
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

//fixed header
window.addEventListener('scroll', function (e) {
  if (document.querySelector('html').scrollTop > 0) {
    document.querySelector('header').classList.add("fixed");
    document.querySelector('body').classList.add("h-f");
  } else {
    document.querySelector('header').classList.remove("fixed");
    document.querySelector('body').classList.remove("h-f");
  }
});

function footer() {
  if (document.querySelector('footer')) {
    document.querySelector('.wrapper').style.paddingBottom = document.querySelector('footer').clientHeight + 'px';
  }
}

function currentYear() {
  let year = document.querySelector('.current-year');
  year.innerHTML = new Date().getFullYear();
}


// General code before loading page
document.addEventListener('DOMContentLoaded', function () {

  (function () { // base functions
    documentClicks();
    footer();
    currentYear();
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


