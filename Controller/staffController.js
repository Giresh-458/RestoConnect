

//Dashboard data

let orders = [
    { id: 1, table: 5, item: "Pasta", status: "Pending" },
    { id: 2, table: 3, item: "Pizza", status: "In Progress" },
    { id: 3, table: 8, item: "Burger", status: "Served" }
];

let tables = [
    { number: 1, status: "Occupied" },
    { number: 2, status: "Available" },
    { number: 3, status: "Occupied" }
];

let inventory = [
    { name: "Tomatoes", quantity: 5 },
    { name: "Cheese", quantity: 2 },
    { name: "Bread", quantity: 10 }
];

let ordersData = {
    labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    values: [20, 35, 40, 50, 60]
};

let inventoryData = {
    labels: ["Tomatoes", "Cheese", "Bread"],
    values: [5, 2, 10]
};


//HomePage Data
let tasks = [
    { id: 1, name: "Table 5" },
    { id: 2, name: "Serve Drinks" }
];


//Dashboard Methods

exports.getDashBoard  = (req, res) => {
    res.render('staffDashboard', { orders, tables, inventory, ordersData, inventoryData });
}

exports.postUpdateOrder = (req, res) => {
    const { orderId, status } = req.body;
    orders = orders.map(order => order.id == orderId ? { ...order, status } : order);
    res.redirect('/staff/Dashboard');
}


//HomePage Methods

exports.getHomePage = (req, res) => {
    res.render('staffHomepage', { tasks });
};

exports.postHomePageTask = (req, res) => {
    const newTask = { id: Date.now(), name: req.body.name };
    tasks.push(newTask);
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