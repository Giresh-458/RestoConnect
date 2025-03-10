// document.addEventListener('DOMContentLoaded', function () {
//     // Dynamically attaching event listeners to each dish using its unique id
//     const dishes = document.querySelectorAll('.items');
    
//     dishes.forEach(function (dish) {
//         const cartButton = dish.querySelector('.cart_button');
//         const counter = dish.querySelector('.counter');
//         const itemCount = dish.querySelector('.counter span');
//         const increaseButton = dish.querySelector('.counter #increase');
//         const decreaseButton = dish.querySelector('.counter #decrease');
        
//         let count = 0;

//         // Function to handle cart button click
//         cartButton.addEventListener('click', function () {
//             cartButton.style.display = 'none';
//             counter.style.display = 'flex';
//             itemCount.textContent = count = 1;
//             counter.classList.add('active');
//         });

//         // Function to increase the count
//         increaseButton.addEventListener('click', function () {
//             count++;
//             itemCount.textContent = count;
//         });

//         // Function to decrease the count
//         decreaseButton.addEventListener('click', function () {
//             if (count > 0) {
//                 count--;
//                 itemCount.textContent = count;
//             }

//             if (count === 0) {
//                 cartButton.style.display = 'inline-block';
//                 counter.style.display = 'none';
//             }
//         });
//     });
// });



        // Define variables for elements
        const cartButton = document.getElementById('cart_button');
        const counter = document.getElementById('counter');
        const itemCount = document.getElementById('item_count');
        const increaseButton = document.getElementById('increase');
        const decreaseButton = document.getElementById('decrease');

        // Initialize the item count
        let count = 0;

        // Function to handle cart button click
        cartButton.addEventListener('click', function() {
            cartButton.style.display = 'none';
            counter.style.display = 'flex'; // Show the counter when "Add to Cart" is clicked
            itemCount.textContent = count = 1; // Set the initial count to 1
            counter.classList.add('active'); // Add active class to make the counter move up
        });

        // Function to increase the count
        increaseButton.addEventListener('click', function() {
            count++;
            itemCount.textContent = count;
        });

        // Function to decrease the count
        decreaseButton.addEventListener('click', function() {
            if (count > 0) {
                count--;
                itemCount.textContent = count;
            }

            // If count reaches 0, show the "Add to Cart" button again and hide the counter
            if (count === 0) {
                cartButton.style.display = 'inline-block'; // Show "Add to Cart" button
                counter.style.display = 'none'; // Hide the counter
            }
        });