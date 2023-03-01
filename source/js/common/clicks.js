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
