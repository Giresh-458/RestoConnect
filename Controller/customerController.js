const path = require('path');

//dashboard data
const customer_model = require('../Model/customer_model');
const restaurent_model = require('../Model/Restaurents_model');



//feedbackdata
let feedbacks = []; 

//orderandreservation_data
let orders = [];
let reservations = [];





//dashboards
exports.getCustomerDashboard = (req,res)=>{
    let data =  customer_model.get_user_function(req.cookies.username);
    res.render(path.join(__dirname,'..','Views','customerDashboard'),JSON.parse(JSON.stringify(data)));
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

exports.postOrderAndReservation = (req, res) => {
    const restaurantName = req.body.restaurant; 
    const cart = JSON.parse(req.body.order);
    req.session.temp_cart=cart;
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
    order_temp=newOrder;
    req.session.tempOrder=order_temp;
    orders.push(newOrder);


    res.redirect('/customer/payments');
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



exports.getPayments = (req,res)=>{
   // console.log(req);
res.render('payment',{bill_price:300});
}

exports.postPaymentsSuccess = (req,res)=>{
   
    
console.log(req.session.tempOrder);
console.log(req.session.temp_cart);
let username = req.cookies.username;

let user = customer_model.customer.find(r => r.name==username);

console.log(user , req.cookies.username);

let rest_name = req.session.tempOrder.restaurant;
let {dish:dish}  = req.session.temp_cart;
console.log(dish);
user.add_order({ name: rest_name, items:  [dish]});
req.session.destroy(err => {
    if (err) {
        console.log(err);
    } else {
        res.redirect('/');
    }
});

} 