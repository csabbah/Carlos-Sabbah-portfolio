const rootElement = document.documentElement;
const root = document.querySelector('body');

const scrollMain = document.querySelector('.scroll-main');
const scrollText = document.querySelector('.scroll');
const scrollHr = document.querySelector('.intro-line');

const brandTitle = document.getElementById('brand-title');
const header = document.querySelector('header');

const mainLanding = document.getElementById('landing');
const landingSecondary = document.getElementById('landing-secondary');

const personalCreatives = document.getElementById('personal-creatives');
const webDevProjects = document.getElementById('webdev-projects');
const reactApp = document.getElementById('react-app');

const contactForm = document.getElementById('contact-form');

// On page load (or when you hit refresh), scroll to the very top
$(document).ready(function () {
  $(this).scrollTop(0);
  root.style.backgroundColor = `black`;

  setTimeout(() => {
    mainLanding.classList.add('active');
  }, 100);
});

// ---------- Scroll conditionals
window.addEventListener('scroll', () => {
  const scroll = Math.ceil(this.scrollY);
  if (scroll < 1420) {
    root.style.backgroundColor = `rgb(0, 0, 0`;
  }

  if (scroll > 150) {
    // Once you exceed 150, add the class of active to the landing page
    landingSecondary.classList.add('active'); // Active = Opacity 100%
  } else {
    // If you go under the condition, remove the class (aka, disappear)
    landingSecondary.classList.remove('active');
  }

  if (scroll > 600) {
    scrollMain.style.animationPlayState = 'paused'; // Pause the "Scroll" Animation
    scrollHr.style.opacity = '0'; // Then hide the elements
    scrollText.style.opacity = '0';
  }

  if (scroll > 800) {
    personalCreatives.classList.add('active');
  } else {
    personalCreatives.classList.remove('active');
  }

  if (scroll > 1500) {
    webDevProjects.classList.add('active');
  } else {
    webDevProjects.classList.remove('active');
  }

  // Color fading function
  if (scroll > 1600) {
    // Starting at position 1600, start executing the below lines of code
    let y = 0 + (scroll - 1600) / 2; // The og background color is black (0), so we start at 0 and incremenet
    let x = 255 - (scroll - 1600) / 2; // The og is white so we start at 255 and decrement

    root.style.backgroundColor = `rgb(${y}, ${y}, ${y})`;
    brandTitle.style.color = `rgb(${x}, ${x}, ${x})`;
  }
});

// ---------- Scroll To functions

var element1 = document.getElementById('nav-carlos');
const topSection = document.getElementById('top');
element1.addEventListener('click', () => {
  topSection.scrollIntoView({
    behavior: 'smooth',
    block: 'center',
    inline: 'nearest',
  });
});

var element2 = document.getElementById('nav-what-i-do');
element2.addEventListener('click', () => {
  landingSecondary.scrollIntoView({
    behavior: 'smooth',
    block: 'center',
    inline: 'nearest',
  });
});

var element3 = document.getElementById('nav-personal');
element3.addEventListener('click', () => {
  personalCreatives.scrollIntoView({
    behavior: 'smooth',
    block: 'end',
    inline: 'nearest',
  });
});

var element4 = document.getElementById('nav-webdev');
element4.addEventListener('click', () => {
  webDevProjects.scrollIntoView({
    behavior: 'smooth',
    block: 'center',
    inline: 'nearest',
  });
});

var element5 = document.getElementById('nav-form');
element5.addEventListener('click', () => {
  contactForm.scrollIntoView({
    behavior: 'smooth',
    block: 'center',
    inline: 'nearest',
  });
});
