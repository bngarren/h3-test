// To use the .env file, we use the dotenv module to load the values
// Have to give the dotenv config the relative path to .env for it to work properly
const path = require("path");
require("dotenv").config({
  path: path.resolve(__dirname, "../../.env"),
});

const CORS_ALLOWED_ORIGINS = [
  "http://localhost:3000",
  "https://master--h3-test.netlify.app",
];

const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const cors = require("cors");
app.use(
  cors({
    origin: CORS_ALLOWED_ORIGINS,
    credentials: true,
    preflightContinue: true,
    allowedHeaders: ["Content-Type"],
  })
);
app.options("*", cors());

const routes = require("./routes");

app.get("/", (req, res) => res.send("Backend is working!"));

app.use("/api", routes);

// start the server listening for requests
app.listen(process.env.PORT || 3001, () => console.log("Server is running..."));
