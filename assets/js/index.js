// ======= start navbar
const nav = document.querySelector("nav")
const containerBody = document.querySelector(".brown_container")
const navbarContainer = document.querySelector(".navbar-container")


let offsetNav = containerBody.offsetTop;


window.addEventListener('scroll', () => {

    if (window.scrollY >= offsetNav + 100) { // nav.style.backgroundColor = ('white')
        nav.style.boxShadow = ('0 0 30px 0 rgba(0, 0, 0, 10%)')
        nav.style.transition = ('.5s')
        navbarContainer.style.padding = ('0')


    } else { // nav.style.backgroundColor = ('transparent')
        nav.style.boxShadow = ('none')
        nav.style.height = ('115px')


    }
})
// start responsive navbar

const barsBtn = document.querySelector('.bars')
const cancelBtn = document.querySelector('.cancel')
const navMenu = document.querySelector('.respon-menu ul')


barsBtn.addEventListener('click', function () {
    navMenu.style.left = '0'
    barsBtn.style.display = 'none'
    cancelBtn.style.display = 'block'
})
cancelBtn.addEventListener('click', function () {
    navMenu.style.left = '100%'
    barsBtn.style.display = 'block'
    cancelBtn.style.display = 'none'

})

// ======= end navbar
