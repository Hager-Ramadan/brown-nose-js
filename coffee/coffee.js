const products = [
    {
        "id": 1,
        "title": "Costa Rica",
        "description": "LOS NISPEROS ANAEROBIC",
        "type": "",
        "price": "650.00",
        "currency": "EGP  ",
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
        "currency": "EGP  ",
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
        "currency": "EGP  ",
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
        "currency": "EGP  ",
        "category": "coffee",
        "image": "../assets/images/milky-way-Brown-Nose-product-shot-new-2022-300x300.jpg",
        "url": "../products/milky-way.html"


    }, {
        "id": 5,
        "title": "COFFEE SAMPLE BOX",
        "description": "",
        "type": "",
        "price": "500.00",
        "currency": "EGP  ",
        "category": "coffee",
        "image": "../assets/images/Brown-Nose-Sample-Box-300x300.jpg",
        "url": "../products/coffee-sample.html"


    }
]

const containerProd = document.querySelector('.container_body .row')
displayProduct()

function displayProduct() {

    products.forEach(product => {

        containerProd.innerHTML += `
<div class ="col-lg-4 col-md-6 col-sm-12 g-sm-3 text-center card-coffee" data-id=${product.id}>

<a href = ${
            product.url
        }> 

<img src=${
            product.image
        } 
alt="" class="w-100 h-auto pb-4">
 <h6>${
            product.title
        }</h6>
<h6>${
            product.description
        }
</h6>

<P>${
            product.type
        }</P>
<P class="price">${
            product.currency
        }${
            product.price
        }</P></a>
        <div class="d-grid justify-content-center pt-2 pb-5"> <button class="btn btn-add-hover btn-add-cart" type="button">Add To Cart</button></div>

        </div>

    `
 addEventsToBtn()

    })

}

const cart = JSON.parse(localStorage.getItem('cart'))??[]
const container = document.querySelector('.container_body')


function addEventsToBtn() {
    const addToCartsBtn = document.querySelectorAll('.btn-add-cart')
    addToCartsBtn.forEach(ele=>{
    ele.addEventListener('click', () => {
const parent = ele.closest('.card-coffee')
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
        

    })
})
}

