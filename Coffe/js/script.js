// Проверка на совместимость webp браузером
function testWebP(callback) {

    var webP = new Image();
    webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {
    if (support == true) {
        document.querySelector('body').classList.add('webp');
    } else {
        document.querySelector('body').classList.add('no-webp');
    }
});

let btnHeader = document.querySelector('.header__button'),
    HeaderMenu = document.querySelector('.header__item-menu'),
    tabsButton = document.querySelectorAll('.gift__tabs-number'),
    tabName = null,
    tabContent = document.querySelectorAll('.gift__item')

btnHeader.addEventListener('click', (e) => {
    e.preventDefault();
    if (btnHeader.classList.contains('rotate')) {
        HeaderMenu.style.right = '-400px'
        btnHeader.classList.toggle('rotate')
        setTimeout(() => {
            btnHeader.classList.toggle('active')
        }, 350);
    } else {
        HeaderMenu.style.right = '0px'
        btnHeader.classList.toggle('active')
        setTimeout(() => {
            btnHeader.classList.toggle('rotate')
        }, 350);
    }
})

window.onscroll = function () { myFunction() };

var header = document.querySelector(".header__item-buttons")

var sticky = header.offsetTop;

function myFunction() {
    if (window.pageYOffset >= sticky) {
        header.classList.add("sticky");

    } else {
        header.classList.remove("sticky");
    }
}



var mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },
    breakpoints: {
        // // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 0,

        },
        // // when window width is >= 640px
        640: {
            slidesPerView: 1,
            spaceBetween: 40,
        }
    },
    // Navigation arrows
    navigation: {
        nextEl: '.prev-orange',
    },
})
var mySwiper2 = new Swiper('.swiper-alone', {
    // Optional parameters
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },
    slidesPerView: 3,
    // Navigation arrows
    navigation: {
        nextEl: '.prev-orange',
    },
    breakpoints: {
        // // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 0,
        },
        // // when window width is >= 640px
        640: {
            slidesPerView: 2,
            spaceBetween: 0
        },
        1024: {
            spaceBetween: 40,
            slidesPerView: 3,
        }
    }
})

tabsButton.forEach($el => {
    $el.addEventListener("click", selectTabs)
})

function selectTabs() {
    tabsButton.forEach($el => {
        $el.classList.remove('active')
    })
    this.classList.add('active')
    tabName = this.getAttribute('data-tab-name')
    selectTabContant(tabName);
}

function selectTabContant(tabName) {
    tabContent.forEach($el => {
        if ($el.classList.contains(tabName)) {
            fadeIn($el)
        } else {
            fadeOut($el)
        }
        // $el.classList.contains(tabName) ? fadeOut($el); $el.classList.add('active-div') : fadeIn($el); $el.classList.remove('active-div')
    })
}

function fadeOut(el) {

    var opacity = 1;

    var timer = setInterval(function () {

        if (opacity <= 0.1) {

            clearInterval(timer);
            el.style.display = "none";

        }

        el.style.opacity = opacity;

        opacity -= opacity * 0.1;

    }, 10);

}
function fadeIn(el) {

    var opacity = 0.01;

    el.style.display = "flex";

    var timer = setInterval(function () {

        if (opacity >= 1) {

            clearInterval(timer);

        }

        el.style.opacity = opacity;

        opacity += opacity * 0.1;

    }, 10);

}

const anchors = document.querySelectorAll('a.header__menu-link')

for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault()

        const blockID = anchor.getAttribute('href')

        document.querySelector(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
}