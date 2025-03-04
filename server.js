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
app.get('/menu', (req, res) => {
    // Restaurant and dish data that we will pass to the EJS file
    const restaurant = {
        name: 'Spicy Biryani House',
        location: 'Bangalore, India',
    };

    const dish = {
        name: 'Biryani',
        price: 300,
        description: 'Delicious biryani made with spices and tender chicken.',
        image: 'biryani.jpg',

    };
 

    // Render the menu.ejs file and pass the restaurant and dish data to it
    res.render('menu', { restaurant: restaurant, dish: dish });
});

// app.get('/login', (req, res) => {


//     // Render the menu.ejs file and pass the restaurant and dish data to it
//     res.render('login');
// });

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
