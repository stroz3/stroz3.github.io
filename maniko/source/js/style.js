// Фиксация меню 
window.onscroll = function () {
    let scrolled = window.pageYOffset,
        header = document.querySelector('.header__fixed');
    if (scrolled > 65) {
        header.classList.add('fixed');
    }
    else {
        header.classList.remove('fixed');
    }
};

// Стрелочка вверх
(function () {
    'use strict';
    function backToTop() {
        if (window.pageYOffset > 0) {
            window.scrollBy(0, -80);
            setTimeout(backToTop, 0);
        }
    }
    var goTopBtn = document.querySelector('.footer__img-right');
    goTopBtn.addEventListener('click', backToTop);

})();
