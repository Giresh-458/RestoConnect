//data
let products = [];

exports.getOwnerHomepage = (req, res) => {
    res.render("ownerHomepage");
};

exports.getDashboard = (req, res) => {
    const restaurant = req.query.restaurant || "Default Restaurant";
    res.render("ownerDashboard", { restaurant });
};

exports.getMenuManagement = (req, res) => {
    res.render('menuManagement', { products });
};

exports.addProduct = (req, res) => {
    const { name, category, price, status, imageUrl } = req.body;
    const newProduct = {
        id: Date.now(),
        name,
        category,
        price,
        status,
        imageUrl
    };
    products.push(newProduct);
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
    products = products.filter(p => p.id != req.params.id);
    res.redirect('/owner');
};
