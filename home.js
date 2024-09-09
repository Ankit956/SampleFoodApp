document.addEventListener('DOMContentLoaded', () => {
    const cartItems = [];
    const cartItemsList = document.getElementById('cart-items');
    const totalAmountDisplay = document.getElementById('total-amount');
    const menuSection = document.getElementById('menu');
    const homeSection = document.getElementById('home-section');
    const homeLink = document.getElementById('home-link');
    const menuLink = document.getElementById('menu-link');

    function updateCart() {
        cartItemsList.innerHTML = '';
        let totalAmount = 0;

        cartItems.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `${item.name} - ₹${item.price}`;
            cartItemsList.appendChild(li);
            totalAmount += item.price;
        });

        totalAmountDisplay.textContent = `Total: ₹${totalAmount}`;
    }

    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', () => {
            const foodItem = button.parentElement;
            const itemName = foodItem.querySelector('p').textContent.split(' - ')[0];
            const itemPrice = parseInt(foodItem.dataset.price);

            cartItems.push({ name: itemName, price: itemPrice });
            updateCart();
        });
    });

    // Navigation between Home and Menu
    menuLink.addEventListener('click', () => {
        homeSection.style.display = 'none';
        menuSection.style.display = 'block';
    });

    homeLink.addEventListener('click', () => {
        menuSection.style.display = 'none';
        homeSection.style.display = 'block';
    });
});
