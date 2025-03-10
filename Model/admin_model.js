const { name } = require('ejs');





     active_user_count = 34;
     total_user_count = 200;
    const restaurants_list = require('../Model/Restaurents_model').restaurants;



exports.active_user_count=active_user_count;
exports.total_user_count=total_user_count;

exports.restaurants_list = restaurants_list.map(r1=> ({name:r1.name,location:r1.location,amount:r1.amount,date:r1.date}));



