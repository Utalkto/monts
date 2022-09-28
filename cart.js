const products = {
    product1: {
        price: 3,
        name: 'SALCHICHA COCIDA CON FINAS HIERBAS',
        img: 'assets/img/products/Salchicha-cocida-Finas-Hierbas-630 PARRILLA.png'
    },
    product2: {
        price: 4,
        name: 'SALCHICHA COCIDA PARA DESAYUNO',
        img: 'assets/img/products/3_Salchicha-cocida-finas-hierbas-desayuno.png'
    },
    product3: {
        price: 4,
        name: 'SALCHICHA COCIDA PICANTE JALAPEÑA',
        img: 'assets/img/products/salchicha-picante-jalapena-630 PARRILA.png'
    },
    product4: {
        price: 6,
        name: 'JAMÓN COCIDO SUPERIOR',
        img: 'assets/img/products/Jamon-Cocido-Superior.jpg'
    },
    product5: {
        price: 5,
        name: 'JAMÓN AHUMADO VISKING',
        img: 'assets/img/products/Jamon-Ahumado-Visking.jpg'
    },
    product6: {
        price: 3,
        name: 'PECHUGA DE PAVO COCIDA',
        img: 'assets/img/products/la_montserratina_21012013180908.jpg'
    },
    product7: {
        price: 7,
        name: 'CHORIZO VELA',
        img: 'assets/img/products/CHORIZO-TIPO-VELA PRODUCTO.jpg'
    },
    product8: {
        price: 2,
        name: 'SALCHICHON TIPO VICH',
        img: 'assets/img/products/Salchichon-Tipo-Vich PRODUCTO.jpg'
    },
    product9: {
        price: 5,
        name: 'SALCHICHON TIPO FUET',
        img: 'assets/img/products/SalchichOn-tipo-fuet PRODUCTO.jpg'
    },
    product10: {
        price: 7,
        name: 'JAMÓN PLANCHADO',
        img: 'assets/img/products/NOOficial-JAMON-PLANCHADO.jpg'
    },
    product11: {
        price: 8,
        name: 'JAMÓN TIPO TENDER',
        img: 'assets/img/products/Jamon-Ahumado-Tipo-Tender PRODUCTO.jpg'
    },

}

let currentCart = {
    product1: 0,
    product2: 0,
    product3: 0,
    product4: 0,
    product5: 0,
    product6: 0,
    product7: 0,
    product8: 0,
    product9: 0,
    product10: 0,
    product11: 0,
}
let totatDiaplayer = document.getElementById('total');

let retrievedObject = localStorage.getItem('currentCart');
console.log(retrievedObject);

let totalInCart = 0;


if (retrievedObject){
    currentCart = JSON.parse(retrievedObject);

    // get the total
    Object.entries(currentCart).forEach((element, index) => {
        if (element[1] > 0) {
            totalInCart += products[`product${index + 1}`].price;
        }
    });

    try{totatDiaplayer.innerText = totalInCart + ' $';} catch{}
}



const productsDOM = { 
    product1: document.getElementById('product-1-quantity'),
    product2: document.getElementById('product-2-quantity'),
    product3: document.getElementById('product-3-quantity'),
    product4: document.getElementById('product-4-quantity'),
    product5: document.getElementById('product-5-quantity'),
    product6: document.getElementById('product-6-quantity'),
    product7: document.getElementById('product-7-quantity'),
    product8: document.getElementById('product-8-quantity'),
    product9: document.getElementById('product-9-quantity'),
    product10: document.getElementById('product-10-quantity'),
    product11: document.getElementById('product-11-quantity'),
}


Object.entries(currentCart).forEach((element, index) => {
    try {
        productsDOM[`product${index + 1}`].innerText = element[1];
    }
    catch {console.log('there')};
});


function addToCart(product) {
    totalInCart += products[product].price;
    console.log(currentCart);

    productsDOM[product].innerText = currentCart[product] + 1;

    totatDiaplayer.innerText = totalInCart + ' $';
    currentCart[product] += 1;
}

let cartBody = document.getElementById('cart-body');
let total = 0;


function gotToPay() {
    // // Put the object into storage
    localStorage.setItem('currentCart', JSON.stringify(currentCart));

    // // Retrieve the object from storage
    

    document.location.replace('cart.html');

}


function generateCart() {
    console.log(currentCart)
    for (let i=0; i < Object.keys(currentCart).length; i++) {
        if (currentCart[`product${i + 1}`] > 0) {
            cartBody.innerHTML += `
            <tr class="table-body-row">
                <td class="product-image"><img src="${products[`product${i + 1}`].img}" alt=""></td>
                <td class="product-name">${products[`product${i + 1}`].name}</td>
                <td class="product-price">${products[`product${i + 1}`].price} $</td>
                <td class="product-quantity">${currentCart[`product${i + 1}`]}</td>
                <td class="product-total">${currentCart[`product${i + 1}`] * products[`product${i + 1}`].price} $</td>
            </tr>
            `
            total += currentCart[`product${i + 1}`] * products[`product${i + 1}`].price;

        }
    }

    document.getElementById('total-in-products').innerText = `${total}$`;
    document.getElementById('total-to-pay').innerText = `${total}$`;
   
}


function addFinalProducts() {

    let orderBody = document.getElementById('order-details-body');
    let totalToPay = 0;
    let totalProducts = 0;

    for (let i=0; i < Object.keys(currentCart).length; i++) {
        if (currentCart[`product${i + 1}`] > 0) {
            console.log(i)
            orderBody.innerHTML += `
            <tr class="table-body-row">
                <td class="product-quantity">${products[`product${i + 1}`].name} $</td>
                <td class="product-quantity">${currentCart[`product${i + 1}`]}</td>
                <td class="product-total">${products[`product${i + 1}`].price} $</td>
            </tr>
            `
            totalToPay += currentCart[`product${i + 1}`] * products[`product${i + 1}`].price;
            totalProducts += currentCart[`product${i + 1}`];

        }
    }

    orderBody.innerHTML += `
    <tr>
        <td class="product-quantity">Total</td>
        <td class="product-total">${totalProducts}</td>
        <td class="product-total">${totalToPay}$</td>
    </tr>
    `
}

try{generateCart()} catch{}
try{addFinalProducts()} catch{}
