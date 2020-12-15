// Поделючение отдельного js
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


// best__slider
$('.best__slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: true,
});
$('.about__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
});


//переходы
let main = document.querySelector('.main'),
    header = document.querySelector('.header')
best = document.querySelector('.best')
about = document.querySelector('.about')
document.querySelectorAll('.header__lable').forEach($el => {
    let cardId = $el.getAttribute('data-id')
    $el.addEventListener('click', (event) => {
        event.preventDefault()
        tabOpen(cardId)
    })
})
function tabOpen(tabId) {
    document.querySelectorAll('.tab').forEach($el => {
        $el.style.display = 'none'
        $el.style = null
        if ($el.classList.contains(tabId)) {
            $el.style.display = 'block'
            fadeOut(header, 'fadeOutUp 0.3s forwards')
        } else {
            return
        }
    })
}

animOut('.header__arrow', header, main, 'fadeOutUp 0.7s forwards', 'fadeInUp 0.5s forwards')
animOut('.about__arrow', about, header, 'fadeOutUp 0.7s forwards', 'fadeInUp 0.5s forwards')
animOut('.main__arrow', main, best, 'fadeOutRight 0.7s forwards', 'fadeInRight 0.5s forwards')
animOut('.best__arrow', best, about, 'fadeOutRightUp 0.7s forwards', 'fadeInRightUp 0.5s forwards')
function animOut(button, elOut, elIn, animOut, animIn) {
    document.querySelector(button).addEventListener('click', () => {
        fadeOut(elOut, animOut)
        fadeIn(elIn, animIn)

    })
}
function fadeOut(el, anim) {
    let documentQer = el

    var opacity = 1;

    var timer = setInterval(function () {

        if (opacity <= 0.1) {

            clearInterval(timer);
            documentQer.style.display = "none";
        }

        documentQer.style.animation = anim
        documentQer.style.opacity = opacity;

        opacity -= opacity * 0.1;

    }, 10);

}
function fadeIn(el, anim) {
    let documentQer = el
    var opacity = 0.01;

    documentQer.style.display = "block";

    var timer = setInterval(function () {
        if (opacity >= 1) {

            clearInterval(timer);
        }
        documentQer.style.animation = anim
        documentQer.style.opacity = opacity
        documentQer.style.zIndex = 222
        opacity += opacity * 0.1;

    }, 10);

}
