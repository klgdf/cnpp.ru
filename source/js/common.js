"use strict";
@@include('common/clicks.js')

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
  modalClose('menu')
  document.querySelector('.header__menu').classList.remove('active');
}

window.addEventListener('resize', function () {
  footer();

  if (window.innerWidth >= 767) {
    menuRemove();
  }
});


