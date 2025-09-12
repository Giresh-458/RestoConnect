const path = require('path');
const Restaurant = require('../Model/Restaurents_model').Restaurant;
const { User } = require('../Model/userRoleModel');

exports.getHomePage = async (req, res) => {
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
    res.render('home_page', {
        arr,
        login,
        user: userRole
    });
};

exports.getRestReq=async (req,res)=>{
    res.render("restaurantRequest")
}

exports.postRestReq=async (req,res)=>{

 const { name, location, amount, owner_username, owner_password, date_joined } = req.body;
 let restreq = new restaurantReq({name, location, amount, owner_username, owner_password, date_joined});
 await restreq.save();

res.redirect("/loginPage");
};

exports.putHomePage = async (req, res) => {
    const user = await User.findOne({ username: req.session?.username });
    if (!user) {
        return res.render('login', {
            title: 'Log In',
            buttonText: 'Log In',
            toggleText: 'New user? Sign Up'
        });
    }
    let rest = await Restaurant.find();
    console.log("in page controller");
    if (user.role === "owner") {
        req.session.rest_id = user.rest_id;
        res.redirect('/owner/');
    } else if (user.role === "staff") {
        req.session.rest_id = user.rest_id;
        res.redirect('/staff/HomePage');
    } else if (user.role === "admin") {
        res.redirect('/admin/dashboard');
    } else {
        res.render('home_page', {
            arr: rest,
            login: true,
            user: user.role
        });
    }
};
