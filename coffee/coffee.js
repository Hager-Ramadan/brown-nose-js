const products = [
    {
        "id": 1,
        "title": "Costa Rica",
        "description": "LOS NISPEROS ANAEROBIC",
        "type": "",
        "price": "650.00",
        "category": "coffee",
        "image": "../assets/images/BROWN-NOSE-Costa-Rica-Los-Nisperos-website-photo-1-300x300.jpg",
        "url": "/products/costa-rich.html"


    },
    {
        "id": 2,
        "title": "COSTA RICH ",
        "description": "EL BAMBU HONEY",
        "type": "",
        "price": "600.00",
        "category": "coffee",
        "image": "../assets/images/BROWN-NOSE-Costa-Rica-El-Bambu-website-photo-1-300x300.jpg",
        "url": "/products/costa-rich1.html"


    },
    {
        "id": 3,
        "title": "BRAZIL",
        "description": "",
        "type": "Mogiana",
        "price": "350.00",
        "category": "coffee",
        "image": "../assets/images/BROWN-NOSE-LABEL-BRAZIL-bag-website-300x300.jpg",
        "url": "/products/brazail.html"


    },
    {
        "id": 4,
        "title": "MILKY WAY",
        "description": "",
        "type": "Blend",
        "price": "400.00",
        "category": "coffee",
        "image": "../assets/images/milky-way-Brown-Nose-product-shot-new-2022-300x300.jpg",
        "url": "/products/milky-way.html"


    }, {
        "id": 5,
        "title": "COFFEE SAMPLE BOX",
        "description": "",
        "type": "",
        "price": "Out Of Stock",
        "category": "coffee",
        "image": "../assets/images/Brown-Nose-Sample-Box-300x300.jpg",
        "url": "/products/coffee-sample.html"


    }
]

const containerProd = document.querySelector('.container_body .row')
displayProduct()

function displayProduct() {

    products.forEach(product => {

        containerProd.innerHTML += `
<div class ="col-lg-4 col-md-6 col-sm-12 g-sm-3 text-center card-coffee">

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
<P class="price">EGP${
            product.price
        }</P></a></div>

    `
    })
}
