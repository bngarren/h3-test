// To use the .env file, we use the dotenv module to load the values
// Have to give the dotenv config the relative path to .env for it to work properly
const path = require("path");
require("dotenv").config({
  path: path.resolve(__dirname, "../../.env"),
});

const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const cors = require("cors");
app.use(
  cors({
    origin: ["http://localhost:3000", "https://master--h3-test.netlify.app"],
    credentials: true,
    preflightContinue: true,
    allowedHeaders: ["Content-Type"],
  })
);
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization, Origin"
  );
  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }
  next();
});
app.options("*", cors());

const db = require("./db/db.js");

const h3 = require("h3-js");

app.get("/", async function (req, res) {
  db("resource")
    .select()
    .then((resources) => {
      res.json({ resources });
    });
});

// Let's accept a GeolocationPosition object from the client and return the H3 index
app.post("/scan", async function (req, res) {
  console.log("Server received: ", req.body);

  const h3Index = h3.geoToH3(req.body.latitude, req.body.longitude, 9);
  res.send(h3Index);
});

// start the server listening for requests
app.listen(process.env.PORT || 3001, () => console.log("Server is running..."));
