const path = require('path');

const customer_model = require('../Model/customer_model');

let data =  customer_model.get_user_function('alex');





exports.getCustomerDashboard = (req,res)=>{
   
<<<<<<< HEAD
    res.render(path.join(__dirname,'..','Views','customerDashboard'),data);
=======
    res.render(path.join(__dirname,'..','Views','customerDashboards'),data);
>>>>>>> a119f15cde30005982c2b3c9f25dbe6769dc9b37
};
