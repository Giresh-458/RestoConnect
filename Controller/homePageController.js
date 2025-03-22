const path = require('path');
const restaurants_data = require('../Model/Restaurents_model').restaurants;
const users = require('../Model/userRoleModel').users;

exports.getHomePage = (req, res) => {
    let login = req.session?.username ? true : false;
    const { city_option_home: loco, name_resaurent: name2 } = req.query;
    let arr = [];

    
    if (loco && name2) {
        arr = restaurants_data.filter(r =>
            r.location.trim().toLowerCase() === loco.trim().toLowerCase() &&
            r.name.trim().toLowerCase() === name2.trim().toLowerCase()
        );
    } else if (login) {
        arr = restaurants_data; // Load all restaurants if logged in and no search filters
    }

    if(arr.length==0){
        arr =  restaurants_data.filter(r => true);

    }

    let userRole = users.find(r => r.username === req.session?.username);
    res.render(path.join(__dirname, '..', 'Views', 'home_page'), {
        arr,
        login,
        user: userRole ? userRole.role : null
    });
};

exports.putHomePage = (req, res) => {
    
   /* res.cookie('csrftoken', 'ZXN5OKF3rYu7FWrmX3BvS0xaxVVkPvnQ', {
        httpOnly: true,
        secure: true,
        sameSite: 'Strict'
    });*/

    //res.cookie('username', req.body.username, { httpOnly: true });
    req.session.username = req.body.username;

    const user = users.find(r => r.username === req.body.username);
    if (!user) {
        return res.render('login', {
            title: 'Log In',
            buttonText: 'Log In',
            toggleText: 'New user? Sign Up'
        });
    }

    if (user.role === "owner") {
       // res.render(path.join(__dirname, '..', 'Views', 'ownerHomepage'));
       res.redirect('/owner/');
    } else if (user.role === "staff") {
        const rest = restaurants_data.find(r => r.name === user?.restaurantName);
        res.render(path.join(__dirname, '..', 'Views', 'staffHomepage'), {
            tasks: rest?.tasks || []
        });
    } else if (user.role === "admin") {
        const { active_user_count, total_user_count, restaurants_list } = require('../Model/admin_model');
        //console.log(restaurants_list);
        res.render(path.join(__dirname, '..', 'Views', 'Admin_Dashboard'), {
            active_user_count, total_user_count, restaurants_list
        });
    } else {
        res.render(path.join(__dirname, '..', 'Views', 'home_page'), {
            arr: restaurants_data,
            login: true,
            user: user.role
        });
    }
};
