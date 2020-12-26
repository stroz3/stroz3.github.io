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


$btnSign = document.querySelector('#btn')
$login = document.querySelector('#login')
$password = document.querySelector('#password')
$inputSign = document.querySelectorAll('.header__input')
$header = document.querySelector('.header')
$heart = document.querySelector('.heart');
$body = document.querySelector('.room__body')
// Таймер в реальном времени
timer = () => {
    var nowDate = new Date();
    var achiveDate = new Date(2020, 11, 27, 17, 30, 0); //Задаем дату, к которой будет осуществляться обратный отсчет
    var result = (achiveDate - nowDate) + 1000;
    if (result < 0) {
        var elmnt = document.getElementById('timer');
        elmnt.innerHTML = ' - : - - : - - : - - ';
        let op = 1,
            stopTimer = setInterval(() => {
                op -= 0.1
                if (elmnt.style.opacity == -0.2) {
                    clearInterval(stopTimer)
                    document.querySelector('.timer').style.display = 'none'
                    $header.style.display = 'block'
                    let StartHeart = setInterval(() => {
                        op += 0.1
                        if ($heart.style.opacity == 1) {
                            clearInterval(StartHeart)
                        } else {
                            $heart.style.opacity = op
                            document.querySelector('.header__row').style.opacity = op
                        }
                    }, 50);
                } else {
                    elmnt.style.opacity = op
                }
            }, 100);
        return undefined;
    }
    var seconds = Math.floor((result / 1000) % 60);
    var minutes = Math.floor((result / 1000 / 60) % 60);
    var hours = Math.floor((result / 1000 / 60 / 60) % 24);
    var days = Math.floor(result / 1000 / 60 / 60 / 24);
    if (seconds < 10) seconds = '0' + seconds;
    if (minutes < 10) minutes = '0' + minutes;
    if (hours < 10) hours = '0' + hours;
    var elmnt = document.getElementById('timer');
    elmnt.innerHTML = days + ':' + hours + ':' + minutes + ':' + seconds;
    setTimeout(timer, 1000);
}
window.onload = function () {
    timer();
}

//Валидация формы
let log = [
    name = 'Patay',
    name = 'Патау',
    name = 'patay',
    name = 'патау',
    name = 'пту'
]
let password = [
    number = '27.12.2018',
    number = '27122018',
    number = '271218',
    number = '20182712'
]
$btnSign.addEventListener('click', () => {
    if (valLog(log, $login.value) && valLog(password, $password.value) == true) {
        correctly()
    } else {
        incorrectly()
    }
})
valLog = (name, login) => { return name.some(nameVal => login === nameVal) }
incorrectly = () => {
    $inputSign.forEach(element => {
        element.style.animation = "incorrectly 0.2s";
        setTimeout(() => {
            element.style.animation = "";
        }, 100);
    });
}
correctly = () => {
    let first = 0,
        op = 1,
        firstInp = document.querySelector('.header__item:nth-child(1)'),
        secondInp = document.querySelector('.header__item:nth-child(2)'),
        id = setInterval(() => {
            first++
            if (first == 30) {
                clearInterval(id)
            } else {
                firstInp.style.top = first + 'px';
                secondInp.style.top = '-' + first + 'px';
            }
        }, 10),
        second = 0,
        secondInt = setInterval(() => {
            second++
            if (second == 75) {
                clearInterval(secondInt)
            } else {
                $btnSign.style.top = '-' + second + 'px';
            }
        }, 10),
        outItem = setInterval(() => {
            op -= 0.1
            if ($btnSign.style.opacity == -0.2) {
                clearInterval(outItem)
                document.querySelector('.header__body').style.display = 'none'
            } else {
                $btnSign.style.opacity = op
                firstInp.style.opacity = op
                secondInp.style.opacity = op
            }
        }, 15);
    setTimeout(() => {
        $heart.style.animation = "heartbeatCur 1s linear forwards";
        setTimeout(() => {
            $header.style.display = 'none'
            SecondWave()
        }, 800);
    }, 300);
}
// попробовать сделать с &&

// Второй блок
let secRoom = document.querySelector('.room')
SecondWave = () => {
    secRoom.style.display = 'block'
    setTimeout(() => {
        let textCloud = document.querySelector('.room__item-comment');
        addTextTo(textCloud)
    }, 2500);
}
let cellar = document.querySelector('.room__item-cellar')
let cellarBefore = document.querySelector('.room__item-before')
cellar.addEventListener('click', room = event => {
    if (event.target) {
        cellarBefore.style.animation = "heartbeatCur 0.7s linear forwards";
        setTimeout(() => {
            secRoom.style.display = 'none'
            document.querySelector('body').style.backgroundColor = 'black'
            document.querySelector('.slide').style.display = 'block'
        }, 800);
    }
}
)




