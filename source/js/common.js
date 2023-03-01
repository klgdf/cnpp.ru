"use strict";
@@include('common/clicks.js')

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


