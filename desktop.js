document.querySelectorAll('.features-ingredient span').forEach(item => {
    item.addEventListener('click', function() {
        console.log("Clicked:", this);
        this.classList.toggle('expanded');
        const content = this.nextElementSibling; // This targets the .content div immediately following the span
        console.log("Content:", content);
        content.classList.toggle('hidden'); // Toggles visibility of content
    });
});

document.querySelectorAll('.below-img img').forEach(item => {
    item.addEventListener('click', function() {
        // Remove 'active' class from all images and add 'shadowed'
        document.querySelectorAll('.below-img img').forEach(img => {
            img.classList.remove('active');
            img.classList.add('shadowed');
        });

        // Add 'active' class to clicked image and remove 'shadowed'
        this.classList.add('active');
        this.classList.remove('shadowed');

        const mainImage = document.querySelector('.left-part img');
        mainImage.src = this.src;

        // Optional: Scroll to the main image if it's not in the viewport
        mainImage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });
});

//Hnadle price and quantity of products in product page.
function updateQuantity(change) {
    const quantityInput = document.getElementById('quantity');
    let quantity = parseInt(quantityInput.value);
    quantity = isNaN(quantity) ? 0 : quantity;
    quantity += change;
    quantity = quantity < 1 ? 1 : quantity; // Prevent quantity less than 1
    quantityInput.value = quantity;
    updatePrice();
}

function updatePrice() {
    const pricePerUnit = 9.50; // Set the price per unit
    const quantity = parseInt(document.getElementById('quantity').value);
    const totalPrice = (pricePerUnit * quantity).toFixed(2); // Ensure two decimal places
    document.getElementById('total').innerText = totalPrice;
}

//Hnadle price and quantity of products in cart page.
function updateCartQuantity(change, itemId) {
    const quantityInput = document.getElementById('quantity'+ itemId);
    let quantity = parseInt(quantityInput.value);
    quantity = isNaN(quantity) ? 0 : quantity;
    quantity += change;
    quantity = quantity < 1 ? 1 : quantity; // Ensure quantity is never less than 1
    quantityInput.value = quantity;
    updateCartPrice(itemId);
}

function updateCartPrice(itemId) {
    const pricePerUnit = 9.50; 
    const quantity = parseInt(document.getElementById('quantity'+itemId).value);
    const totalPrice = (pricePerUnit * quantity).toFixed(2);
    document.getElementById('price'+itemId).textContent = totalPrice;
    updateSubtotal();
}
function updateSubtotal() {
    const items = document.querySelectorAll('.item-info');
    let total = 0;
    items.forEach(item => {
        const priceText = item.querySelector('h3 span').textContent;
        const price = parseFloat(priceText.replace('$', ''));
        if (!isNaN(price)) { // Check if price is a number
            total += price;
        } else {
            console.error('Error parsing price:', priceText);
        }
    });
    console.log('Total calculated:', total);
    document.getElementById('subtotal').textContent = total.toFixed(2);
}

//The product page jumps to the cart page.
function addToCart() {    
    window.location.href = 'cart.html'; 
}

// The cart page jumps to shop all page.
function addToShop(){
    window.location.href = 'shop.html';
}

// The shop all page jumps to product detail page.
function addToDetail(){
    window.location.href = 'product.html';
}


document.addEventListener("DOMContentLoaded", function() {
    const mainImage = document.getElementById("main-image");

    function updateImageSource() {
        if (window.innerWidth <= 435) {
            mainImage.src = "res/mainImg1.png";
        } else {
            mainImage.src = "res/Oliv_&_Koko-3165.jpg";
        }
    }
    updateImageSource();
    window.addEventListener("resize", updateImageSource);
});

//Search Page Jump
document.getElementById('search-button').addEventListener('click', function(event) {
    event.preventDefault();  
    var userInput = document.getElementById('search-input').value; 

    if (userInput.toLowerCase() === 'lime and coconut soap') {
        window.location.href = 'product.html';  
    } else {
        alert("No products found. Please try another search.");  
    }
});
