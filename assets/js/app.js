const btn = document.querySelector('.header__bar-btn');
const Menu = document.querySelector('.header__menu');
btn.addEventListener('click', () => {
    Menu.classList.toggle('open');
});