const close = document.querySelector('.close')
const open = document.querySelector('.fas.fa-bars')
const nav = document.querySelector('.nav')

close.addEventListener('click', () => {
    nav.classList.remove('open')
    document.body.classList.remove('nav')
})

open.addEventListener('click', () => {
    nav.classList.add('open')
    document.body.classList.add('nav')
})