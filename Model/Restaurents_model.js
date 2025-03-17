
const shortid = require('shortid');
class Restaurant {
    constructor(name, image, rating, location,amount,date) {
        this.name = name;
        this.image = image;
        this.rating = rating;
        this.location = location;
        this.amount=amount;
        this.date = date || new Date();
        this.dishes = []; // Empty array to store dishes
        
        //added now can be deleted
        this.orders = [];
        this.reservations = [];
        this.tables=[];
        this.inventory = [];
        this.orderData = {
            labels:[],
            values:[]
        };
        this.inventoryData={
            labels:[],
            values:[]
        };
        this.tasks = [];
    }

    // Add a dish to the restaurant
    addDish(dish) {
        this.dishes.push(dish);
    }
    
    crateAndAdd(name, price, description, image){
        let temp = new Dish(name, price, description, image);
        this.dishes.push(temp);
    }

    // Remove a dish by name
    removeDish(id) {
        this.dishes = this.dishes.filter(dish => dish.id !== id);
    }

}

// Dish Class
class Dish {
    constructor(name, price, description, image) {
        this.name = name;
        this.price = price;
        this.description = description;
        this.image = image;
        this.id = shortid.generate();
    }
}

// Given restaurant data
const restaurantsData = [
    { name: "The Gourmet Spot", image: "/images/h1.jpeg", rating: 4.5, location: "Chennai", amount: 2500, date: "2025-03-01" },
    { name: "Spicy Delights", image: "/images/h1.jpeg", rating: 4.7, location: "Chennai", amount: 1800, date: "2025-02-28" },
    { name: "Urban Bites", image: "/images/h1.jpeg", rating: 4.3, location: "Chennai", amount: 1300, date: "2025-02-26" },
    { name: "Ocean Feast", image: "/images/h1.jpeg", rating: 4.8, location: "Tada", amount: 2200, date: "2025-02-22" },
    { name: "Grill House", image: "/images/h1.jpeg", rating: 4.6, location: "Hyderabad", amount: 2000, date: "2025-02-19" },
    { name: "Spicy Biryani House", image: "/images/h1.jpeg", rating: 4.6, location: "Bangalore", amount: 1700, date: "2025-02-18" },
];





//array creations
const restaurants = restaurantsData.map(data => new Restaurant(data.name, data.image, data.rating, data.location));




// Given dishes data
const dishesData = [
    { name: "Biryani", price: 300, description: "Delicious biryani with spices and tender chicken.", image: "biryani.jpg" },
    { name: "Paneer Tikka", price: 250, description: "Grilled paneer marinated in a spicy yogurt sauce.", image: "paneer_tikka.jpg" },
    { name: "Chicken Curry", price: 350, description: "Rich and flavorful chicken curry with spices.", image: "chicken_curry.jpeg" }
];

const SpicyBiryaniHouse = restaurants.find(r => r.name === "Spicy Biryani House");


if (SpicyBiryaniHouse) {
    dishesData.forEach(dish => SpicyBiryaniHouse.addDish(new Dish(dish.name, dish.price, dish.description, dish.image)));
}


const TheGourmetSpot = restaurants.find(r => r.name === "The Gourmet Spot");


if (TheGourmetSpot) {
    dishesData.forEach(dish => TheGourmetSpot.addDish(new Dish(dish.name, dish.price, dish.description, dish.image)));
}


const spicyDelights = restaurants.find(r => r.name === "Spicy Delights");

if (spicyDelights) {
    spicyDelights.addDish(new Dish("Andhra Chilli Chicken", 320, "Spicy and tangy Andhra-style chicken fry.", "chilli_chicken.jpg"));
    spicyDelights.addDish(new Dish("Hyderabadi Mutton Curry", 400, "Rich and spicy mutton curry cooked with traditional spices.", "mutton_curry.jpg"));
    spicyDelights.addDish(new Dish("Masala Dosa", 180, "Crispy dosa filled with spicy potato stuffing.", "masala_dosa.jpg"));
}

const urbanBites = restaurants.find(r => r.name === "Urban Bites");

if (urbanBites) {
    urbanBites.addDish(new Dish("Cheese Burger", 250, "Juicy beef patty with melted cheese and fresh veggies.", "cheese_burger.jpg"));
    urbanBites.addDish(new Dish("BBQ Chicken Pizza", 450, "Wood-fired pizza topped with BBQ chicken and mozzarella.", "bbq_pizza.jpg"));
    urbanBites.addDish(new Dish("Caesar Salad", 220, "Classic salad with lettuce, croutons, and Caesar dressing.", "caesar_salad.jpg"));
}


const oceanFeast = restaurants.find(r => r.name === "Ocean Feast");

if (oceanFeast) {
    oceanFeast.addDish(new Dish("Grilled Lobster", 800, "Fresh lobster grilled with garlic butter and herbs.", "grilled_lobster.jpg"));
    oceanFeast.addDish(new Dish("Prawn Curry", 550, "Rich coconut-based prawn curry with South Indian spices.", "prawn_curry.jpg"));
    oceanFeast.addDish(new Dish("Fish Tikka", 480, "Chargrilled fish fillets marinated in Indian spices.", "fish_tikka.jpg"));
}

const selectedRestaurant = restaurants.find(r => r.name === "The Gourmet Spot");
if (selectedRestaurant) {
    // Feed orders data
    selectedRestaurant.orders = [
        { id: 1, table: 5, item: "Pasta", status: "Pending" },
        { id: 2, table: 3, item: "Pizza", status: "In Progress" },
        { id: 3, table: 8, item: "Burger", status: "Served" }
    ];

    // Feed tables data
    selectedRestaurant.tables = [
        { number: 1, status: "Occupied" },
        { number: 2, status: "Available" },
        { number: 3, status: "Occupied" }
    ];

    // Feed inventory data
    selectedRestaurant.inventory = [
        { name: "Tomatoes", quantity: 5 },
        { name: "Cheese", quantity: 2 },
        { name: "Bread", quantity: 10 }
    ];

    // Feed ordersData for charting
    selectedRestaurant.orderData = {
        labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        values: [20, 35, 40, 50, 60]
    };

    // Feed inventoryData for charting
    selectedRestaurant.inventoryData = {
        labels: ["Tomatoes", "Cheese", "Bread"],
        values: [5, 2, 10]
    };

    // Feed tasks data
    selectedRestaurant.tasks = [
        { id: 1, name: "Table 5" },
        { id: 2, name: "Serve Drinks" }
    ];
}





exports.restaurants = restaurants;
exports.Restaurant =Restaurant;