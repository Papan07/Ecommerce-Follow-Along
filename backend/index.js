const express = require('express')
const app = express();

app.use("/", (request, response) => {
    try {
        response.status(200).send({msg:"Hello, World!"});
    }catch (error) {
        response.status(500).send({message: "error.message"});
    }
})

app.listen(8080, () => {
    try {
        console.log("Server is running on port 8080");
    }catch (error) {
        console.error("Error starting the server:", error.message);
    }
})