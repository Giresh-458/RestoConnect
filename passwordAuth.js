const { customer,Person } = require('./Model/customer_model');
const {users,User} = require('./Model/userRoleModel');
const bcrypt = require('bcrypt');


let validate = async (req,res,next)=>{


let {username:username,password:password,fullName:fullName} = req.body;


if(fullName){

    let chk =await User.findByname(username);
    if(chk!=null){
        res.send('error');
        return;
    }

    customer.push(new Person(username,'/images/benjamin-chambon-vRu-Bs27E2M-unsplash.jpg'));
    password = password.toString().trim();
    await new User(username,'customer',null,password,null).saveUser();
    res.redirect('/loginPage');
    return;
}


let user = await User.findByname(username);
if (!user) {
    console.log("User not found");
    return res.redirect('/loginPage');
}
console.log(user);
console.log(user.password,password.toString().trim());
let a= await bcrypt.compare(password.trim(),user.password);
console.log(a);
if(a){
    req.session.username = username;
    next();
}
else{
    res.redirect('/loginPage');
}


}


module.exports = validate;
