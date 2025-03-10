
const express = require('express');
const path = require('path');
const bodyparser = require('body-parser');


const app = express();
app.use(bodyparser.urlencoded({extended:false}));
app.set('view engine','ejs')
app.set('Views','views');
app.use(express.static(path.join(__dirname,'public')));




const customer = require(path.join(__dirname,'routes','customer.js'));
const admin = require(path.join(__dirname,'routes','adminroutes.js'));
const loginPage = require(path.join(__dirname,'routes','loginPage.js'));
const menuController = require(path.join(__dirname,'Controller','menuController.js'))
const homepageController = require(path.join(__dirname,'Controller','homePageController.js'));



app.get('/',homepageController.getHomePage);
app.post('/',homepageController.putHomePage);
    

app.use('/loginPage',loginPage);


app.get('/menu/:restnmae',menuController.getMenu)



app.use('/customer',customer);
app.use('/admin',admin);


app.listen(3000);

