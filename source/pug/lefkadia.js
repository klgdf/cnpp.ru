

const
  GSlider = document.querySelector('.general-slider'),
  GSlides = GSlider.querySelectorAll('.slide'),
  GPagination = GSlider.querySelector('.pagination'),

  GPaginationItem = (i) => {
    let element = document.createElement('div');
    element.dataset.item = i;
    return element;
  },
  GPaginationRender = (action, dataItem) => {
    if (action === 'start') {
      GPagination.querySelectorAll('div').forEach(el => {
        el.classList.remove('active');
      });
      GPagination.querySelectorAll('div')[dataItem]
        .classList.add('active');
    } else if (action === 'reverse') {
      GPagination.querySelectorAll('div').forEach(el => {
        el.classList.remove('active');
      });

      const idx = dataItem - 1;
      GPagination.querySelectorAll('div')[idx < 0 ? 0 : idx]
        .classList.add('active');
    }
  };

GSlides.forEach((el, i) => {
  el.dataset.item = i;

  GPagination.classList.add('active');
  GPagination.append(
    GPaginationItem(i)
  );
});


var items = gsap.utils.toArray('.general-slider__slide'),
  wrap = gsap.utils.wrap(items);

let startCarousel = gsap.timeline({
  scrollTrigger: {
    anticipatePin: 1,
    markers: false,
    trigger: ".general-slider",
    start: "0",
    end: "+=3000",
    scrub: true,
    pin: true
  }
});

for (let i = 0, j = items.length; i < items.length; i++) {

  let
    tl = gsap.timeline(),
    el = wrap(i),
    dataItem = el.dataset.item;

  tl.to(el, {
    top: 0,
    onStart: () => { GPaginationRender('start', dataItem) },
    onReverseComplete: () => { GPaginationRender('reverse', dataItem) },
  });

  startCarousel.add(tl);

}

	
});

function animateFrom(elem, index, length, direction = 1) {
  length = length.length;
  // 		direction = direction | 1;
  let x = 0,
    y = direction * 100;
  if (elem.classList.contains("gs_reveal_fromLeft")) {
    x = -70;
    y = 0;
  } else if (elem.classList.contains("gs_reveal_fromRight")) {
    x = 70;
    y = 0;
  }
  const duration = (elem.classList.contains("gs_reveal_fromLeft")) ? (index * 0.3 + 1) : (elem.classList.contains("gs_reveal_fromLeft")) ? (((length - 1) * 0.3 + 1) - (index * 0.3)) : '1';
  gsap.fromTo(elem, { x: x, y: y, autoAlpha: 0 }, {
    duration,
    x: 0,
    y: 0,
    autoAlpha: 1,
    ease: "expo",
    overwrite: "auto"
  });
  return
}

function hide(elem) {
  gsap.set(elem, { autoAlpha: 0 });
}

document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  let reveals = gsap.utils.toArray(".gs_reveal");
  for (let i = 0; i < reveals.length; i++) {
    (function () {
      let index = i;
      let elem = reveals[i];
      hide(elem); // assure that the element is hidden when scrolled into view

      ScrollTrigger.create({
        trigger: elem,
        onEnter: function () { animateFrom(elem, index, reveals) },
        onEnterBack: function () { animateFrom(elem, index, reveals, -1) },
        onLeave: function () { hide(elem) } // assure that the element is hidden when scrolled into view
      });
    })();
  }
});

const duration = (elem.classList.contains("gs_reveal_fromLeft")) ? (index * 0.3 + 1) : (elem.classList.contains("gs_reveal_fromRight")) ? (((length - 1) * 0.3 + 1) - (index * 0.3)) : '1';