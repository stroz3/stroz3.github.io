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


$menu = document.querySelector('.header__menu')
$nav = document.querySelector('.header__nav')
$trans = document.querySelector('.denis__change')
$links = document.querySelectorAll('.header__nav-link')
$btn = document.querySelector('.header__menu-button')

$btn.onclick = toggleMenu;
$links.forEach(
    $el => $el.onclick = toggleMenu
);

function toggleMenu() {
    $btn.classList.toggle('header__menu-btn-active')
    if ($btn.classList.contains('header__menu-btn-active')) {
        $menu.classList.add('header__menu-active');
        $menu.classList.remove('header__menu-disabled');
        if ($nav.children) {
            let links = $nav.children;
            let sec = 0.2;
            for (let i = 0; i < links.length; i++) {
                let $el = links[i];
                $el.setAttribute('style', 'animation: left1 0.5s forwards ' + sec + 's');
                sec += 0.1
            }
        }
    }
    else {
        $menu.classList.remove('header__menu-active');
        $menu.classList.add('header__menu-disabled');
        if ($nav.children) {
            let links = $nav.children;
            let sec = 0.2;
            for (let i = 0; i < links.length; i++) {
                let $el = links[i];
                $el.setAttribute('style', '');
            }
        }
    }
}


// собираем все якоря; устанавливаем время анимации и количество кадров
const anchors = [].slice.call(document.querySelectorAll('a[href*="#"]')),
    animationTime = 300,
    framesCount = 20;
anchors.forEach(function (item) {
    // каждому якорю присваиваем обработчик события
    item.addEventListener('click', function (e) {
        // убираем стандартное поведение
        e.preventDefault();

        // для каждого якоря берем соответствующий ему элемент и определяем его координату Y
        let coordY = document.querySelector(item.getAttribute('href')).getBoundingClientRect().top + window.pageYOffset;

        // запускаем интервал, в котором
        let scroller = setInterval(function () {
            // считаем на сколько скроллить за 1 такт
            let scrollBy = coordY / framesCount;

            // если к-во пикселей для скролла за 1 такт больше расстояния до элемента
            // и дно страницы не достигнуто
            if (scrollBy > window.pageYOffset - coordY && window.innerHeight + window.pageYOffset < document.body.offsetHeight) {
                // то скроллим на к-во пикселей, которое соответствует одному такту
                window.scrollBy(0, scrollBy);
            } else {
                // иначе добираемся до элемента и выходим из интервала
                window.scrollTo(0, coordY);
                clearInterval(scroller);
            }
            // время интервала равняется частному от времени анимации и к-ва кадров
        }, animationTime / framesCount);
    });
});