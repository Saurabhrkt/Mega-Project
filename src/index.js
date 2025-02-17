import { connect } from "mongoose";
import connectToMongoDB from "./db/index.js";
import dotenv from "dotenv";
dotenv.config({
  path: "./env"
});  
connectToMongoDB()
.then(()=>{

  app.on("error", (err)=>{
    console.error("Express error: ", err);
  })
  app.listen(process.env.PORT||8000,()=>{
    console.log(`Server is running on port: ${process.env.PORT||8000}`);
  })
})
.catch((err)=>{
  console.error("Error connecting to MongoDB: ", err);
  process.exit(1);
})
