document.addEventListener("DOMContentLoaded", () => {

const hamburger = document.querySelector('.fixedMenu__hamburger'),
      menu = document.querySelector('.menu'),
      closeElem = document.querySelector('.menu__close'),
      menuLink = document.querySelectorAll('.menu__link'),
      menuBlock = document.querySelectorAll('.menu__block');

	hamburger.addEventListener('click', () => {
	    menu.classList.add('active');
	    hamburger.classList.add("spanX");
	});
<<<<<<< Updated upstream

=======
>>>>>>> Stashed changes

	closeElem.addEventListener('click', () => {
	menu.classList.remove('active');
	hamburger.classList.remove("spanX");
	});

<<<<<<< Updated upstream
	menuLink.forEach(item => {
        item.addEventListener('click', () => {
            menu.classList.remove('active');
            hamburger.classList.remove("spanX");
        })
    })

=======
	closeElem.addEventListener('click', () => {
	menu.classList.remove('active');
	hamburger.classList.remove("spanX");
	});

	menuLink.forEach(item => {
        item.addEventListener('click', () => {
            menu.classList.remove('active');
            hamburger.classList.remove("spanX");
        })
    })
	// на майбутє,якщо буду робити фіксоване меню для десктопа
>>>>>>> Stashed changes
    document.addEventListener("keydown", (e) => {
	    if (e.code === 'Escape') {
	        menu.classList.remove('active');
	        hamburger.classList.remove("spanX");
	    }
	});
});