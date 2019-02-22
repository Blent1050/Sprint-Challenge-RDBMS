const express = require("express");
const cors = require("cors");

//database
const db = require("./data/dbConfig.js");
const server = express();

//Middleware
server.use(helmet());
server.use(express.json());
server.use(cors());

// ---- ROUTES ---- //
//GET
server.get("/", (req, res) => {
    res.send('Welcome to the home page!')
});


module.exports(server)