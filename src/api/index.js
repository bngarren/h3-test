/* eslint-env es6 */
/* eslint-disable */

const express = require("express");
const app = express();

// define the first route
app.get("/", function (req, res) {
  res.send("<h1>Hello World!</h1>");
});

// start the server listening for requests
app.listen(process.env.PORT || 3001, () => console.log("Server is running..."));
