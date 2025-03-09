const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.send('Welcome to the Home Page!');
});

app.get('/menu', (req, res) => {

    const restaurant = {
        name: 'Spicy Biryani House',
        location: 'Bangalore, India',
    };

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

    res.render('menu', { restaurant: restaurant, dishes: dishes });
});


app.get('/login', (req, res) => {
    res.render('login', {
        title: 'Log In',
        buttonText: 'Log In',
        toggleText: 'New user? Sign Up'
    });
});

app.get('/payments', (req, res) => {
    const bill_price = 500; 
    res.render('payment', { bill_price: bill_price });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
