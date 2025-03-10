const express = require('express');
const router = express.Router();

let orders = [];
let reservations = [];

router.get('/', (req, res) => {
    const restaurantName = "Awesome Restaurant"; 
    const cart = []; 
    res.render('order_reservation', { restaurantName, cart });
});

router.post('/order', (req, res) => {
    const { restaurant, specialRequests } = req.body;
    const newOrder = {
        id: Date.now(),
        restaurant,
        specialRequests,
        status: "Pending"
    };
    orders.push(newOrder);
    res.redirect('/');
});

router.post('/reservation', (req, res) => {
    const { restaurant, date, time, guests } = req.body;
    const newReservation = {
        id: Date.now(),
        restaurant,
        date,
        time,
        guests
    };
    reservations.push(newReservation);
    res.redirect('/');
});

module.exports = router;
