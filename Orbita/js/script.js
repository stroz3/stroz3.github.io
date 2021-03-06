
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


massage = document.querySelector('.bloger__massage'),
    body = document.querySelector('body'),
    menuli = document.querySelector('.profile__tab-menu-ul-li:last-child'),
    menuliDrop = document.querySelectorAll('.profile__tab-menu-ul-li-drop'),
    tabContant = document.querySelectorAll('.profile__contant'),
    tabname = "",
    document.querySelectorAll('.profile__tab-menu-li-link').forEach($el => {
        $el.addEventListener('click', $element => {
            $element.preventDefault()
        })
    })

// document.querySelector('.button__open-massage').addEventListener('click', event => {
//     if (event.target) {
//         openMenu()
//     }
// })
// document.querySelector('.bloger__massage-row').addEventListener('click', event => {
//     event.stopPropagation();
// })
// massage.addEventListener('click', event => {
//     if (event.target) {
//         closeMenu()
//     }
// })
// document.querySelector('.bloger__button-border').addEventListener('click', event => {
//     let areaText = document.querySelector('.bloger__text-area')
//     if (areaText.value == '') {
//     } else {
//         closeMenu()
//     }
// })
// document.querySelector('.bloger__massage-close').addEventListener('click', event => {
//     if (event.target) {
//         closeMenu()
//     }
// })

menuliDrop.forEach($el => {
    $el.addEventListener("click", selectTabNavDrop)
})


function selectTabNavDrop() {
    for (let i = 0; i < menuliDrop.length; i++) {
        // Убираем у других
        menuliDrop[i].classList.remove('choice');
    }
    tabnameDrop = this.getAttribute('data-tab-name')
    activeTabContantDrop(tabnameDrop)
    this.classList.add('choice')
}
function activeTabContantDrop(tabname) {
    tabContant.forEach(item => {
        item.classList.contains(tabname) ? fadeIn(item) : fadeOut(item)
    })

}

function openMenu() {
    body.style.overflowY = 'hidden'
    fadeIn(massage, 'flex')
}
function closeMenu() {
    body.style.overflowY = 'scroll'
    fadeOut(massage)
}
function fadeOut(el) {
    el.style.opacity = 1;
    (function fade() {
        if ((el.style.opacity -= .1) < 0) {
            el.style.display = "none";
        } else {
            requestAnimationFrame(fade);
        }
    })();
};

// ** FADE IN FUNCTION **
function fadeIn(el, display) {
    el.style.opacity = 0;
    el.style.display = display || "block";
    (function fade() {
        var val = parseFloat(el.style.opacity);
        if (!((val += .1) > 1)) {
            el.style.opacity = val;
            requestAnimationFrame(fade);
        }
    })();
};
