import mongoose from "mongoose";

const {MONGO_DB} =  process.env

const connect = async () => {
    if (mongoose.connections[0].readyState) return;
 
    try {
        await mongoose.connect(MONGO_DB as string, );
        console.log("Mongo Connection successfully established.");
    } catch (error) {
        throw new Error("Error connecting to Mongoose");
    }
};
 
export default connect;