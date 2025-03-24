const path = require('path');


const Restaurant = require('../Model/Restaurents_model').Restaurant;
const Dish = require('../Model/Dishes_model_test').Dish;


exports.getMenu = async (req,res)=>{
    

    
    const id = req.params.restid;
    const rest = await Restaurant.find_by_id(id);

    let dishes = [];
    for(let i=0 ;i<rest.dishes.length;i++){    
    let tm_dishes = await Dish.find_by_id(rest.dishes[i]);
    dishes.push(tm_dishes);
    }
    
    res.render('menu',{ restaurant: {name:rest.name,location:rest.location,rest_id:id}, dishes: dishes })



}