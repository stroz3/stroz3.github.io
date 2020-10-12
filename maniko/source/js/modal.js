document.querySelectorAll('.showModal').forEach(function (element) {
    element.onclick = showModal;
});
document.querySelectorAll('.popup__close').forEach(function (element) {
    element.onclick = showClose;
});
document.querySelectorAll('.popup').forEach(function (element) {
    element.onclick = showClose;
});
document.querySelector('#sign-in').onclick = function () {
    event.stopPropagation();
}// это нужно, чтобы при на жатии закрывалось на серое окно, закрывался модальное окно 

// Отправка заявки 
$(document).ready(function () {
    $('#form').submit(function () { // проверка на пустоту заполненных полей. Атрибут html5 — required не подходит (не поддерживается Safari)
        if (document.form.name.value == '' || document.form.phone.value == '' || document.form.mail.value == '') {
            valid = false;
            alert('Заполните поля');
            return valid;
        }
    });
});
// Отправка формы
$(document).ready(function () {
    //E-mail Ajax Send
    $("form").submit(function () { //Change
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "/mail.php", //Change
            data: th.serialize()
        }).done(function () {
            $('.popup__thanks').fadeIn();
            setTimeout(function () {
                // Done Functions
                th.trigger("reset");
            }, 1000);
        });
        return false;
    });

});

// Закрыть попап «спасибо»
$('.thank__you-close').click(function () { // по клику на крестик
    $('.popup__thanks').fadeOut();
    $('.form').fadeOut();
});




// Маска ввода номера телефона (плагин maskedinput)
$(function ($) {
    $('[name="phone"]').mask("+7(999) 999-9999");
});
function showModal() {
    $('.form').fadeIn();

};
function showClose() {
    $('.form').fadeOut();
};