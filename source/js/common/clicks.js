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

    // if (document.querySelector('#menu')) {
    //   element = ClickSelector(target, 'e_menu');
    //   if (element) {
    //     modalToggle('menu');
    //     element.classList.toggle('active');
    //   }
    //   element = ClickSelector(target, 'e_menu_close');
    //   if (element) {
    //     modalClose('menu');
    //     document.querySelector('.header__menu').classList.remove('active');
    //   }
    //   element = ClickSelector(target, 'menu-nav');
    //   if (element) {
    //     modalClose('menu');
    //     document.querySelector('.header__menu').classList.remove('active');
    //   }
    // }


    // if (document.querySelector('#pet')) {
    //   element = ClickSelector(target, 'e_pet');
    //   if (element) {
    //     modalOpen('pet');
    //   }
    //   element = ClickSelector(target, 'e_pet_close');
    //   if (element) {
    //     modalClose('pet');
    //   }
    // }
  });
}
