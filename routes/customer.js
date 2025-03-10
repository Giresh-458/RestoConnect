const express = require('express');

const app = express.Router();
const path  =require('path');



const customerdashboard = require('../Controller/customerController');

<<<<<<< HEAD
app.get('/customerDashboard',customerdashboard.getCustomerDashboard);
=======

app.get('/dashboard',customerdashboard.getCustomerDashboard);




//ojoj

>>>>>>> a119f15cde30005982c2b3c9f25dbe6769dc9b37

module.exports = app;