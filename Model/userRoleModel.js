
let {getDb} = require('../util/database');
let db = getDb();
const bcrypt = require('bcrypt');


class User {
    constructor(username, role, restaurantName = null, password,rest_id = null) {
        this.username = username;
        this.role = role;
        this.restaurantName = role !== 'customer' || 'admin' ? restaurantName : null;
        this.rest_id = role !== 'customer' || 'admin' ? rest_id : null;
        this.password =bcrypt.hashSync(password,10);
    }

    static async  findByname(name){

        return await db.collection('User').findOne({username:name});
    }

    async saveUser(){

        await db.collection('User').insertOne(this);
        return;
    }


    static async  modify(obj){
        await db.collection('User').updateOne({username:obj.username},{$set:obj});
    }

    
    getUserInfo() {
        return {
            username: this.username,
            role: this.role,
            restaurantName: this.restaurantName
        };
    }
}





exports.User = User;