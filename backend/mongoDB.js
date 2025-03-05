const mongoose = require('mongoose');

async function connect() {
    try {
       await mongoose.connect("mongodb+srv://papanns19:Papan%407890@cluster0.y0y9q.mongodb.net/")
    } catch (error) {
        console.log("Mongo db error: ", error);
    }
}

module.exports = connect;