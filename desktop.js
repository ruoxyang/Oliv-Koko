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
