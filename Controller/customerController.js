const path = require('path');

const customer_model = require('../Model/customer_model');

let data =  customer_model.get_user_function('alex');





exports.getCustomerDashboard = (req,res)=>{
   
    res.render(path.join(__dirname,'..','Views','customerDashboards'),data);
};
