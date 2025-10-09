
const path = require('path');
const Restaurant = require('../Model/Restaurents_model').Restaurant;
const { User } = require('../Model/userRoleModel');
const restaurantReq = require("../Model/restaurent_request_model")


exports.getHomePage = async (req, res) => {
    try {
        let login = req.session?.username ? true : false;
        const { city_option_home: loco, name_resaurent: name2 } = req.query;

        let query = {};

        if (loco) {
            query.location = { $regex: new RegExp(loco.trim(), 'i') };
        }
        if (name2) {
            query.name = { $regex: new RegExp(name2.trim(), 'i') };
        }

        let arr = await Restaurant.find(query);
        if (arr.length === 0) {
            arr = await Restaurant.find();
        }

        let userRole = await User.findOne({ username: req.session?.username });
        userRole = userRole?.role || null;
        const uniqueLocations = await Restaurant.distinct("location");
      
        res.render('home_page', {
            arr,
            login,
            user: userRole,
            city_option_home: loco || 'All'  ,
            uniqueLocations
        });
    } catch (err) {
        console.error("Error in getHomePage:", err);
        res.status(500).send("Internal Server Error");
    }
};




exports.getRestReq=async (req,res)=>{
    res.render("restaurantRequest")
}

exports.postRestReq=async (req,res)=>{

 const { name, location, amount, owner_username, owner_password, date_joined,email } = req.body;
 let restreq = new restaurantReq({name, location, amount, owner_username, owner_password, date_joined,email});
 await restreq.save();

res.redirect("/loginPage");
};

exports.putHomePage = async (req, res) => {
    try {
        const user = await User.findOne({ username: req.session?.username });
        if (!user) return res.redirect('/loginPage');

        if (user.role === "owner" || user.role === "staff") {
            req.session.rest_id = user.rest_id;
            const redirectUrl = user.role === "owner" ? '/owner/' : '/staff/HomePage';
            return res.redirect(redirectUrl);
        }

        if (user.role === "admin") return res.redirect('/admin/dashboard');

        // For customer, render homepage with all restaurants
        const rest = await Restaurant.find();
        const uniqueLocations = await Restaurant.distinct("location");
        res.render('home_page', { 
            arr: rest, 
            login: true, 
            user: user.role, 
            city_option_home: 'All',  
            name_resaurent: '' ,
            uniqueLocations        
        });
    } catch (err) {
        console.error("Error in putHomePage:", err);
        res.status(500).send("Internal Server Error");
    }
};
