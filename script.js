const menuIcon = document.getElementById('menu_icon');
const menu = document.getElementById('menu');

menuIcon.addEventListener('click', () => {
  if (menu.classList.contains('hidden')) {
    menu.classList.remove('hidden');
    menu.classList.add('navbar-open-animation');
    menuIcon.classList.add('fa-times');
    menuIcon.classList.remove('fa-bars');
    menu.classList.remove('navbar-close-animation');
  } else {
    menu.classList.add('navbar-close-animation');
    menu.classList.remove('navbar-open-animation');
    menu.classList.add('hidden');
    menuIcon.classList.add('fa-bars');
    menuIcon.classList.remove('fa-times');
  }
});