const getnav = document.querySelector('.mobile_menu');
function mobileMenu() {
  getnav.style.visibility = 'visible';
}
function closeMenu() {
  getnav.style.visibility = 'hidden';
}

mobileMenu();
closeMenu();