const shortid = require('shortid');
const getDb = require('../util/database').getDb;

class Dish {
    constructor(name, price, description, image) {
        this.name = name;
        this.price = price;
        this.description = description;
        this.image = image;
        this._id = shortid.generate();
    }



  async  add_Dish(rest_id){
        let db = getDb();
        
       let a = await db.collection('Restaurant').updateOne({_id:rest_id},{$push: { dishes: this._id } })
       await db.collection('Dish').insertOne(this);
    }

   static async remove_Dish(rest_id,dish_id){

        let db = getDb();
        await db.collection('Restaurant').updateOne({_id:rest_id},{ $pull: { dishes: dish_id } });
        await db.collection('Dish').deleteOne({ _id: dish_id });
    }


    async  Update_Dish(dish_id){

        let db = getDb();
        await db.collection('Dish').updateOne({_id:dish_id},{$set:this});
    }

    static async find_all(){
        let db = getDb();
        let dishes = await db.collection('Dish').find({}).toArray();

        return dishes;
    }

    static async find_by_id(d_id){
        let db = getDb();
        let ret = await db.collection('Dish').findOne({_id:d_id});
        return ret;
    }

    static async find_my_name(fname){
        let db = getDb();
        let ret = await db.collection('Dish').findOne({name:fname});

        return ret;
    } 



}






exports.Dish = Dish;