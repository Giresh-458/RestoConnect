


class User {
    constructor(username, role, restaurantName = null, password) {
        this.username = username;
        this.role = role;
        this.restaurantName = role !== 'customer' ? restaurantName : null;
        this.password = password;
    }




    
    getUserInfo() {
        return {
            username: this.username,
            role: this.role,
            restaurantName: this.restaurantName
        };
    }
}


const admin = new User('adam','admin',null,'123');


const alex = new User('alex', 'customer', null,'123');
const john = new User('John', 'customer',null,'123');


const staff1 = new User('emma', 'staff', 'The Gourmet Spot', '123');
const staff2 = new User('liam', 'staff', 'The Gourmet Spot', '123');

const owner1 = new User('roy','owner','The Gourmet Spot','123');



const users = [admin,alex, john, staff1, staff2,owner1];






exports.users= users;
exports.User = User;