


class User {
    constructor(username, role, restaurantName = null) {
        this.username = username;
        this.role = role;
        this.restaurantName = role !== 'customer' ? restaurantName : null;
    }




    
    getUserInfo() {
        return {
            username: this.username,
            role: this.role,
            restaurantName: this.restaurantName
        };
    }
}


const admin = new User('adam','admin');


const alex = new User('alex', 'customer');
const john = new User('John', 'customer');


const staff1 = new User('emma', 'staff', 'The Gourmet Spot');
const staff2 = new User('liam', 'staff', 'The Gourmet Spot');

const owner1 = new User('roy','owner','The Gourmet Spot');



const users = [admin,alex, john, staff1, staff2,owner1];






exports.users= users;