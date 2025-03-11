const express = require('express');
const router = express.Router();
const path  =require('path');




const customerController = require('../Controller/customerController');

router.get('/customerDashboard',customerController.getCustomerDashboard);

router.get('/feedback', customerController.getFeedBack);
router.post('/submit-feedback', customerController.postSubmitFeedBack);



router.get('/order_reservation',customerController.getOrderAndReservation );
router.post('/order_reservation/order', customerController.order);
router.post('/order_reservation/reservation',customerController.reservation);



module.exports = router;