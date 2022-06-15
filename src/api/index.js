// To use the .env file, we use the dotenv module to load the values
// Have to give the dotenv config the relative path to .env for it to work properly
const path = require("path");
require("dotenv").config({
  path: path.resolve(__dirname, "../../.env"),
});

const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());

const knexConfig = require("./db/knexfile");
//initialize knex
const knex = require("knex")(knexConfig[process.env.NODE_ENV]);

// define the first route
app.get("/", function (req, res) {
  res.send("<h1>Hello World!</h1>");
});

// start the server listening for requests
app.listen(process.env.PORT || 3001, () => console.log("Server is running..."));
