const navToggle = document.querySelector('.nav-toggle')
const navLinks = document.querySelectorAll('.nav-link')

navToggle.addEventListener('click',() => {
    document.body.classList.toggle('nav-open')
})
/*add a class in the menu toggle  */

navLinks.forEach(links => {
    links.addEventListener('click',() => {
        document.body.classList.remove('nav-open')
    })
})

