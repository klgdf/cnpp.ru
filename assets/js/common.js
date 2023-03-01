"use strict";
let sub = document.querySelectorAll('.menu > .menu-item-has-children > .sub-menu');
let btn = document.querySelectorAll('.header .menu > .menu-item-has-children');
let nav = document.querySelectorAll('.header__center');
let burgerMenu = document.querySelector('.header__menu');
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


let burger_status = ''; // '' || 'active' || 'active-sub'

function documentClicks() {
  document.addEventListener('click', function (e) {

    let
      target = e.target,
      element = false;

    if (!(window.innerWidth >= 1170)) {
      if (document.querySelector('#nav')) {
        element = ClickSelector(target, 'e_toggle');
        if (element) {

          if (burger_status === 'active-sub') {
            burger_status = 'active';
            sub.forEach(el => { el.classList.add('hd') });
            element.classList.remove('active-sub');
            return '';
          }

          if (burger_status === 'active') {
            burger_status = '';
            modalToggle('nav');
            element.classList.toggle('active');
            return '';
          }

          if (burger_status === '') {
            burger_status = 'active';
            modalOpen('nav');
            element.classList.add('active');
            return '';
          }

        } else {
          if (!target.closest('#nav')) {
            burger_status = '';
            modalClose('nav');
            document.querySelector('.header__menu').classList.remove('active');
          }
        }
      }

      if (document.querySelector('.sub-menu')) {
        element = ClickSelector(target, 'toggle-btn');
        if (element) {
          burger_status = 'active-sub';
          document.querySelector('html').classList.add('overflow-hidden');
          element.querySelector('.sub-menu').classList.remove('hd');
          document.querySelector('.header__menu').classList.add('active-sub');
        }
      }
    }
  });
}


  /* BEGIN BASE FUNCTIONS */

  // modal
  function modalOpen(eID) {
  document.querySelector('html').classList.add('overflow-hidden');
  let element = document.getElementById(eID);
  element.classList.remove('hd');
}
function modalClose(eID) {
  document.querySelector('html').classList.remove('overflow-hidden');
  let element = document.getElementById(eID);
  element.classList.add('hd');
}
function modalToggle(eID) {
  document.querySelector('html').classList.toggle('overflow-hidden');
  let element = document.getElementById(eID);
  element.classList.toggle('hd');
}
/* END BASE FUNCTIONS */


const addHidden = (elements) => {
  if (window.innerWidth >= 1170) {
    elements.forEach(element => {
      element.classList.remove('hd');
    })
  } else {
    elements.forEach(element => {
      element.classList.add('hd');
    })
  }
}

const addBtn = () => {
  if (!(window.innerWidth >= 1170)) {
    btn.forEach(element => {
      element.classList.add('toggle-btn');
    })
  } else {
    btn.forEach(element => {
      element.classList.remove('toggle-btn');
    })
  }
}

function fixedHeader() {
  if (document.querySelector('html').scrollTop > 0) {
    document.querySelector('header').classList.add("fixed");
  } else {
    document.querySelector('header').classList.remove("fixed");
  }
}

function footer() {
  if (document.querySelector('footer')) {
    document.querySelector('.wrapper').style.paddingBottom = document.querySelector('footer').clientHeight + 'px';
  }
}

function currentYear() {
  let year = document.querySelector('.current-year');
  year.innerHTML = new Date().getFullYear();
}

//fixed header
window.addEventListener('scroll', function (e) {
  fixedHeader();
});

// General code before loading page
document.addEventListener('DOMContentLoaded', function () {

  (function () { // base functions
    documentClicks();
    fixedHeader();
    addHidden(nav);
    addHidden(sub);
    addBtn();
    footer();
    currentYear();

    if (document.querySelector(".main-4__slider")) {
      new Swiper(".main-4__slider", {
        breakpoints: {
          320: {
            slidesPerView: 1
          },
          680: {
            slidesPerView: 2,
            spaceBetween: 10
          },
          991: {
            slidesPerView: 3,
            spaceBetween: 10
          },
          1280: {
            slidesPerView: 4,
            spaceBetween: 20
          }
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      })
    }
  }());
});


function menuRemove() {
  modalClose('nav')
  document.querySelector('.header__menu').classList.remove('active');
  addHidden(nav);
}

window.addEventListener('resize', function () {
  addBtn();
  addHidden(nav);
  addHidden(sub);
  menuRemove();
  footer();
});


