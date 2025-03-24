

let {getDb} = require('../util/database');
let db = getDb();


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
        this._id = shortid.generate();
        
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



    async add_Restaurant(){
        await db.collection('Restaurant').insertOne(this);
    }

    static async find_by_id(rest_id){

        let ret = await db.collection('Restaurant').findOne({_id:rest_id});
        return ret;
    }
    
    static async findAll(){

        let ret = await db.collection('Restaurant').find({}).toArray();
        return ret;

    }

    static async update(id, field, value) {
         await db.collection("Restaurant").updateOne(
          { _id: id },
          { $push: { [field]: value } }
        );
      }

      async update_full(id){
        await db.collection("Restaurant").updateOne({_id:id},{$set:this});
      }


}





exports.Restaurant =Restaurant;