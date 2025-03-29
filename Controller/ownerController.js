//data

let products = [];

let users = require('../Model/userRoleModel').users;
let Restaurant = require('../Model/Restaurents_model').Restaurant;
let Dish  = require('../Model/Dishes_model_test').Dish;


// exports.getOwnerHomepage = (req, res) => {
//     let username = req.cookies.username;
//     let restaurant = users.find(r => r.username == username).restaurantName;
//     res.render("ownerHomepage",{restaurant});
// };
exports.getOwnerHomepage = (req, res) => {
    let username = req.session.username;
    let restaurant = users.find(r => r.username == username).restaurantName;
    res.render("ownerHomepage", { restaurant:restaurant });
};

exports.getDashboard = (req, res) => {
    let username = req.session.username;
    let restaurant = users.find(r => r.username == username).restaurantName;
    res.render("ownerDashboard", { restaurant });
};

exports.getMenuManagement = async (req, res) => {
   
    let rest = await Restaurant.find_by_id(req.session.rest_id);
    for(let i=0 ;i<rest.dishes.length;i++){    
    let tm_dishes = await Dish.find_by_id(rest.dishes[i]);
    products.push(tm_dishes);
    }
    res.render('menuManagement', {products  });
};



exports.addProduct = (req, res) => {
    const { name, category, price, status, imageUrl } = req.body;
    new Dish(name,price,"good one",imageUrl).add_Dish(req.session.rest_id);
    res.redirect('/owner');
};

exports.editProduct = (req, res) => {
    const { id } = req.params;
   // console.log(req);
    const { name, category, price, status, imageUrl } = req.body;

   /* products = products.map(p => 
        p.id == id ? { ...p, name, category, price, status, imageUrl } : p
    );*/
    new Dish(name,price,"good one",imageUrl).Update_Dish(id);
    res.redirect('/owner');
};

exports.deleteProduct = (req, res) => {
    let username = req.session.username;
   /* let rest = restaurants.find(r => r.name == users.find(r => r.username == username).restaurantName);
    rest.removeDish(req.params.id);*/
    Dish.remove_Dish(req.session.rest_id,id);
    res.redirect('/owner/menuManagement');
};
