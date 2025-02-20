
const express = require('express');
const path = require('path');
const bodyparser = require('body-parser');


const app = express();
app.use(bodyparser.urlencoded({extended:false}));
app.set('view engine','ejs')
app.set('Views','views');
app.use(express.static('public'));





const customer = require(path.join(__dirname,'routes','customer.js'));
const admin = require(path.join(__dirname,'routes','adminroutes.js'));

app.use('/customer',customer);
app.use('/admin',admin);


app.listen(3000);

