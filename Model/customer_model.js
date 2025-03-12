




class Person {

constructor(name,img_url){
this.name=name;
this.img_url=img_url;
this.prev_orders = [];
this.top_dishes = new Map();
this.top_restaurent=new Map();
this.cart = [];
}

add_order(order){
this.prev_orders.push(order);


this.top_restaurent.set(order.name, (this.top_restaurent.get(order.name) || 0) + 1);
order.items.forEach(element => {
    this.top_dishes.set(element,(this.top_dishes.get(element) || 0)+1);
});
}

give_topDishes(){

    let a = this.getTopItems(this.top_dishes);
    a.top3.push('others');
    a.top3Count.push(a.total-a.top3Count.reduce((sum,entry)=> sum+entry,0));

    return {top3:a.top3,top3_cont:a.top3Count};
}

give_topRestaurents()
{

    let a = this.getTopItems(this.top_restaurent);
    a.top3.push('others');
    a.top3Count.push(a.total-a.top3Count.reduce((sum,entry)=> sum+entry,0));

    return {top3:a.top3,top3_cont:a.top3Count};

}


getTopItems(map) {
    let sortedItems = [...map.entries()].sort((a, b) => b[1] - a[1]); 
    let top3 = sortedItems.slice(0, 3).map(entry => entry[0]); 
    let top3Count = sortedItems.slice(0, 3).map(entry => entry[1]); 
    let total = [...map.values()].reduce((acc, count) => acc + count, 0); 

    return { top3, top3Count, total };
}



}









const alex = new Person("Alex", "/images/benjamin-chambon-vRu-Bs27E2M-unsplash.jpg");
const john = new Person("John", "/images/benjamin-chambon-vRu-Bs27E2M-unsplash.jpg"); 

// **Adding orders for Alex**
alex.add_order({ name: "Spice Villa", items: ["Butter Chicken", "Naan", "Paneer Tikka"] });
alex.add_order({ name: "Ocean Delight", items: ["Grilled Salmon", "Fish Tacos"] });
alex.add_order({ name: "Spice Villa", items: ["Biryani", "Butter Chicken"] });
alex.add_order({ name: "BBQ Junction", items: ["Grilled Ribs", "Smoked Brisket"] });
alex.add_order({ name: "Spice Villa", items: ["Butter Chicken"] });

// **Adding orders for John (Dummy Data)**
john.add_order({ name: "Pasta Paradise", items: ["Lasagna", "Garlic Bread", "Penne Arrabbiata"] });
john.add_order({ name: "Green Leaf Café", items: ["Quinoa Salad", "Smoothie Bowl", "Avocado Toast"] });
john.add_order({ name: "Pasta Paradise", items: ["Spaghetti Carbonara", "Lasagna"] });
john.add_order({ name: "5 Star Dine", items: ["Steak", "Truffle Pasta"] });
john.add_order({ name: "Green Leaf Café", items: ["Veggie Wrap", "Quinoa Salad"] });



exports.get_user_function = function(name) {
    let user;
    
    if (name === 'alex') {
        user = alex;
    } else {
        user = john;
    }

    let topDishesData = user.give_topDishes();
    let topRestaurantsData = user.give_topRestaurents();

    return {
        name: user.name,
        img_url: user.img_url,
        prev_order:user.prev_orders,
        item_list: topDishesData.top3, // Top 3 dish names
        top_dishes_count: topDishesData.top3_cont, // Their respective counts
        restaurent_list: topRestaurantsData.top3, // Top 3 restaurant names
        top_restaurants_count: topRestaurantsData.top3_cont // Their respective counts
    };
};
