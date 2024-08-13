const openButton = document.getElementById('mobile-nav');

const closeButton = document.getElementById('close-button');

const mobileMenu = document.getElementById('mobile-popup')

const mobileNav = document.getElementById('mobile-popup-nav')

function openMenu() {
    mobileMenu.style.display = 'flex';
}

openButton.addEventListener('click', openMenu);

function closeMenu() {
    mobileMenu.style.display = 'none';
}

closeButton.addEventListener('click', closeMenu);

mobileNav.addEventListener('click', closeMenu);
