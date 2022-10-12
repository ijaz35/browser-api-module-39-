//Adding handler function to add item button
const addItem = () => {
    const inputField = document.getElementById('item-field');
    const inputValue = inputField.value;
    if (!inputValue) {
        return;
    }
    //add item to UI
    displayItem(inputValue);
    //add item to lacalStorage
    addProductToCart(inputValue);
    //clear
    inputField.value = '';
}

//Function to display items on UI
const displayItem = (itemName) => {
    const productsContainer = document.getElementById('products-container');
    const product = document.createElement('li');
    product.innerText = itemName;
    productsContainer.appendChild(product);
}

//Function to get cart and create a cart
const getCart = () => {
    const cart = localStorage.getItem('cart');
    let cartObj;
    if (cart) {
        cartObj = JSON.parse(cart);
    } else {
        cartObj = {};
    }
    return cartObj;
}

//Function to add product in cart and store to local storage
const addProductToCart = (productName) => {
    const cart = getCart();
    if (cart[productName]) {
        cart[productName] = cart[productName] + 1;
    } else {
        cart[productName] = 1;
    }
    const cartStringified = JSON.stringify(cart);
    // console.log(cart);
    localStorage.setItem('cart', cartStringified);

}

//Function to show previous cart in UI
const showCart = () => {
    const cart = getCart();
    for (const product in cart) {
        displayItem(product);
    }
}
showCart();

//Function to add handler function to place order button
const placeOrder = () => {
    document.getElementById('products-container').textContent = '';
    //removing key and it's values from local storage
    localStorage.removeItem('cart');
}