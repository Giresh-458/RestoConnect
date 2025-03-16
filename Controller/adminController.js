const path = require('path');
const { active_user_count, total_user_count, restaurants_list } = require('../Model/admin_model');
const { restaurants, Restaurant } = require('../Model/Restaurents_model');

exports.getAdminDashboard = (req, res) => {
    res.render(path.join(__dirname, '..', 'Views', 'Admin_Dashboard'), { 
        active_user_count, total_user_count, restaurants_list 
    });
};

exports.postAddRestaurent = (req, res) => {
    if (!req.body.name || !req.body.location || !req.body.amount) {
        return res.status(400).json({ error: "Missing required fields!" });
    }

    restaurants.push(new Restaurant(req.body.name, '', 4, req.body.location, req.body.amount, new Date()));

    res.status(201).json({ message: "Restaurant added successfully!" });
};
