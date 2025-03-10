const express = require('express');

const app = express.Router();
const path  =require('path');



const customerdashboard = require('../Controller/customerController');

app.get('/customerDashboard',customerdashboard.getCustomerDashboard);

module.exports = app;