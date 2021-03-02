const themeSwitch = document.querySelector('input[type="checkbox"]')
const nav = document.getElementById('nav')
const text = document.getElementById('text-box')
const image1 = document.getElementById('image1')
const image2 = document.getElementById('image2')
const image3 = document.getElementById('image3')
const toggleIcon = document.getElementById('toggle-icon')


function changeImage(color) {
    image1.src = `./img/undraw_conceptual_idea_${color}.svg`
    image2.src = `./img/undraw_feeling_proud_${color}.svg`
    image3.src = `./img/undraw_proud_coder_${color}.svg`
}

function darkTheme() {
    nav.style.backgroundColor = 'rgb(0 0 0 / 50%)'
    text.style.backgroundColor = 'rgb(255 255 255 / 50%)'
    toggleIcon.children[0].textContent = 'Dark Mode'
    toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon')
    changeImage('dark')
}

function lightTheme() {
    nav.style.backgroundColor = 'rgb(255 255 255 / 50%)'
    text.style.backgroundColor = 'rgb(0 0 0 / 50%)'
    toggleIcon.children[0].textContent = 'Light Mode'
    toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun')
    changeImage('light')
}

function switchTheme(event) {
    if (event.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark')
        localStorage.setItem('theme', 'dark')
        darkTheme()
    } else {
        document.documentElement.setAttribute('data-theme', 'light')
        localStorage.setItem('theme', 'light')
        lightTheme()
    }
}

themeSwitch.addEventListener('change', switchTheme)

const currentMode = localStorage.getItem('theme')

if (currentMode) {
    document.documentElement.setAttribute('data-theme', currentMode)

    if (currentMode === 'dark') {
        themeSwitch.checked = true
        darkTheme()
    }
}
