const restInput = document.querySelector('.rest-input')
const restBtn = document.querySelector('.rest-btn')
const invalid = document.querySelector('.invalid-username')


function restPass() {
    restBtn.addEventListener("click", function () {
        let loginLocal = JSON.parse(localStorage.getItem("register"))
        loginLocal.forEach((el) => {
            if (el.email == restInput.value) {

                window.open("/my account/rest.html", "_self")


            } else if (el.email !== restInput.value) {
                invalid.style.display = 'block'
            }
        })

    })
}
restPass()
