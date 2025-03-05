
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



let home_page_data ={

     restaurants_data : [
        {
          name: "The Gourmet Spot",
          image: "/images/h1.jpeg",
          rating: 4.5,
          location:"chennai"
        },
        {
          name: "Spicy Delights",
          image: "/images/h1.jpeg",
          rating: 4.7,
          location:"chennai"
        },
        {
          name: "Urban Bites",
          image: "/images/h1.jpeg",
          rating: 4.3,
          location:"chennai"
        },
        {
          name: "Ocean Feast",
          image: "/images/h1.jpeg",
          rating: 4.8,
          location: "tada"
        },
        {
          name: "Grill House",
          image: "/images/h1.jpeg",
          rating: 4.6,
          location: "hyderabad"
        }
      ]


}



app.get('/',(req,res)=>{
  var arr = home_page_data.restaurants_data.filter(r => true);
res.render(path.join(__dirname,'Views','home_page'),{arr});
});



app.post('/',(req,res)=>{

    const {city_option_home: loco,name_resaurent:name2} = req.body;
    console.log(loco);
    var arr = home_page_data.restaurants_data.filter(r => r.location.trim().toLowerCase() === loco.trim().toLowerCase() && r.name.trim().toLowerCase() === name2.trim().toLowerCase());

res.render(path.join(__dirname,'Views','home_page'),{arr});
});
    



app.use('/customer',customer);
app.use('/admin',admin);


app.listen(3000);

