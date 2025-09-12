
// server.js
const express = require('express');
const path = require('path');
const bodyparser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const { connectDB } = require('./util/database');

// Models
const RestaurantRequest = require('./Model/restaurent_request_model.js'); // ✅ Correct spelling
const { Restaurant } = require('./Model/Restaurents_model.js'); // ✅ Correct spelling

const app = express();

// Middleware
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
app.use(express.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(session({
    secret: 'session',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 1000 * 60 * 30 }
}));

// Routes & Controllers
const loginPage = require('./routes/loginPage.js');
const customerRouter = require('./routes/customer.js');
const adminRouter = require('./routes/adminroutes.js');
const ownerRouter = require('./routes/ownerRoutes.js');
const staffRouter = require('./routes/staffRouter.js');
const homepageController = require('./Controller/homePageController.js');
const menuController = require('./Controller/menuController.js');
const authentication = require('./authenticationMiddleWare.js');
const validation = require('./passwordAuth.js');

// Connect to MongoDB
connectDB();

// Logout route
app.get('/logout', (req, res) => {
    req.session.destroy(err => {
        if (err) console.log(err);
        res.redirect('/');
    });
});

// Use Routers
app.use('/loginPage', loginPage);
app.use('/customer', authentication('customer'), customerRouter);
app.use('/admin', authentication('admin'), adminRouter);
app.use('/owner', authentication('owner'), ownerRouter);
app.use('/staff', authentication('staff'), staffRouter);

// Home page
app.get('/', homepageController.getHomePage);
app.post('/', validation, homepageController.putHomePage);

// Menu page
app.get('/menu/:restid', authentication('customer'), menuController.getMenu);

// Restaurant request page
app.get("/create", (req, res) => {
    res.render("restaurantRequest");
});

app.post("/request", async (req, res) => {
    try {
        const { name, location, amount, owner_username, owner_password, date_joined, image, rating } = req.body;
        const restReq = new RestaurantRequest({ name, location, amount, owner_username, owner_password, date_joined, image, rating });
        await restReq.save();
        res.redirect("/loginPage");
    } catch (err) {
        console.error("Error saving restaurant request:", err);
        res.status(500).send("Internal Server Error");
    }
});

// API to get restaurant requests (for AJAX)
app.get('/api/restaurants', async (req, res) => {
  try {
    const restaurants = await Restaurant.find();
    res.json(restaurants); // must be JSON
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch restaurants" });
  }
});

// Start server
app.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});
