
class Restaurant {
    constructor(name, image, rating, location,amount,date) {
        this.name = name;
        this.image = image;
        this.rating = rating;
        this.location = location;
        this.amount=amount;
        this.date = date || new Date();
        this.dishes = []; // Empty array to store dishes
    }

    // Add a dish to the restaurant
    addDish(dish) {
        this.dishes.push(dish);
    }

    // Remove a dish by name
    removeDish(dishName) {
        this.dishes = this.dishes.filter(dish => dish.name !== dishName);
        
    }

}

// Dish Class
class Dish {
    constructor(name, price, description, image) {
        this.name = name;
        this.price = price;
        this.description = description;
        this.image = image;
    }
}

// Given restaurant data
const restaurantsData = [
    { name: "The Gourmet Spot", image: "/images/gourmet.jpeg", rating: 4.5, location: "Chennai", amount: 2500, date: "2025-03-01" },
    { name: "Spicy Delights", image: "/images/spicy.jpeg", rating: 4.7, location: "Chennai", amount: 1800, date: "2025-02-28" },
    { name: "Urban Bites", image: "/images/urban.jpeg", rating: 4.3, location: "Chennai", amount: 1300, date: "2025-02-26" },
    { name: "Ocean Feast", image: "/images/ocean.jpeg", rating: 4.8, location: "Tada", amount: 2200, date: "2025-02-22" },
    { name: "Grill House", image: "/images/grill.jpeg", rating: 4.6, location: "Hyderabad", amount: 2000, date: "2025-02-19" },
    { name: "Spicy Biryani House", image: "/images/biryani.jpeg", rating: 4.6, location: "Bangalore", amount: 1700, date: "2025-02-18" },
    { name: "Spice Delight", image: "/images/spice.jpeg", rating: 4.2, location: "New York, NY", amount: 1200, date: "2025-02-20" },
    { name: "The Food Hub", image: "/images/foodhub.jpeg", rating: 4.0, location: "Los Angeles, CA", amount: 850, date: "2025-02-18" },
    { name: "Tasty Treats", image: "/images/tasty.jpeg", rating: 3.9, location: "Chicago, IL", amount: 950, date: "2025-02-15" },
    { name: "Gourmet Bites", image: "/images/gourmet_bites.jpeg", rating: 4.5, location: "Houston, TX", amount: 1500, date: "2025-02-10" },
    { name: "Savor Street", image: "/images/savor.jpeg", rating: 4.1, location: "San Francisco, CA", amount: 700, date: "2025-02-05" }
];
// Given dishes data
const dishesData = [
    { name: "Biryani", price: 300, description: "Delicious biryani with spices and tender chicken.", image: "biryani.jpg" },
    { name: "Paneer Tikka", price: 250, description: "Grilled paneer marinated in a spicy yogurt sauce.", image: "paneer_tikka.jpg" },
    { name: "Chicken Curry", price: 350, description: "Rich and flavorful chicken curry with spices.", image: "chicken_curry.jpeg" }
];

// Convert restaurant data into class instances
const restaurants = restaurantsData.map(data => new Restaurant(data.name, data.image, data.rating, data.location));


const SpicyBiryaniHouse = restaurants.find(r => r.name === "Spicy Biryani House");


if (SpicyBiryaniHouse) {
    dishesData.forEach(dish => SpicyBiryaniHouse.addDish(new Dish(dish.name, dish.price, dish.description, dish.image)));
}


exports.restaurants = restaurants;
