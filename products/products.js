const imgSub = document.querySelector('.img-sub')
const hoverImg = document.querySelector('.sub-hover-img')


hoverImg.addEventListener('mousemove', onZoom)
hoverImg.addEventListener('mouseover', onZoom)
hoverImg.addEventListener('mouseleave', offZoom)

function onZoom(e) {
    const x = e.clientX - e.target.offsetLeft;
    const y = e.clientY - e.target.offsetTop;
    imgSub.style.transformOrigin = `${x}px ${y}px`;
    imgSub.style.transform = 'scale(2)'

}
function offZoom(e) {
    imgSub.style.transformOrigin = `center center`;
    imgSub.style.transform = 'scale(1)'


}


const products = [
    {
        "id": 1,
        "title": "Costa Rica",
        "description": "LOS NISPEROS ANAEROBIC",
        "type": "",
        "price": "650.00",
        "category": "coffee",
        "image": "../assets/images/BROWN-NOSE-Costa-Rica-Los-Nisperos-website-photo-1-300x300.jpg",
        "url": "../products/costa-rich.html"


    },
    {
        "id": 2,
        "title": "COSTA RICH ",
        "description": "EL BAMBU HONEY",
        "type": "",
        "price": "600.00",
        "category": "coffee",
        "image": "../assets/images/BROWN-NOSE-Costa-Rica-El-Bambu-website-photo-1-300x300.jpg",
        "url": "../products/costa-rich1.html"


    },
    {
        "id": 3,
        "title": "BRAZIL",
        "description": "",
        "type": "Mogiana",
        "price": "350.00",
        "category": "coffee",
        "image": "../assets/images/BROWN-NOSE-LABEL-BRAZIL-bag-website-300x300.jpg",
        "url": "../products/brazail.html"


    },
    {
        "id": 4,
        "title": "MILKY WAY",
        "description": "",
        "type": "Blend",
        "price": "400.00",
        "category": "coffee",
        "image": "../assets/images/milky-way-Brown-Nose-product-shot-new-2022-300x300.jpg",
        "url": "../products/milky-way.html"


    }, {
        "id": 5,
        "title": "COFFEE SAMPLE BOX",
        "description": "",
        "type": "",
        "price": "Out Of Stock",
        "category": "coffee",
        "image": "../assets/images/Brown-Nose-Sample-Box-300x300.jpg",
        "url": "../products/coffee-sample.html"


    }
]

const cart = JSON.parse(localStorage.getItem('cart'))
const container = document.querySelector('.added-prod')

function addEventsToBtn() {
    const addToCartsBtn = document.querySelector('.btn-add-cart')
    addToCartsBtn.addEventListener('click', () => {
        const parent = addToCartsBtn.closest('.row')
        const id = parent.dataset.id
        const product = products.find(product => product.id == id)
        const cartProd = cart.find(product => product.id == id)
        if (cartProd == undefined) {
            cart.push({
                ... product,
                quantity: 1
            })

        } else {
            cartProd.quantity ++
        }
        localStorage.setItem('cart', JSON.stringify(cart))
        container.innerHTML = ` 
            <p>${
            cartProd.quantity
        } × “${
            product.title
        }” have been added to your cart.</p>

`

    })

}
addEventsToBtn()
