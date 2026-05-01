// 🔐 Protect page (only logged-in users)
let user = JSON.parse(localStorage.getItem('loggedInUser'));

if (!user) {
    alert("Please login first");
    window.location.href = "login.html";
}


// 🛒 Display Cart Items
function displayCartItems() {
    let cartItems = document.getElementById('cart-items');
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let total = 0;

    // Empty cart handling
    if (cart.length === 0) {
        cartItems.innerHTML = "<h3>Your cart is empty 🛒</h3>";
        document.getElementById('total-price').innerText = "";
        return;
    }

    cartItems.innerHTML = cart.map((item, index) => {
        total += item.price;

        return `
            <div class="food-cards">
                <img src="${item.img}" alt="">
                <h3>${item.name} --- ₹${item.price}</h3>
                <button onclick="removeItem(${index})">Remove Item</button>
            </div>
        `;
    }).join("");   // 🔥 IMPORTANT

    document.getElementById('total-price').innerText = `Total Bill : ₹${total}/-`;
}

displayCartItems();


// ❌ Remove Single Item
function removeItem(id) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    let ans = confirm("Are you sure you want to remove this item?");
    if (ans) {
        cart.splice(id, 1);
        localStorage.setItem('cart', JSON.stringify(cart));
        displayCartItems();
    }
}


// 🧹 Clear Entire Cart
function clearCart() {
    let ans = confirm("Remove all items from cart?");
    if (ans) {
        localStorage.setItem('cart', JSON.stringify([]));
        displayCartItems();

        setTimeout(() => {
            window.location.href = 'index.html';
        }, 2000);
    }
}


// ✅ Checkout
function checkout() {
    alert("Thank You for ordering ❤️😊");

    localStorage.setItem('cart', JSON.stringify([]));
    displayCartItems();

    setTimeout(() => {
        window.location.href = 'index.html';
    }, 2000);
}