const express = require('express');
const app = express();
const connect = require('./mongoDB');

app.get('/', (req, res) => {
    try{
        res.status(200).send({message:"This is Ecommerce-code-along-backend"});

    }catch(error){
        res.status(500).send({message:"Internal server error"});
    }
});

app.listen(8000,async () => {
    try{
        await connect();
        console.log("server connected successfully");

    }catch(error){
        console.log("Server error: ", error);
    }
}); 