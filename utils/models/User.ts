import mongoose, { Schema } from "mongoose";


    const userSchema: Schema = new Schema({
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        // role: {
        //     type: String,
        //     default: "user",
        // },
        // createdAt: {
        //     type: Date,
        //     default: Date.now,
        // },
        // updatedAt: {
        //     type: Date,
        //     default: Date.now,
        // },
    });

    const User = mongoose.models.User || mongoose.model("User", userSchema);

    export default User;

