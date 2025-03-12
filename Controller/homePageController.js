
const path = require('path');

const restaurants_data = require('../Model/Restaurents_model').restaurants;

exports.getHomePage = (req,res)=>{
  let login = false;
  const { city_option_home: loco, name_resaurent: name2 } = req.query;
  if(loco!=null)
  var arr = restaurants_data.filter(r => r.location.trim().toLowerCase() === loco.trim().toLowerCase() && r.name.trim().toLowerCase() === name2.trim().toLowerCase());
  else
  var arr = restaurants_data.filter(r => true);
if(req.cookie && req.cookie.username){
  login = true;
}

res.render(path.join(__dirname,'..','Views','home_page'),{arr,login:login});
  };


 exports.putHomePage = (req,res)=>{

  res.cookie('csrftoken', 'ZXN5OKF3rYu7FWrmX3BvS0xaxVVkPvnQ', { httpOnly: true });
      res.cookie('username',req.body.username,{ httpOnly: true });
      

var arr = restaurants_data.filter(r => true);
res.render(path.join(__dirname,'..','Views','home_page'),{arr,login:true});
};