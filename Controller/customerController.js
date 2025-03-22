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
    console.log(req.session.username);
    let data =  customer_model.get_user_function(req.session.username);
    console.log(data);
    res.render(path.join(__dirname,'..','Views','customerDashboard'),JSON.parse(JSON.stringify(data)));
};












//feed backs
exports.getFeedBack = (req, res) => {
    res.render('feedback');
};
exports.postSubmitFeedBack = (req, res) => {
    const feedbackText = req.body.feedback;
    
   /* if (!feedbackText.trim()) {
        return res.status(400).json({ success: false, message: "Feedback cannot be empty!" });
    }
    feedbacks.push({ id: Date.now(), text: feedbackText });
   res.json({ success: true, message: "Feedback submitted successfully!" });*/
    res.redirect('/');
};











//order_and_reservation

exports.postOrderAndReservation = (req, res) => {
    let restaurantName;
    let cart;
    if(req.body.restaurant){
     restaurantName = req.body.restaurant; 
     cart= JSON.parse(req.body.order);
    req.session.temp_cart=cart;
    req.session.rest_name=restaurantName;
    }else{
    restaurantName=req.session.rest_name;
    cart = req.session.temp_cart;
    }
    //console.log(req.session);
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
    let order_temp=newOrder;
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
res.render('payment',{bill_price:300});
}







exports.postPaymentsSuccess = (req,res)=>{
   
    
// console.log(req.session.tempOrder);
// console.log(req.session.temp_cart);
let username = req.session.username;
let user = customer_model.customer.find(r => r.name==username);



let rest_name = req.session.rest_name;
 let dishes  = [];
 let rest = restaurent_model.restaurants.find(r => r.name === rest_name);
    let len = req.session.temp_cart.length;
    for(let i =0 ;i<len;i++){
        dishes.push(req.session.temp_cart[i].dish);
rest.tasks.push({id:req.session.tempOrder.id,name:req.session.temp_cart[i].dish});
    }
user.add_order({ name: rest_name, items: dishes });

req.session.tempOrder=undefined;
req.session.temp_cart=undefined;
req.session.rest_name=undefined;

res.redirect('/customer/feedback');

} 