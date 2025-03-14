const path = require('path');



const {active_user_count:active_user_count,total_user_count:total_user_count,restaurants_list:restaurents_list} = require('../Model/admin_model'); 


const restaurent = require('../Model/Restaurents_model');

exports.getAdminDashboard = (req,res)=>{
    //res.sendFile(path.join(__dirname,'..','Views','index.html'));
    res.render(path.join(__dirname,'..','Views','Admin_Dashboard'),{active_user_count,total_user_count,restaurents_list});
 };

 exports.postAddRestaurent = (req,res)=>{
    let restaurents = restaurent.restaurants;

    restaurents.push(new restaurent.Restaurant(req.body.name,'',4,req.body.location,req.body.amount,new Date));


 }