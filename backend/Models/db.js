const mongoose = require('mongoose');

const mongo_url = process.env.MONGO_CONN;

mongoose.connect(mongo_url)
    .then(() => {
        console.log("MongoDB is connected...");
    }).catch(
        (err) => {
            console.log('MongoDB is connection error: ', err);
        }
    )
