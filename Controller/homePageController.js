
const path = require('path');

const restaurants_data = require('../Model/Restaurents_model').restaurants;
const users = require('../Model/userRoleModel').users;

exports.getHomePage = (req,res)=>{
  let login=true;
  if(req.cookies.username==null)
   login = false;

  const { city_option_home: loco, name_resaurent: name2 } = req.query;
  if(loco!=null)
  var arr = restaurants_data.filter(r => r.location.trim().toLowerCase() === loco.trim().toLowerCase() && r.name.trim().toLowerCase() === name2.trim().toLowerCase());
  else
  var arr = restaurants_data.filter(r => false);
if(req.cookie && req.cookie.username){
  login = true;
}


let pass = users.find(r => r.username == req.cookies.username);
if(pass!=null)
  pass = pass.role;

res.render(path.join(__dirname,'..','Views','home_page'),{arr,login:login,user:pass});
  };


 exports.putHomePage = (req,res)=>{

  res.cookie('csrftoken', 'ZXN5OKF3rYu7FWrmX3BvS0xaxVVkPvnQ', { httpOnly: true });
      res.cookie('username',req.body.username,{ httpOnly: true });
      

var arr = restaurants_data.filter(r => false);

let a = users.find(r => r.username == req.cookies.username);
if(a){
  a=a.role;
}


res.render(path.join(__dirname,'..','Views','home_page'),{arr,login:true,user:a});
};