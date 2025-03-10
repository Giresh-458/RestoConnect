const express = require('express');
const path = require('path');
const router = express.Router();


const admincontroller = require('../Controller/adminController');



router.get('/dashboard',admincontroller.getAdminDashboard)


module.exports = router;
