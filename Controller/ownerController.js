//data

let products = [];

let users = require('../Model/userRoleModel').users;
let restaurants = require('../Model/Restaurents_model').restaurants;


exports.getOwnerHomepage = (req, res) => {
    res.render("ownerHomepage");
};

exports.getDashboard = (req, res) => {
    let username = req.cookies.username;
    let restaurant = users.find(r => r.username == username).restaurantName;
    res.render("ownerDashboard", { restaurant });
};

exports.getMenuManagement = (req, res) => {
    let username = req.cookies.username;
    let rest = restaurants.find(r => r.name == users.find(r => r.username == username).restaurantName);
    let products = rest.dishes;
    res.render('menuManagement', {products  });
};



exports.addProduct = (req, res) => {
    const { name, category, price, status, imageUrl } = req.body;
    /*const newProduct = {
        id: Date.now(),
        name,
        category,
        price,
        status,
        imageUrl
    };*/
    //products.push(newProduct);

    let rest = restaurants.find(r => r.name == users.find(r => r.username == username).restaurantName);
    rest.crateAndAdd(name,  price, category, imageUrl);
    res.redirect('/owner');
};

exports.editProduct = (req, res) => {
    const { id } = req.params;
    const { name, category, price, status, imageUrl } = req.body;
    products = products.map(p => 
        p.id == id ? { ...p, name, category, price, status, imageUrl } : p
    );
    res.redirect('/owner');
};

exports.deleteProduct = (req, res) => {
    //products = products.filter(p => p.id != req.params.id);
    let username = req.cookies.username;
    let rest = restaurants.find(r => r.name == users.find(r => r.username == username).restaurantName);
    rest.removeDish(req.params.id);
    res.redirect('/owner/menuManagement');
};
