document.addEventListener("DOMContentLoaded", () => {

const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

function close() {
	closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
	});
}
close();

document.addEventListener("keydown", (e) => {
    if (e.code === 'Escape') {
        close();
    }
});



});