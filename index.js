
const express = require('express');
const path = require('path');
const bodyparser = require('body-parser');


const app = express();
app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.set('view engine','ejs')
app.set('Views','views');
app.use(express.static(path.join(__dirname,'public')));




const customer = require(path.join(__dirname,'routes','customer.js'));
const admin = require(path.join(__dirname,'routes','adminroutes.js'));
const loginPage = require(path.join(__dirname,'routes','loginPage.js'));
const menuController = require(path.join(__dirname,'Controller','menuController.js'))
const homepageController = require(path.join(__dirname,'Controller','homePageController.js'));
const feedbackRoutes = require('./routes/feedback');
const menumanagement_router = require('./routes/menuManagement');
const order_reservation = require('./routes/orderReservationRoute');
const ownerDashboard = require('./routes/ownerDashboardRoute');
const ownerhomepage = require('./routes/ownerHomepageRoute');
const staffDashboard = require('./routes/staffDashboard');
const staffHomepageRoute = require('./routes/staffHomepageRoute');



app.get('/',homepageController.getHomePage);
app.post('/',homepageController.putHomePage);
app.get('/menu/:restnmae',menuController.getMenu)




app.use('/customer',customer);
app.use('/admin',admin);
app.use('/loginPage',loginPage);
app.use('/feed_back',feedbackRoutes);
app.use('/menu_man',menumanagement_router)
app.use('order_reservation',order_reservation);
app.use('ownerDasboard',ownerDashboard);
app.use('/ownerhomepage',ownerhomepage);
app.use('staffDashboard',staffDashboard);
app.use('staffHomepage',staffHomepageRoute);







app.listen(3000);

