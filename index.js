
const express = require('express');
const path = require('path');
const bodyparser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');



const app = express();
app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());
app.use(express.json());
app.use(cookieParser());
app.set('view engine','ejs');
app.set('views','views');
app.use(express.static(path.join(__dirname,'public')));
app.use(session({
    secret: 'session', // Keep this key secure
    resave: false,
    saveUninitialized: true
}));




const loginPage = require(path.join(__dirname,'routes','loginPage.js'));



const customer = require(path.join(__dirname,'routes','customer.js'));
const admin = require(path.join(__dirname,'routes','adminroutes.js'));
const menuController = require(path.join(__dirname,'Controller','menuController.js'))
const homepageController = require(path.join(__dirname,'Controller','homePageController.js'));
const ownerRouter = require('./routes/ownerRoutes');
const staffRouter = require('./routes/staffRouter');
const authentication = require('./authenticationMiddleWare.js');



//for clearing previous seted cookies



app.get('/logout',(req,res)=>{
    req.cookies.username = null;
    res.clearCookie('username');
    res.redirect('/');
})


app.use('/loginPage',loginPage);


app.get('/',homepageController.getHomePage);
app.post('/',homepageController.putHomePage);
app.get('/menu/:restnmae',authentication('customer'),menuController.getMenu)
app.use('/customer',authentication('customer'),customer);
app.use('/admin',authentication('admin'),admin);
app.use('/owner',authentication('owner'),ownerRouter);
app.use('/staff',authentication('staff'),staffRouter);







app.listen(3000);

