//Меню
let menuBtn = document.querySelector('.btn');
let menu = document.querySelector('.menu');
menuBtn.addEventListener('click', function() {
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');  
});

// Модальное окно
let modal = document.querySelector('.modal');
let overflow = document.querySelector('.over');
function openWin() {
    overflow.style.left = "0";
    var height = modal.offsetHeight;
    modal.style.marginTop = - height / 2 + "px";
    modal.style.top = "50%";
}

overflow.onclick = function () {
        modal.style.top = "-100%";
        overflow.style.left = "-100%";
}

function openWind() {
    alert("Вы переходите на другой сайт.");
}