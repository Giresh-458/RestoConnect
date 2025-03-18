const express = require('express');
const path = require('path');
const router = express.Router();


const admincontroller = require('../Controller/adminController');



router.get('/dashboard',admincontroller.getAdminDashboard);
 router.post('/add_restaurant',admincontroller.postAddRestaurent);


module.exports = router;
