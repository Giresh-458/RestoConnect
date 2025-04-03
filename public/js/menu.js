document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('menu').addEventListener('click', function(event) {
        const target = event.target;
        const index = target.dataset.index;
        
        if (!index) return;

        const cartButton = document.querySelector(`.cart_button[data-index="${index}"]`);
        const counter = document.querySelector(`.counter[data-index="${index}"]`);
        const itemCount = counter.querySelector('.item_count');

        if (target.classList.contains('cart_button')) {
            cartButton.style.display = 'none';
            counter.style.display = 'flex';
            itemCount.textContent = 1;
            counter.classList.add('active');
        } 

        if (target.classList.contains('increase')) {
            itemCount.textContent = parseInt(itemCount.textContent) + 1;
        }

        if (target.classList.contains('decrease')) {
            let count = parseInt(itemCount.textContent) - 1;
            itemCount.textContent = count;
            
            if (count === 0) {
                cartButton.style.display = 'inline-block';
                counter.style.display = 'none';
            }
        }
    });

    document.querySelector('.btn2').addEventListener('click', () => {
        const restaurantName = document.getElementById('restaurant_name').innerText;
        const order = [];

        document.querySelectorAll('.counter').forEach(counter => {
            const dishName = counter.dataset.dish;
            const quantity = parseInt(counter.querySelector('.item_count').textContent);
            
            
            if (quantity > 0) {
                order.push({ dish: dishName, quantity });
            }
        });

        if (order.length === 0) {
            alert('No items selected!');
            return;
        }

        document.getElementById('restaurantInput').value = restaurantName;
        document.getElementById('orderInput').value = JSON.stringify(order);
        document.getElementById('orderForm').submit();
    });
});