const path = require('path');
const {  restaurants_list ,getDb} = require('../Model/admin_model');
const { Restaurant } = require('../Model/Restaurents_model');


exports.getAdminDashboard = (req, res) => {
    res.render(path.join(__dirname, '..', 'Views', 'Admin_Dashboard'), { 
        active_user_count:rows[0].active_user_count, total_user_count:rows[0].total_user_count, restaurants_list:restaurants_list 
    });
}

exports.postAddRestaurent = (req, res) => {
    if (!req.body.name || !req.body.location || !req.body.amount) {
        return res.status(400).json({ error: "Missing required fields!" });
    }
    new Restaurant(req.body.name, '', 4, req.body.location, req.body.amount, new Date()).add_Restaurant();
  res.redirect('/admin/dashboard');
};
