



const {restaurents} = require('../Model/Restaurents_model');
const user_model = require('../Model/userRoleModel'); 



//Dashboard Methods

exports.getDashBoard  = (req, res) => {
    
    const rest = restaurents.find(r => r.name ===  user_model.users.find(r => r.name == req.cookies.username));
    res.render('staffDashboard', {orders: rest.orders, tables:rest.tables, inventory:rest.inventory, ordersData:rest.orderData, inventoryData:rest.inventoryData });
}

exports.postUpdateOrder = (req, res) => {
    const { orderId, status } = req.body;
    const rest = restaurents.find(r => r.name ===  user_model.users.find(r => r.name == req.cookies.username));
    rest.orders = rest.orders.map(order => order.id == orderId ? { ...order, status } : order);
    res.redirect('/staff/Dashboard');
}


//HomePage Methods

exports.getHomePage = (req, res) => {
    const rest = restaurents.find(r => r.name ===  user_model.users.find(r => users.name == req.cookies.username));
    res.render('staffHomepage', { tasks:rest.tasks });
};

exports.postHomePageTask = (req, res) => {
    const newTask = { id: Date.now(), name: req.body.name };
    const rest = restaurents.find(r => r.name ===  user_model.users.find(r => users.name == req.cookies.username));
    rest.tasks.push(newTask);
    res.json({ success: true, task: newTask });
}

exports.deleteHomePageTasks = (req, res) => {
    const taskId = parseInt(req.params.id);
    const initialLength = tasks.length;
    tasks = tasks.filter(task => task.id !== taskId);

    if (tasks.length < initialLength) {
        res.json({ success: true });
    } else {
        res.status(404).json({ success: false, message: "Task not found" });
    }
}