
const users = require('./Model/userRoleModel').users;

const auth_middleware = (role) =>{

    return (req,res,next) =>{

        let temp = users.find(r => r.username === req.cookies.username);
        if(temp==null){
            res.redirect('/loginPage');
        }
        if(temp.role==role)
        {
            next();
        }
        else{
            res.redirect('/');
        }
    }

}

module.exports = auth_middleware;
