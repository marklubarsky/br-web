const menu = document.getElementsByClassName('header-mid')[0];
const menuButton = document.getElementById('menu-button');

menuButton.addEventListener('click', toggleMenu);

function toggleMenu() {
    menuButton.classList.toggle('active');
    menu.classList.toggle('hidden');
}