const { customer,Person } = require('./Model/customer_model');


const {users,User} = require('./Model/userRoleModel');



let validate = (req,res,next)=>{


let {username:username,password:password,fullName:fullName} = req.body;


//console.log(fullName);
if(fullName){
    customer.push(new Person(username,'/images/benjamin-chambon-vRu-Bs27E2M-unsplash.jpg'));
    users.push(new User(username,'customer',null,password.toString().trim()));
    res.redirect('/loginPage');
    return;
}


let user = users.find(r => r.username == username);
if((user?.password || null) == (password.toString().trim())){
    next();
}
else{
    res.redirect('/loginPage');
}


}


module.exports = validate;