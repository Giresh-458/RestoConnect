const path = require('path');

//dashboard data
const customer_model = require('../Model/customer_model');
let data =  customer_model.get_user_function('alex');

//feedbackdata
let feedbacks = []; 

//orderandreservation_data
let orders = [];
let reservations = [];





//dashboards
exports.getCustomerDashboard = (req,res)=>{
    res.render(path.join(__dirname,'..','Views','customerDashboard'),data);
};












//feed backs
exports.getFeedBack = (req, res) => {
    res.render('feedback');
};
exports.postSubmitFeedBack = (req, res) => {
    const feedbackText = req.body.feedback;
    if (!feedbackText.trim()) {
        return res.status(400).json({ success: false, message: "Feedback cannot be empty!" });
    }
    feedbacks.push({ id: Date.now(), text: feedbackText });
    res.json({ success: true, message: "Feedback submitted successfully!" });
    res.redirec('/');
};











//order_and_reservation
exports.getOrderAndReservation = (req, res) => {
    const restaurantName = "Awesome Restaurant"; 
    const cart = []; 
    res.render('orderReservation', { restaurantName, cart });
};


exports.order = (req, res) => {
    const { restaurant, specialRequests } = req.body;
    const newOrder = {
        id: Date.now(),
        restaurant,
        specialRequests,
        status: "Pending"
    };
    orders.push(newOrder);
    res.redirect('/');
};

exports.reservation =  (req, res) => {
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
};