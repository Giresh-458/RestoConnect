
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



let customers = [alex,john];

exports.get_user_function = function(name) {
    let user;
    
    user = customers.find(r => r.name == name);

    let topDishesData = user.give_topDishes();
    let topRestaurantsData = user.give_topRestaurents();

    return {
        name: user.name,
        img_url: user.img_url,
        prev_order:user.prev_orders,
        item_list: topDishesData.top3, 
        top_dishes_count: topDishesData.top3_cont,
        restaurent_list: topRestaurantsData.top3,
        top_restaurants_count: topRestaurantsData.top3_cont
    };
};

exports.customer = customers;
exports.Person =Person;