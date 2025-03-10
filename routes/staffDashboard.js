const express = require('express');
const router = express.Router();

let orders = [
    { id: 1, table: 5, item: "Pasta", status: "Pending" },
    { id: 2, table: 3, item: "Pizza", status: "In Progress" },
    { id: 3, table: 8, item: "Burger", status: "Served" }
];

let tables = [
    { number: 1, status: "Occupied" },
    { number: 2, status: "Available" },
    { number: 3, status: "Occupied" }
];

let inventory = [
    { name: "Tomatoes", quantity: 5 },
    { name: "Cheese", quantity: 2 },
    { name: "Bread", quantity: 10 }
];

let ordersData = {
    labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    values: [20, 35, 40, 50, 60]
};

let inventoryData = {
    labels: ["Tomatoes", "Cheese", "Bread"],
    values: [5, 2, 10]
};

router.get('/', (req, res) => {
    res.render('staffDashboard', { orders, tables, inventory, ordersData, inventoryData });
});

router.post('/update-order', (req, res) => {
    const { orderId, status } = req.body;
    orders = orders.map(order => order.id == orderId ? { ...order, status } : order);
    res.redirect('/dashboard');
});

module.exports = router;
