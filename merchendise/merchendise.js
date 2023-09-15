const products = [
    {
        "id": 1,
        "title": "BIALETTI BRIKKA 2 CUPS",
        "type": "",
        "price": "Out Of Stock",
        "category": "merchendise",
        "image": "../assets/images/BN-Bialetti-Brikka-2-Cups-300x300.jpg"

    },
    {
        "id": 2,
        "title": "BIALETTI MOKA EXPRESS 2 CUP",
        "type": "",
        "price": "Out Of Stock",

        "category": "merchendise",
        "image": "../assets/images/BN-Bialetti-Moka-Express-2-Cup-300x300.jpg"


    },
    {
        "id": 3,
        "title": "BIALETTI MOKA EXPRESS RED 3 CUP",
        "type": "",
        "price": "Out Of Stock",

        "category": "merchendise",
        "image": "../assets/images/moka-red-300x300.jpeg"

    },
    {
        "id": 4,
        "title": "TIMEMORE BLACK MIRROR SCALE",
        "type": "",
        "price": "Out Of Stock",

        "category": "merchendise",
        "image": "../assets/images/BN-Timemore-Black-Mirror-Scale-Black-300x300.jpg"


    }, {
        "id": 5,
        "title": "TIMEMORE CHESTNUT G1 HAND GRINDER",
        "type": "",
        "price": "Out Of Stock",

        "category": "merchendise",
        "image": "../assets/images/BN-Timemore-Chestnut-G1-Hand-Grinder-300x300.jpg"


    }
]

const containerProd = document.querySelector('.container_body .row')

products.forEach(product => {

    containerProd.innerHTML += `
<div class ="col-lg-4 col-md-6 col-sm-12 g-sm-3 text-center card-coffee">
 <img src=${
        product.image
    } alt="" class="w-100 h-auto pb-4">
 <h6 class ="pb-4">${
        product.title
    } </h6>
<P class="price pb-3">${
        product.price
    } </P> </div>

    `
})
