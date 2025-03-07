import express, { json } from "express";
import dotenv from "dotenv";
import connectTodb from "./db/db.js";
dotenv.config();
connectTodb();
const app = express();
app.use(express.json());

export default app;
