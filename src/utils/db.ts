import mongoose from "mongoose";
 
const { MONGODB_URI } = process.env;

const connect = async () => {
    if (mongoose.connections[0].readyState) return;
 
    try {
        await mongoose.connect(MONGODB_URI as string);
        console.log("Mongo Connection successfully established.");
    } catch (error) {
        throw new Error("Error connecting to Mongoose");
    }
};
 
export default connect;