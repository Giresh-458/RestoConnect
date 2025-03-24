const path = require('path');
const Restaurant = require('../Model/Restaurents_model').Restaurant;
const users = require('../Model/userRoleModel').users;

exports.getHomePage = async (req, res) => {
    let login = req.session?.username ? true : false;
    const { city_option_home: loco, name_resaurent: name2 } = req.query;
    let arr = [];

    arr = await Restaurant.findAll();
    console.log(arr);
    if (loco && name2) {
        arr =arr.filter(r =>
            r.location.trim().toLowerCase() === loco.trim().toLowerCase() &&
            r.name.trim().toLowerCase() === name2.trim().toLowerCase()
        );
    } 


    let userRole = users.find(r => r.username === req.session?.username);
    res.render(path.join(__dirname, '..', 'Views', 'home_page'), {
        arr,
        login,
        user: userRole ? userRole.role : null
    });
};

exports.putHomePage = async (req, res) => {
   
    req.session.username = req.body.username;
    const user = users.find(r => r.username === req.body.username);

    if (!user) {
        return res.render('login', {
            title: 'Log In',
            buttonText: 'Log In',
            toggleText: 'New user? Sign Up'
        });
    }
    let rest = await  Restaurant.findAll();
    if (user.role === "owner") {
       req.session.rest_id = user.rest_id;
       res.redirect('/owner/');
    } else if (user.role === "staff") {
        const rest = rest.find(r => r.name === user?.restaurantName);
        req.session.rest_id = user.rest_id;
        res.render(path.join(__dirname, '..', 'Views', 'staffHomepage'), {
            tasks: rest?.tasks || []
        });
    } else if (user.role === "admin") {
        const { active_user_count, total_user_count, restaurants_list } = require('../Model/admin_model');
        res.render(path.join(__dirname, '..', 'Views', 'Admin_Dashboard'), {
            active_user_count, total_user_count, restaurants_list
        });
    } else {
        res.render(path.join(__dirname, '..', 'Views', 'home_page'), {
            arr:  rest,
            login: true,
            user: user.role
        });
    }
};
