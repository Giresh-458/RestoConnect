const { MongoClient } = require("mongodb");

const uri = "mongodb://127.0.0.1:27017"; 
const client = new MongoClient(uri);


let db;
 client.connect();
 db = client.db('test');
    





let getDb = ()=>{
    if(!db){
        return null;
    }
    else{
        return db;
    }

}


module.exports = {getDb};