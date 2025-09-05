const path = require('path');
const { active_user_count, total_user_count, restaurants_list } = require('../Model/admin_model');
const { Restaurant } = require('../Model/Restaurents_model');
const { Dish } = require('../Model/Dishes_model_test');


exports.getAdminDashboard = async (req, res) => {
    try {
        console.log("req.user:", req.user);
        // Fetch fresh restaurants list to ensure up-to-dinate data
        const restaurants = await Restaurant.findAll();
        console.log("Fetched restaurants:", restaurants);
        const formattedRestaurants = restaurants.map(r => ({
            name: r.name,
            location: r.location,
            amount: r.amount,
            date: r.date,
            _id: r._id,
            image: r.image,
        }));
        // Calculate total revenue for restaurants joined in the current month
        const now = new Date();
        const currentMonth = now.getMonth();
        const currentYear = now.getFullYear();
        const totalRevenue = restaurants.reduce((sum, r) => {
            const joinDate = new Date(r.date);
            if (joinDate.getMonth() === currentMonth && joinDate.getFullYear() === currentYear) {
                return sum + (r.amount || 0);
            }
            return sum;
        }, 0);

        // Fetch current admin profile
        const currentAdminUsername = req.user ? req.user.username : null;
        console.log("currentAdminUsername:", currentAdminUsername);
        let currentAdminProfile = null;
        if (currentAdminUsername) {
            currentAdminProfile = await User.findOne({ username: currentAdminUsername });
        }

        // Fetch all users except the current admin
        let users = [];
        if (currentAdminUsername) {
            users = await User.find({ username: { $ne: currentAdminUsername } });
        } else {
            users = await User.find({});
        }

        // Clear restaurantName for users with role 'customer'
        users = users.map(user => {
            if (user.role === 'customer') {
                user.restaurantName = '';
            }
            return user;
        });

        // Get dynamic total user count from database
        const totalUserCount = await User.countDocuments();

        res.render(path.join(__dirname, '..', 'views', 'Admin_Dashboard'), { 
            active_user_count,
            total_user_count: totalUserCount,
            restaurants_list: formattedRestaurants,
            users_list: users,
            current_admin: currentAdminProfile,
            totalRevenue
        });
    } catch (error) {
        console.error("Error in getAdminDashboard:", error);
        res.status(500).send("Internal Server Error");
    }
};

const { User } = require('../Model/userRoleModel');
const bcrypt = require('bcrypt');

exports.getAllUsers = async (req, res) => {
    try {
        const currentAdminUsername = req.user ? req.user.username : null;
        let users = [];
        if (currentAdminUsername) {
            users = await User.find({ username: { $ne: currentAdminUsername } });
        } else {
            users = await User.find({});
        }
        res.json(users);
    } catch (error) {
        console.error("Error in getAllUsers:", error);
        res.status(500).send("Internal Server Error");
    }
};

exports.getStatistics = async (req, res) => {
    try {
        const totalUsers = await User.countDocuments();
        const Restaurant = require('../Model/Restaurents_model').Restaurant;
        const totalRestaurants = await Restaurant.countDocuments();
        const restaurants = await Restaurant.find({});
        const totalRevenue = restaurants.reduce((sum, r) => sum + (r.amount || 0), 0);
        res.json({
            totalUsers,
            totalRestaurants,
            totalRevenue
        });
    } catch (error) {
        console.error("Error in getStatistics:", error);
        res.status(500).send("Internal Server Error");
    }
};

exports.deleteUser = async (req, res) => {
    try {
        const userId = req.params.id;
        await User.deleteOne({ _id: userId });
        res.redirect('/admin/dashboard');
    } catch (error) {
        console.error("Error in deleteUser:", error);
        res.status(500).send("Internal Server Error");
    }
};

exports.editUser = async (req, res) => {
    try {
        const userId = req.params.id;
        const { username, email, role, restaurantName, password } = req.body;
        if (!username || !role) {
            return res.status(400).json({ error: "Missing required fields!" });
        }

        let updateData = { username, email, role, restaurantName };

        if (password && password.trim() !== '') {
            const hashedPassword = await bcrypt.hash(password.trim(), 10);
            updateData.password = hashedPassword;
        }

        await User.updateOne(
            { _id: userId },
            { $set: updateData }
        );
        res.redirect('/admin/dashboard');
    } catch (error) {
        console.error("Error in editUser:", error);
        res.status(500).send("Internal Server Error");
    }
};

exports.editProfile = async (req, res) => {
    try {
        const currentAdminUsername = req.user ? req.user.username : null;
        if (!currentAdminUsername) {
            return res.redirect('/loginPage');
        }

        const { username, email, password } = req.body;
        if (!username || !email) {
            return res.status(400).send("Missing required fields");
        }

        let updateData = { username, email };

        if (password && password.trim() !== '') {
            const bcrypt = require('bcrypt');
            const hashedPassword = await bcrypt.hash(password.trim(), 10);
            updateData.password = hashedPassword;
        }

        await User.updateOne(
            { username: currentAdminUsername },
            { $set: updateData }
        );

        // Update session username if changed
        if (username !== currentAdminUsername) {
            req.session.username = username;
        }

        res.redirect('/admin/dashboard');
    } catch (error) {
        console.error("Error in editProfile:", error);
        res.status(500).send("Internal Server Error");
    }
};

exports.postAddRestaurent = async (req, res) => {
    try {
        if (!req.body.name || !req.body.location || !req.body.amount) {
            return res.status(400).json({ error: "Missing required fields!" });
        }
        const newRestaurant = new Restaurant({
            name: req.body.name,
            image: '',
            rating: 4,
            location: req.body.location,
            amount: req.body.amount,
            date: new Date()
        });
        await newRestaurant.save();

        // Create owner user for the restaurant
        const ownerUsername = req.body.owner_username || req.body.name.toLowerCase().replace(/\s/g, '') + '_owner';
        const ownerPassword = req.body.owner_password || 'defaultpassword'; // Should be changed later securely

        const newUser = new User({
            username: ownerUsername,
            email: req.body.owner_email || '',
            role: 'owner',
            restaurantName: req.body.name,
            rest_id: newRestaurant._id,
            password: ownerPassword
        });
        await newUser.save();

        res.redirect('/admin/dashboard');
    } catch (error) {
        console.error("Error in postAddRestaurent:", error);
        res.status(500).send("Internal Server Error");
    }
};

exports.postEditRestaurent = async (req, res) => {
    
    try {
        const id = req.params.id;
        const { name, location, amount } = req.body;
        if (!name || !location || !amount) {
            return res.status(400).json({ error: "Missing required fields!" });
        }
        await Restaurant.updateFull({ _id: id, name, location, amount });
        res.redirect('/admin/dashboard');
    } catch (error) {
        console.error("Error in postEditRestaurent:", error);
        res.status(500).send("Internal Server Error");
    }
};

exports.postDeleteRestaurent = async (req, res) => {
    try {
        const id = req.params.id;
        // Find the restaurant to get related dishes
        const restaurant = await Restaurant.find_by_id(id);
        if (restaurant) {
            // Delete all related dishes
            await Dish.deleteMany({ _id: { $in: restaurant.dishes } });
            // Delete all users (staff and owners) linked to this restaurant
            await User.deleteMany({ rest_id: id });
        }
        // Delete the restaurant
        await Restaurant.deleteOne({ _id: id });
        res.redirect('/admin/dashboard');
    } catch (error) {
        console.error("Error in postDeleteRestaurent:", error);
        res.status(500).send("Internal Server Error");
    }
};
