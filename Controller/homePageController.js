
const path = require('path');

const restaurants_data = require('../Model/Restaurents_model').restaurants;

exports.getHomePage = (req,res)=>{
    var arr = restaurants_data.filter(r => true);
  res.render(path.join(__dirname,'..','Views','home_page'),{arr});
  };


 exports.putHomePage = (req,res)=>{
    
    const {city_option_home: loco,name_resaurent:name2} = req.body;
    if(loco!=null)
    var arr = restaurants_data.filter(r => r.location.trim().toLowerCase() === loco.trim().toLowerCase() && r.name.trim().toLowerCase() === name2.trim().toLowerCase());
    else
    var arr = restaurants_data.filter(r => true);

res.render(path.join(__dirname,'..','Views','home_page'),{arr});
};