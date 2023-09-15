// ======= start login
let tabs = document.querySelectorAll('.tabs em')
let tabsArray = Array.from(tabs)
let divs = document.querySelectorAll('.tabs-content > div')
let divsArray = Array.from(divs)


tabsArray.forEach((ele) => {
    ele.addEventListener('click', function (e) {
        tabsArray.forEach((ele) => {
            ele.classList.remove('active')
        })
        e.currentTarget.classList.add('active')
        divsArray.forEach((div) => {
            div.style.display = 'none'
        })
        document.querySelector(e.currentTarget.dataset.cont).style.display = 'block'

    })
})

var loginBtn = document.querySelector('.btn-login')
var emailInput = document.querySelector('.email-input')
var passInput = document.querySelector('.pass-input')
var errorEmail = document.getElementById('email-error')
var errorPass = document.getElementById('pass-error')

loginBtn.addEventListener('click', function () {
    validated()


})
emailInput.addEventListener('textInput', email_verify)
passInput.addEventListener('textInput', pass_verify)

function validated() {
    if (emailInput.value.length < 1) {
        errorEmail.style.display = 'block'
        return false
    }
    if (passInput.value.length < 1) {
        errorPass.style.display = 'block'
        return false
    }

}
function email_verify() {
    if (emailInput.value.length > 0) {
        errorEmail.style.display = 'none'
        return true

    }
}
function pass_verify() {
    if (passInput.value.length >= 1) {
        errorPass.style.display = 'none'
        return true

    }
}


// ======= end login

// ********** register ***********

function register() {
    const email__input = document.querySelector(".email__input")
    const password__input = document.querySelector(".password__input")
    const register__btn = document.querySelector(".register__btn")
    const strong__pass = document.querySelector(".two .strong__pass")
    const strong__span = document.querySelector(".two .strong__pass span")

    password__input.addEventListener("input", function () {
        if (password__input.value == "") {
            strong__pass.style.display = "none"
        } else {
            strong__pass.style.display = "flex"
        }

        if (password__input.value.length < 3) {
            strong__span.textContent = "Very weak - Please enter a stronger password."
            strong__span.style.background = "#f1adad"
        }
        if (password__input.value.length > 3) {
            strong__span.textContent = "Weak - Please enter a stronger password."
            strong__span.style.background = "#fbc5a9"
        }
        if (password__input.value.length > 10) {
            strong__span.textContent = "Medium"
            strong__span.style.background = "#ffe399"
        }
        if (password__input.value.length > 14) {
            strong__span.textContent = "Strong"
            strong__span.style.background = "#c1e1b9"
        }
    })

    let storage = []
    register__btn.addEventListener("click", function () {
        let emailValue = email__input.value
        let passValue = password__input.value
        let info = {
            email: emailValue,
            password: passValue
        }
        storage.push(info)
        email__input.value = ''
        password__input.value = ''
        strong__span.style.display = 'none'
        localStorage.setItem("register", JSON.stringify(storage))
    })
}
register()
const notMatch = document.getElementById('not-matched')
const unknownPass = document.getElementById('unknown-pass')
const emailError = document.querySelector('.email-error')


function login() {

    loginBtn.addEventListener("click", function () {
        let loginLocal = JSON.parse(localStorage.getItem("register"))
        loginLocal.forEach((el) => {
            if (el.email == emailInput.value && el.password == passInput.value) {
                window.open("/home/index.html", "_self")


            } else if (el.email == emailInput.value && el.password !== passInput.value && passInput.value.length > 0 && emailInput.value.length > 0) {
                unknownPass.style.display = 'block'


            } else if (el.email !== emailInput.value && passInput.value.length > 0 && emailInput.value.length > 0) {

                notMatch.style.display = 'block'
            }
        })

    })
}
login()
