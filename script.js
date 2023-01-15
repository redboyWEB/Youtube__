let btnMenu = document.querySelector('.burger')
let navMenu = document.querySelector('.sidebar')

btnMenu.addEventListener('click', function () {
    navMenu.classList.toggle('active')
})