// Плавное появление букв
addTextTo = elem => {
    let i = 0, text = 'Не хочешь зайти в подвал?'
    let timer = setInterval(function (event) {
        elem.textContent += text[i]
        if (++i >= text.length) clearInterval(timer)
    }, 100);
}
// Карточки 
let cardItemBack = document.querySelectorAll('.slide__item-back'),
    cardItem = document.querySelectorAll('.slide__Card-item'),
    cardContent = document.querySelectorAll('.slide__additional')

document.querySelectorAll('.slide__button-close').forEach($el => {
    $el.addEventListener('click', () => {
        fadeOut('.slide__card-additional')
        basketItems.textContent = 0
        purse.textContent = 15
        for (let index = 0; index < buttonBuy.length; index++) {
            const element = buttonBuy[index];
            element.style.backgroundColor = '#992c42'
            element.disabled = false
        }
    })
})

document.querySelector('.slide__card-additional').addEventListener('click', event => {
    event.stopPropagation();
})

cardItem.forEach($el => {
    $el.addEventListener("click", event => {
        event.stopPropagation();
    })
})
cardItemBack.forEach($el => {
    let cardId = $el.getAttribute('data-id')
    $el.addEventListener("click", (event) => {
        fadeIn('.slide__card-additional')
        selectCardContent(cardId)
    })
})
function selectCardContent(cardName) {
    cardContent.forEach($el => {
        $el.classList.contains(cardName) ? $el.classList.add('show') : $el.classList.remove('show')
    })
}
ToogleClassTab('modal-card', cardItemBack)
ToogleClassTab('active', cardItem)

document.querySelector('.slide__Card-body').addEventListener('click', close = event => {
    if (event.target) {
        ToogleClassTabClose('modal-card', cardItemBack)
        fadeOut('.slide__card-additional')
        ToogleClassTabClose('active', cardItem)
    }
})
//BuyShop

let basketItems = document.querySelector('.slide__section-items'),
    buttonBuy = document.querySelectorAll('.slide__section-button'),
    purse = document.querySelector('#purse')
buttonBuy.forEach(($el) => {
    $el.addEventListener('click', (event) => {
        let sum = 0, num = 0
        if (event.target) {
            if (purse.textContent <= 0) {
                for (let index = 0; index < buttonBuy.length; index++) {
                    const element = buttonBuy[index];
                    element.style.backgroundColor = 'gray'
                    element.disabled = true
                }
                return alert('Не хватает деньжат')
            }
            else if (Number($el.id) > Number(purse.textContent)) {
                num.disabled = true
                $el.disabled = true
                $el.style.backgroundColor = 'gray'
                return alert("Не хватает деньжат")
            } else if (!Number($el.id) < Number(purse.textContent)) {
                num = Math.max(purse.textContent -= $el.id, 0)
                purse.textContent = num
                sum = ++basketItems.textContent
                basketItems.textContent = sum
            }
        }
    })
})
// play video
let buttonPlay = document.querySelector('.slide__additional-play'),
    video = document.querySelector('.slide__additional-video')

Object.defineProperty(HTMLMediaElement.prototype, 'playing', {
    get: function () {
        return !!(this.currentTime > 0 && !this.paused && !this.ended && this.readyState > 2);
    }
})
buttonPlay.addEventListener('click', btnPlay = (event) => {
    if (event.target) {
        video.play()
        buttonPlay.style.display = 'none'
    }
})
video.addEventListener('click', () => {
    if (video.playing) {
        buttonPlay.style.display = 'block'
    }
    else {
        buttonPlay.style.display = 'none'
    }
})
// функции
function ToogleClassTab(classTab, item) {
    item.forEach($el => {
        $el.addEventListener('click', () => {
            item.forEach(el => { el.classList.remove(classTab); });
            $el.classList.add(classTab)
        })
    })
}
function ToogleClassTabClose(classTab, item) {
    item.forEach($el => {
        $el.classList.remove(classTab);
    })
}
function fadeOut(el) {
    let documentQer = document.querySelector(el)

    var opacity = 1;

    var timer = setInterval(function () {

        if (opacity <= 0.1) {

            clearInterval(timer);
            documentQer.style.display = "none";
        }

        documentQer.style.animation = "MagnificationReverse 1s forwards"
        documentQer.style.opacity = opacity;

        opacity -= opacity * 0.1;

    }, 10);

}
function fadeIn(el) {
    let documentQer = document.querySelector(el)
    var opacity = 0.01;

    documentQer.style.display = "flex";

    var timer = setInterval(function () {
        if (opacity >= 1) {

            clearInterval(timer);
        }
        documentQer.style.animation = "Magnification 1s forwards"
        documentQer.style.opacity = opacity
        documentQer.style.zIndex = 222
        opacity += opacity * 0.1;

    }, 1);

}
