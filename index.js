
const express = require('express');
const path = require('path');
const bodyparser = require('body-parser');
const cookieParser = require('cookie-parser');


const app = express();
app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());
app.use(cookieParser());
app.set('view engine','ejs');
app.set('Views','views');
app.use(express.static(path.join(__dirname,'public')));




app.use((req,res,next)=>{
    console.log(req.cookies);
    next();
})



const customer = require(path.join(__dirname,'routes','customer.js'));
const admin = require(path.join(__dirname,'routes','adminroutes.js'));
const loginPage = require(path.join(__dirname,'routes','loginPage.js'));
const menuController = require(path.join(__dirname,'Controller','menuController.js'))
const homepageController = require(path.join(__dirname,'Controller','homePageController.js'));


const menumanagement_router = require('./routes/menuManagementRoute');
const ownerDashboard = require('./routes/ownerDashboardRoute');
const ownerhomepage = require('./routes/ownerHomepageRoute');

const staffRouter = require('./routes/staffRouter');




app.get('/',homepageController.getHomePage);
app.post('/',homepageController.putHomePage);
app.get('/menu/:restnmae',menuController.getMenu)

app.use('/customer',customer);
app.use('/admin',admin);
app.use('/loginPage',loginPage);



app.use('/menu_man',menumanagement_router)
app.use('/ownerDashboard',ownerDashboard);
app.use('/ownerhomepage',ownerhomepage);


app.use('/staff',staffRouter);







app.listen(3000);

