



const Restaurant = require('../Model/Restaurents_model').Restaurant;
const user_model = require('../Model/userRoleModel'); 



//Dashboard Methods

exports.getDashBoard  = (req, res) => {
   
   let rest = Restaurant.find_by_id(req.session.rest_id);
    res.render('staffDashboard', {orders: rest.orders, tables:rest.tables, inventory:rest.inventory, ordersData:rest.orderData, inventoryData:rest.inventoryData });
}

exports.postUpdateOrder = (req, res) => {
    const { orderId, status } = req.body;

    let rest = Restaurant.find_by_id(req.session.rest_id);
    //rest.orders = rest.orders.map(order => order.id == orderId ? { ...order, status } : order);
    res.redirect('/staff/Dashboard');
}


//HomePage Methods

exports.getHomePage = async (req, res) => {
    let rest = await Restaurant.find_by_id(req.session.rest_id);
    res.render('staffHomepage', { tasks:rest.tasks });
};

exports.postHomePageTask = (req, res) => {
    const newTask = { id: Date.now(), name: req.body.name };
    let rest = Restaurant.find_by_id(req.session.rest_id);
    Restaurant.update(req.session.rest_id,'tasks',newTask);
   res.redirect('/staff/Homepage')
}

exports.deleteHomePageTasks = (req, res) => {
    const taskId = parseInt(req.params.id);
   

    let rest = Restaurant.find_by_id(req.session.rest_id);
    rest.tasks = rest.tasks.filter(task => task.id !== taskId);

    new Restaurant().update_full(req.session.rest_id);
        res.redirect('/staff/Dashboard');
}