const path = require('path');



const Restaurant_model = require('../Model/Restaurents_model');

exports.getMenu = (req,res)=>{
    
    const name = req.params.restnmae;
    const rest = Restaurant_model.restaurants.find(r => r.name==name);
    dishes =rest.dishes;

    res.render('menu',{ restaurant: {name:rest.name,location:rest.location}, dishes: dishes })



}