function imgSlider(anything) {
    document.querySelector('.starbucks').src = anything;
}

function circleColor(color) {
    const circle = document.querySelector('.circle');
    circle.style.background = color;
}

//NAVBAR

function toggleMenu(){
    var menuToggle = document.querySelector(`.toggle`);
    var navigation = document.querySelector(`.navigation`)
    menuToggle.classList.toggle(`active`)
    navigation
    .classList.toggle(`active`)
}

//DARK MODE

function myfunction(){
    var element = document.body;
    element.classList.toggle('light-mode');
}