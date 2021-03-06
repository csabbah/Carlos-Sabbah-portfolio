const rootElement = document.documentElement;
const root = document.querySelector('body');
const nav = document.querySelector('nav');
const navLinkItems = document.querySelectorAll('nav a');

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

// ---------------------------- On page load functions
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

$(document).ready(function () {
  root.style.backgroundColor = `black`;

  setTimeout(() => {
    mainLanding.classList.add('active');
  }, 100);
});

// ---------------------------- Scroll conditionals
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

  if (scroll > 700) {
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
  if (scroll > 1425) {
    // Starting at position 1425, start executing the below lines of code
    let y = 0 + (scroll - 1425) / 2; // The og background color is black (0), so we start at 0 and incremenet
    let x = 255 - (scroll - 1425) / 2; // The og is white so we start at 255 and decrement

    root.style.backgroundColor = `rgb(${y}, ${y}, ${y})`;
    brandTitle.style.color = `rgb(${x}, ${x}, ${x})`;
  }
});

// ---------------------------- Nav stack function
const closeNav = () => {
  nav.classList.remove('active'); // Nav menu
  navStack.classList.remove('active'); // Nav icon
};

const navStack = document.getElementById('nav-stack');
navStack.addEventListener('click', () => {
  nav.classList.toggle('active'); // Nav menu
  navStack.classList.toggle('active'); // Nav icon
});

// ---------------------------- Scroll To functions

document.querySelectorAll('.nav-item').forEach((item) => {
  item.addEventListener('click', (e) => {
    const navStackStyles = window.getComputedStyle(navStack);
    if (navStackStyles.display == 'flex') {
      if (
        e.target.innerText == 'Creative Projects' ||
        e.target.innerText == 'Web Dev projects'
      ) {
        let navItem = e.target.classList[2];
        let scrollEl = document.getElementById(navItem);
        scrollEl.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
          inline: 'nearest',
        });
      } else {
        let navItem = e.target.classList[1];
        let scrollEl = document.getElementById(navItem);
        scrollEl.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
          inline: 'nearest',
        });
      }
    } else {
      let navItem = e.target.classList[1];
      let scrollEl = document.getElementById(navItem);
      scrollEl.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'nearest',
      });
    }

    closeNav();
  });
});

// ---------------------------- Receiving emails
// Declare all form input fields so we can extract the data upon submit
const fromName = document.getElementById('fromName');
const fromEmail = document.getElementById('from_email');
const subjecttext = document.getElementById('subjectText');
const message = document.getElementById('msg');

// Extract all necessary form elements
const sendBtn = document.getElementById('sendBtn');
const successEl = document.getElementById('notif-success');
const errorEl = document.getElementById('notif-error');

sendBtn.addEventListener('click', (e) => {
  e.preventDefault(); // Do not refresh the browser after hitting submit

  if (
    // If any of the input fields are empty....
    from_email.value.length < 1 ||
    fromName.value.length < 1 ||
    subjecttext.value.length < 1 ||
    message.value.length < 1
  ) {
    // Add active class to the error element...
    errorEl.classList.add('active');
    // Then after 4 seconds, remove the element
    setTimeout(() => {
      errorEl.classList.remove('active');
    }, 4000);
  } else {
    // If ALL fields are filled in, execute the sendMail function
    emailjs.send('service_qnyqg1s', 'template_mcuznlb', {
      from_name: fromName.value,
      from_email: fromEmail.value,
      msg: message.value,
      subjectText: subjecttext.value,
    });

    // Clear the input fields
    fromName.value = '';
    fromEmail.value = '';
    subjecttext.value = '';
    message.value = '';
    // And add active class to the success element
    successEl.classList.add('active');
    setTimeout(() => {
      // Then remove the element after 3 seconds
      successEl.classList.remove('active');
    }, 3000);
  }
});
