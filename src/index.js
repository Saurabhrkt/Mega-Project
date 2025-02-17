import { connect } from "mongoose";
import connectToMongoDB from "./db/index.js";
import dotenv from "dotenv";
dotenv.config({
  path: "./env"
});  
connectToMongoDB();