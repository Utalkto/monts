const products = {
    product1: {
        price: 3,
        name: 'product 1',
        img: ''
    },
    product2: {
        price: 5,
        name: 'product 2',
        img: ''
    },
    product3: {
        price: 7,
        name: 'product 3',
        img: ''
    },
    product4: {
        price: 6,
        name: 'product 4',
        img: ''
    },
    product5: {
        price: 4,
        name: 'product 5',
        img: ''
    },
    product6: {
        price: 8,
        name: 'product 6',
        img: ''
    },
}

let currentCart = {
    product1: 0,
    product2: 0,
    product3: 0,
    product4: 0,
    product5: 0,
    product6: 0,
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
}


Object.entries(currentCart).forEach((element, index) => {
    try {
        productsDOM[`product${index + 1}`].innerText = element[1];
    }
    catch {console.log('there')};
});


function addToCart(product) {
    totalInCart += products[product].price;

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

    if (currentCart['product1'] > 0) {
        cartBody.innerHTML += `
        <tr class="table-body-row">
            <td class="product-image"><img src="assets/img/products/product-img-1.jpg" alt=""></td>
            <td class="product-name">${products.product1.name}</td>
            <td class="product-price">${products.product1.price}</td>
            <td class="product-quantity">${currentCart.product1}</td>
            <td class="product-total">${currentCart.product1 * products.product1.price}</td>
        </tr>
        `
        total += currentCart.product1 * products.product1.price;
    }

    if (currentCart['product2'] > 0) {
        cartBody.innerHTML += `
        <tr class="table-body-row">
            <td class="product-image"><img src="assets/img/products/product-img-1.jpg" alt=""></td>
            <td class="product-name">${products.product2.name}</td>
            <td class="product-price">${products.product2.price}</td>
            <td class="product-quantity">${currentCart.product2}</td>
            <td class="product-total">${currentCart.product2 * products.product2.price}</td>
        </tr>
        `
        total += currentCart.product2 * products.product2.price;
    }

    if (currentCart['product3'] > 0) {
        cartBody.innerHTML += `
        <tr class="table-body-row">
            <td class="product-image"><img src="assets/img/products/product-img-1.jpg" alt=""></td>
            <td class="product-name">${products.product3.name}</td>
            <td class="product-price">${products.product3.price}</td>
            <td class="product-quantity">${currentCart.product3}</td>
            <td class="product-total">${currentCart.product3 * products.product3.price}</td>
        </tr>
        `
        total += currentCart.product3 * products.product3.price;
    }

    if (currentCart['product4'] > 0) {
        cartBody.innerHTML += `
        <tr class="table-body-row">
            <td class="product-image"><img src="assets/img/products/product-img-1.jpg" alt=""></td>
            <td class="product-name">${products.product4.name}</td>
            <td class="product-price">${products.product4.price}</td>
            <td class="product-quantity">${currentCart.product4}</td>
            <td class="product-total">${currentCart.product4 * products.product4.price}</td>
        </tr>
        `
        total += currentCart.product4 * products.product4.price;
    }

    if (currentCart['product5'] > 0) {
        cartBody.innerHTML += `
        <tr class="table-body-row">
            <td class="product-image"><img src="assets/img/products/product-img-1.jpg" alt=""></td>
            <td class="product-name">${products.product5.name}</td>
            <td class="product-price">${products.product5.price}</td>
            <td class="product-quantity">${currentCart.product5}</td>
            <td class="product-total">${currentCart.product5 * products.product5.price}</td>
        </tr>
        `
        total += currentCart.product5 * products.product5.price;
    }

    if (currentCart['product6'] > 0) {
        cartBody.innerHTML += `
        <tr class="table-body-row">
            <td class="product-image"><img src="assets/img/products/product-img-1.jpg" alt=""></td>
            <td class="product-name">${products.product6.name}</td>
            <td class="product-price">${products.product6.price}</td>
            <td class="product-quantity">${currentCart.product6}</td>
            <td class="product-total">${currentCart.product6 * products.product6.price}</td>
        </tr>
        `
        total += currentCart.product6 * products.product6.price;
    }

    document.getElementById('total-in-products').innerText = `${total}$`;
    document.getElementById('total-to-pay').innerText = `${total}$`;
   
}


function addFinalProducts() {

    let orderBody = document.getElementById('order-details-body');
    let totalToPay = 0;
    let totalProducts = 0;

    if (currentCart['product1'] > 0) {
        orderBody.innerHTML += `
        <tr>
            <td class="product-quantity">${products.product1.name}</td>
            <td class="product-quantity">${currentCart['product1']}</td>
            <td class="product-total">${products.product1.price}$</td>
        </tr>
        `
        totalToPay += currentCart.product1 * products.product1.price;
        totalProducts += currentCart.product1;
    }
    if (currentCart['product2'] > 0) {
        orderBody.innerHTML += `
        <tr>
            <td class="product-quantity">${products.product2.name}</td>
            <td class="product-quantity">${currentCart['product2']}</td>
            <td class="product-total">${products.product2.price}$</td>
        </tr>
        `
        totalToPay += currentCart.product2 * products.product2.price;
        totalProducts += currentCart.product2;
    }
    if (currentCart['product3'] > 0) {
        orderBody.innerHTML += `
        <tr>
            <td class="product-quantity">${products.product3.name}</td>
            <td class="product-quantity">${currentCart['product3']}</td>
            <td class="product-total">${products.product3.price}$</td>
        </tr>
        `
        totalToPay += currentCart.product3 * products.product3.price;
        totalProducts += currentCart.product3;
    }
    if (currentCart['product4'] > 0) {
        orderBody.innerHTML += `
        <tr>
            <td class="product-quantity">${products.product4.name}</td>
            <td class="product-quantity">${currentCart['product4']}</td>
            <td class="product-total">${products.product4.price}$</td>
        </tr>
        `
        totalToPay += currentCart.product4 * products.product4.price;
        totalProducts += currentCart.product4;
    }
    // do the same as above until product6
    if (currentCart['product5'] > 0) {
        orderBody.innerHTML += `
        <tr>
            <td class="product-quantity">${products.product5.name}</td>
            <td class="product-quantity">${currentCart['product5']}</td>
            <td class="product-total">${products.product5.price}$</td>
        </tr>
        `
        totalToPay += currentCart.product5 * products.product5.price;
        totalProducts += currentCart.product5;
    }
    if (currentCart['product6'] > 0) {
        orderBody.innerHTML += `
        <tr>
            <td class="product-quantity">${products.product6.name}</td>
            <td class="product-quantity">${currentCart['product6']}</td>
            <td class="product-total">${products.product6.price}$</td>
        </tr>
        `
        totalToPay += currentCart.product6 * products.product6.price;
        totalProducts += currentCart.product6;
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
