// © Manuel Matuzović: https://web.dev/website-navigation/

const nav = document.querySelector('nav');
const list = nav.querySelector('ul');
const burgerClone = document.querySelector('#burger-template').content.cloneNode(true);
const svg = nav.querySelector('svg');

const button = burgerClone.querySelector('button');
button.addEventListener('click', e => {
  const isOpen = button.getAttribute('aria-expanded') === 'true';
  button.setAttribute('aria-expanded', !isOpen);
});

// avoid DRY: disabling menu
const disableMenu = () => {
  button.setAttribute('aria-expanded', false);
};

//  close on escape
nav.addEventListener('keyup', e => {
  if (e.code === 'Escape') {
    disableMenu();
  }
});

// close if clicked outside of event target
document.addEventListener('click', e => {
  const isClickInsideElement = nav.contains(e.target);
  if (!isClickInsideElement) {
    disableMenu();
  }
});

nav.insertBefore(burgerClone, list);

/* Carousel */
const items = document.querySelector(".items");
const dots = document.querySelectorAll(".dot");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const total = items.children.length - 1;
const active = "active";
let current = 0;

const setActiveDot = () => {
  dots.forEach((button, i) => {
    i === current
      ? button.classList.add(active)
      : button.classList.remove(active);
  });
};

const scrollToCurrent = () => {
  items.style.transform = `translateX(${current * -100}%`;
  setActiveDot();
};

const scrollPrev = () => {
  if (current === 0) return;
  current--;
  scrollToCurrent();
};

const scrollNext = () => {
  if (current === total) return;
  current++;
  scrollToCurrent();
};

prev.addEventListener("click", scrollPrev);
next.addEventListener("click", scrollNext);
