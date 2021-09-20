function imgSlider(anything) {
    document.querySelector('.starbucks').src = anything;
}

function circleColor(color) {
    const circle = document.querySelector('.circle');
    circle.style.background = color;
}

//NAVBAR

const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navberLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
    navberLinks.classList.toggle('active')
})

//DARK MODE

function myfunction(){
    var element = document.body;
    element.classList.toggle('light-mode');
}