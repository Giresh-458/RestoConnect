const express = require('express');

const app = express.Router();
const path = require('path');



let cus_data = {

'dashboard':{


    //dashboard data
'name': 'alex',
'img_url':'/images/benjamin-chambon-vRu-Bs27E2M-unsplash.jpg',
'item_list':['cheese burger','fried rice','pizza','others'],
'restaurent_list':['5 star','4 star','3 star','other'],
'prev_order':[
    {
        name: "Spice Villa",
        items: ["Butter Chicken", "Naan", "Paneer Tikka", "Biryani"]
    },
    {
        name: "Ocean Delight",
        items: ["Grilled Salmon", "Fish Tacos", "Lobster Bisque", "Garlic Shrimp"]
    },
    {
        name: "Green Leaf Café",
        items: ["Veggie Wrap", "Quinoa Salad", "Avocado Toast", "Smoothie Bowl"]
    },
    {
        name: "BBQ Junction",
        items: ["Grilled Ribs", "Smoked Brisket", "BBQ Wings", "Pulled Pork"]
    },
    {
        name: "Pasta Paradise",
        items: ["Spaghetti Carbonara", "Lasagna", "Penne Arrabbiata", "Garlic Bread"]
    }
],

//dashboard data end
},

}



app.get('/dashboard',(req,res)=>{
   
res.render(path.join(__dirname,'..','Views','dashboards'),cus_data.dashboard);
});







module.exports = app;