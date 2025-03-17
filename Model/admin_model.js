
const sqlite3 = require('sqlite3').verbose();

let active_user_count = 34;
let total_user_count = 200;

let db = new sqlite3.Database(":memory:", (err) => {
    if (err) {
        console.error("Error opening database:", err.message);
    } else {
        db.run(
            `CREATE TABLE userstats (
                active_user_count INTEGER,
                total_user_count INTEGER
            )`,
            (err) => {
                if (err) console.error("Error creating table:", err.message);
                else {
                    
                    db.run(
                        `INSERT INTO userstats (active_user_count, total_user_count) VALUES (?, ?)`,
                        [active_user_count, total_user_count],
                        (err) => {
                            // console.log("hello");
                            if (err) console.error("Error inserting data:", err.message);
                        }
                    );
                }
            }
        );
    }
});

const getDb = (cb) => {
    if (!db) {
        console.error("Database not initialized!");
        return;
    }
    cb(db);
};

const restaurants_list = require('../Model/Restaurents_model').restaurants.map(r1 => ({
    name: r1.name,
    location: r1.location,
    amount: r1.amount,
    date: r1.date
}));

// Export properly using `module.exports`
module.exports = {
    active_user_count,
    total_user_count,
    restaurants_list,
    getDb
};
