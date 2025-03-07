import mongoose from "mongoose";
async function connectTodb() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/airesume");
    console.log("Db connect");
  } catch (error) {
    console.log("mongo db Error", error);
  }
}
export default connectTodb;
