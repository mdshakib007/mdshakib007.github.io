const menuIcon = document.getElementById('menu_icon');
const menu = document.getElementById('menu');

menuIcon.addEventListener('click', () => {
  if (menu.classList.contains('hidden')) {
    menu.classList.remove('hidden');
    menuIcon.classList.add('fa-times');
    menuIcon.classList.remove('fa-bars');
  } else {
    menu.classList.add('hidden');
    menuIcon.classList.add('fa-bars');
    menuIcon.classList.remove('fa-times');
  }
  menu.classList.add('animation-class'); // Add animation class
});
