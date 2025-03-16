

const users = require('./Model/userRoleModel').users;



let validate = (req,res,next)=>{




let {username:username,password:password} = req.body;


let user = users.find(r => r.username == username);

if(user.password==password.toString()){
    next();
}
else{
    res.redirect('/loginPage');
}


}


module.exports = validate;