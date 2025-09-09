const express = require('express');
const path = require('path');
const bodyparser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const { connectDB } = require('./util/database'); // Import the Mongoose connection

const app = express();
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
app.use(express.json());
app.use(cookieParser());
app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
    secret: 'session',
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 1000 * 60 * 30 // Session expires after 30 minutes of inactivity
    }
}));

const loginPage = require(path.join(__dirname, 'routes', 'loginPage.js'));
const customer = require(path.join(__dirname, 'routes', 'customer.js'));
const admin = require(path.join(__dirname, 'routes', 'adminroutes.js'));
const menuController = require(path.join(__dirname, 'Controller', 'menuController.js'));
const homepageController = require(path.join(__dirname, 'Controller', 'homePageController.js'));
const ownerRouter = require('./routes/ownerRoutes.js');
const staffRouter = require('./routes/staffRouter.js');
const authentication = require('./authenticationMiddleWare.js');
const validation = require('./passwordAuth.js');


const restaurantReq = require("./Model/restaurent_request_model.js");


// Connect to MongoDB using Mongoose
connectDB();

// For clearing previously set cookies
app.get('/logout', (req, res) => {
    req.session.destroy(err => {
        if (err) {
            console.log(err);
        } else {
            res.redirect('/');
        }
    });
});

app.use('/loginPage', loginPage);
app.get('/', homepageController.getHomePage);
app.post('/', validation, homepageController.putHomePage);
app.get('/menu/:restid', authentication('customer'), menuController.getMenu);
app.use('/customer', authentication('customer'), customer);
app.use('/admin', authentication('admin'), admin);
app.use('/owner', authentication('owner'), ownerRouter);
app.use('/staff', authentication('staff'), staffRouter);
app.get("/create", (req, res) => {
    res.render("restaurantRequest");
});


app.post("/request",async (req,res)=>{

 const { name, location, amount, owner_username, owner_password, date_joined } = req.body;
 let restreq = new restaurantReq({name, location, amount, owner_username, owner_password, date_joined});
 await restreq.save();

res.redirect("/loginPage");
});


app.listen(3000, () => {
    console.log('http://localhost:3000');
});
