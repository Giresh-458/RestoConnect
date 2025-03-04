const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Set the views folder (where .ejs files are stored)
app.set('views', path.join(__dirname, 'views'));

// Serve static files like CSS, images, JS from the public folder
app.use(express.static(path.join(__dirname, 'public')));

// Define a route for the home page
app.get('/', (req, res) => {
    res.send('Welcome to the Home Page!');
});

// Define a route for the menu page
// Define a route for the menu page
app.get('/menu', (req, res) => {
    // Restaurant data
    const restaurant = {
        name: 'Spicy Biryani House',
        location: 'Bangalore, India',
    };

    // Array of dishes
    const dishes = [
        {
            name: 'Biryani',
            price: 300,
            description: 'Delicious biryani made with spices and tender chicken.',
            image: 'biryani.jpg',
        },
        {
            name: 'Paneer Tikka',
            price: 250,
            description: 'Grilled paneer marinated in a spicy yogurt sauce.',
            image: 'paneer_tikka.jpg',
        },
        {
            name: 'Chicken Curry',
            price: 350,
            description: 'Rich and flavorful chicken curry with spices.',
            image: 'chicken_curry.jpeg',
        },
    ];

    // Render the menu.ejs file and pass the restaurant and dishes data
    res.render('menu', { restaurant: restaurant, dishes: dishes });
});


// app.get('/login', (req, res) => {


//     // Render the menu.ejs file and pass the restaurant and dish data to it
//     res.render('login');
// });

// Start the server
app.listen(port, () => {
    console.log( `Server is running on http://localhost:${port}`);
});
