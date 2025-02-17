import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";


// Connect to MongoDB
// (
//     async () => {
//         try {
//             await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//             console.log("Connected to MongoDB");
//         } catch (error) {
//             console.error("Error connecting to MongoDB: ", error);
//             throw error;
//         }
//     }
// )()

const connectToMongoDB = async () => {
    try {
       const connectionInstance= await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(`Connected to MongoDB${connectionInstance.connection.host}`);
    } catch (error) {
        console.error("Error connecting to MongoDB: ", error);
        process.exit(1);
       
    }
}
export default connectToMongoDB;