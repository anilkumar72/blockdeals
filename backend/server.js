const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');
// const { MongoClient, ServerApiVersion } = require('mongodb');
// const client = require('./src/services/mongooseConnection'); // Import the MongoDB client instance


const app = express();
const port = 3001;
let corsOptions = {
    origin: ['http://localhost:3000',"52.89.214.238","34.212.75.30","54.218.53.128","52.32.178.7"],
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", async (req, res) => {
  console.log(client)
    res.json({message: "Welcome to application."});
});
app.post('/webhook', (req, res) => {
    // Get the payload from the request.
    const payload = req.body;
console.log(payload)
    // Do something with the payload.

    // Respond to the request.
    res.send('OK');
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
});