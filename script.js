const rootElement = document.documentElement;
const root = document.querySelector('body');

const mainLanding = document.getElementById('landing');
const landingSecondary = document.getElementById('landing-secondary');
const personalCreatives = document.getElementById('personal-creatives');
const webDevProjects = document.getElementById('webdev-projects');
const contactForm = document.getElementById('contact-form');

const brandTitle = document.getElementById('brand-title');
const header = document.querySelector('header');

// On page load (or when you hit refresh), scroll to the very top
$(document).ready(function () {
  $(this).scrollTop(0);
  root.style.backgroundColor = `black`;

  setTimeout(() => {
    mainLanding.classList.add('active');
  }, 100);
});

// ---- Scroll conditional
window.addEventListener('scroll', (e) => {
  const scroll = Math.ceil(this.scrollY);
  if (scroll > 150) {
    // Once you exceed 150, add the class of active to the landing page
    landingSecondary.classList.add('active'); // Active = Opacity 100%
  } else {
    // If you go under the condition, remove the class (aka, disappear)
    landingSecondary.classList.remove('active');
  }

  if (scroll < 1420) {
    root.style.backgroundColor = `rgb(0, 0, 0`;
  }

  if (scroll > 800) {
    // Once you exceed 150, add the class of active to the landing page
    personalCreatives.classList.add('active'); // Active = Opacity 100%
  } else {
    // If you go under the condition, remove the class (aka, disappear)
    personalCreatives.classList.remove('active');
  }

  if (scroll > 1450) {
    // Once you exceed 150, add the class of active to the landing page
    webDevProjects.classList.add('active'); // Active = Opacity 100%
  } else {
    // If you go under the condition, remove the class (aka, disappear)
    webDevProjects.classList.remove('active');
  }

  if (scroll > 1600) {
    // Starting at position 1600, start executing the below lines of code
    let y = 0 + (scroll - 1600) / 2; // The og background color is black (0), so we start at 0 and incremenet
    let x = 255 - (scroll - 1600) / 2; // The og is white so we start at 255 and decrement

    root.style.backgroundColor = `rgb(${y}, ${y}, ${y})`;
    brandTitle.style.color = `rgb(${x}, ${x}, ${x})`;
  }
});

/* Scroll To */
var element = document.getElementById('nav-what-i-do');
element.addEventListener('click', () => {
  landingSecondary.scrollIntoView({
    behavior: 'smooth',
    block: 'center',
    inline: 'nearest',
  });
});

var element2 = document.getElementById('nav-personal');
element2.addEventListener('click', () => {
  personalCreatives.scrollIntoView({
    behavior: 'smooth',
    block: 'end',
    inline: 'nearest',
  });
});

var element3 = document.getElementById('nav-webdev');
element3.addEventListener('click', () => {
  webDevProjects.scrollIntoView({
    behavior: 'smooth',
    block: 'center',
    inline: 'nearest',
  });
});

var element4 = document.getElementById('nav-form');
element4.addEventListener('click', () => {
  contactForm.scrollIntoView({
    behavior: 'smooth',
    block: 'center',
    inline: 'nearest',
  });
});
