const express = require("express");
const mongoose = require("mongoose");
const dbConnect = require("./db/dbconnection");
const dotenv = require("dotenv");

dotenv.config();
const app = express();

dbConnect();

app.listen(process.env.PORT, function () {
  console.log("server is running on ", process.env.PORT);
});
