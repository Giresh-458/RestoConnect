
const users = require('./Model/userRoleModel').users;

const auth_middleware = (role) =>{

    return (req,res,next) =>{

       
       
        if(!req.session.username){
           // console.log(req.cookies.username);
           return res.redirect('/loginPage');
        }

        let temp = users.find(r => r.username === req.session.username);

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
