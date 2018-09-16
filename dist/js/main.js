// Select DOM Items
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navItems = document.querySelectorAll('.nav-item');
const home = document.querySelector('#home');
const about = document.querySelector('#about');
const contact = document.querySelector('#contact');
const work = document.querySelector('#work');

// Set Initial State Of Menu
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu(e) {
  // console.log(document.location.pathname);
  if (!showMenu) {
    menuBtn.classList.add('close');
    menu.classList.add('show');
    menuNav.classList.add('show');
    menuBranding.classList.add('show');
    navItems.forEach(item => item.classList.add('show'));
    if (document.location.pathname == '/') {
      home.classList.add('hide_main');
    }
    if (document.location.pathname == '/about.html') {
      about.classList.add('hide_main');
    }
    if (document.location.pathname == '/contact.html') {
      contact.classList.add('hide_main');
    }
    if (document.location.pathname == '/share.html') {
      work.classList.add('hide_main');
    }

    // Set Menu State
    showMenu = true;
  } else {
    menuBtn.classList.remove('close');
    menu.classList.remove('show');
    menuNav.classList.remove('show');
    menuBranding.classList.remove('show');
    navItems.forEach(item => item.classList.remove('show'));
    if (document.location.pathname == '/') {
      home.classList.remove('hide_main');
    }
    if (document.location.pathname == '/about.html') {
      about.classList.remove('hide_main');
    }
    if (document.location.pathname == '/contact.html') {
      contact.classList.remove('hide_main');
    }
    if (document.location.pathname == '/share.html') {
      work.classList.remove('hide_main');
    }

    // Set Menu State
    showMenu = false;
  }
}
