const menuIcon = document.querySelector('.header-icon__list');
const closeIcon = document.querySelector('.js-close');
const navBar = document.querySelector('.js-nav-bar');
function showNavbar() {
    navBar.classList.add('open');
}
function hideNavbar() {
    navBar.classList.remove('open');
}
menuIcon.addEventListener('click', showNavbar);
closeIcon.addEventListener('click', hideNavbar);