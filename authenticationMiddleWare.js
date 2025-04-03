
const session = require('express-session');
const {User} = require('./Model/userRoleModel');

const auth_middleware = (role) =>{

    return async (req,res,next) =>{

       
       
        if(!req.session.username){
           // console.log(req.cookies.username);
           return res.redirect('/loginPage');
        }
        
        let temp = await User.findByname(req.session.username);
       
        if(temp==null){
           res.redirect('/loginPage');
        }
       else if(temp.role== role)
        {
            
            next();
        }
    }

}

module.exports = auth_middleware;
