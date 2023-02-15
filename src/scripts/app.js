const navBtn = document.querySelector(".nav-btn")
const menuBtn = document.querySelector('.menu-mobile')

navBtn.addEventListener('click', () => {
    if (navBtn.classList.contains('nav-btn--open')) {
        navBtn.classList.remove('nav-btn--open')
        menuBtn.classList.remove('menu-mobile--open')
    } else {
        navBtn.classList.add('nav-btn--open')
        menuBtn.classList.add('menu-mobile--open')
    }
})