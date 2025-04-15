const mongoose = require("mongoose");
async function dbConnect() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/airesumebuilder");
    console.log("db conneted !");
  } catch (error) {
    console.log(error);
  }
}
module.exports = dbConnect;
