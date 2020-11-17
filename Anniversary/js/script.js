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
    name = 'Patay',
    name = 'патау',
    name = 'пту'
]
let password = [
    number = '27.12.2020',
    number = '27122020',
    number = '271220',
    number = '20202712'
]
$btnSign.addEventListener('click', () => {
    if (valLog(log, $login.value) == true) {
        if (valLog(password, $password.value) == false) {
            incorrectly()
        } else {
            correctly()
        }
    }
    else if (valLog(password, $password.value) == true) {
        if (valLog(login, $login.value) == false) {
            incorrectly()
        } else {
            correctly()
        }
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
        $heart.style.animation = "heartbeatCur 0.5s linear forwards";
        setTimeout(() => {
            $header.style.display = 'none'
            document.querySelector('.room').style.display = 'block'
        }, 800);
    }, 300);
}
// Второй блок
document.querySelector('.room__item-right').addEventListener('click', function room(event) {
    if (event.target) {
        console.log('work');
    }
}
)

console.log(new Date(2020, 11, 27, 17, 30, 0));