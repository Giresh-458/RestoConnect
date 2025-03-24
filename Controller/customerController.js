const path = require('path');

//dashboard data
const customer_model = require('../Model/customer_model');
const Restaurant = require('../Model/Restaurents_model').Restaurant;



//feedbackdata
let feedbacks = []; 

//orderandreservation_data
let orders = [];
let reservations = [];





//dashboards
exports.getCustomerDashboard = (req,res)=>{
    let data =  customer_model.get_user_function(req.session.username);
    res.render(path.join(__dirname,'..','Views','customerDashboard'),JSON.parse(JSON.stringify(data)));
};












//feed backs
exports.getFeedBack = (req, res) => {
    res.render('feedback');
};
exports.postSubmitFeedBack = (req, res) => {
    const feedbackText = req.body.feedback;
    res.redirect('/');
};














//order_and_reservation

exports.postOrderAndReservation = (req, res) => {
    let restaurantName;
    let cart;
    let rest_id;
    if(req.body.restaurant){
     restaurantName = req.body.restaurant; 
    rest_id = req.body.rest_id;
     cart= JSON.parse(req.body.order);
    req.session.temp_cart=cart;
    req.session.rest_name=restaurantName;
    req.session.rest_id = rest_id;
    }else{
    restaurantName=req.session.rest_name;
    cart = req.session.temp_cart;
    rest_id = req.session.rest_id;
    }
    res.render('orderReservation', { restaurantName, cart ,rest_id });
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
    //orders.push(newOrder);
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
    //reservations.push(newReservation);
    req.session.resevation = newReservation;
    res.redirect('/');
};





exports.getPayments = (req,res)=>{
res.render('payment',{bill_price:300});
}







exports.postPaymentsSuccess = (req,res)=>{
   
  
let username = req.session.username;
let user = customer_model.customer.find(r => r.name==username);



let rest_name = req.session.rest_name;
let rest_id = req.session.rest_id;
 let dishes  = [];
 //let rest = Restaurant.find_by_id(rest_id);
    let len = req.session.temp_cart.length;
    for(let i =0 ;i<len;i++){
        dishes.push(req.session.temp_cart[i].dish);
Restaurant.update(rest_id,'tasks',{id:req.session.tempOrder.id,name:req.session.temp_cart[i].dish});
}
user.add_order({ name: rest_name, items: dishes });

req.session.tempOrder=undefined;
req.session.temp_cart=undefined;
req.session.rest_name=undefined;
req.session.reservation = undefined;
req.session.rest_id = undefined;

res.redirect('/customer/feedback');

} 