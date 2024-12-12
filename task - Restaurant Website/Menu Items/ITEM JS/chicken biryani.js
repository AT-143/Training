// Handle form submission and calculate total price
document.getElementById('orderForm').addEventListener('submit', function (event) {
    event.preventDefault();

    let quantity = document.getElementById('quantity').value;
    let pricePerItem = 299;
    let total = quantity * pricePerItem;

    // Update order summary
    document.getElementById('quantityDisplay').textContent = quantity;
    document.getElementById('totalPrice').textContent = total.toFixed(2);

    // Show confirmation message
    alert(`Your order for ${quantity} Chicken Biryani(s) has been placed. Total: ₹${total.toFixed(2)}`);
});

// Handle confirm order button click
document.getElementById('confirmOrderBtn').addEventListener('click', function () {
    alert('Thank you for your order! We will deliver your Chicken Biryani soon.');
});