import mongoose from "mongoose";

export async function connect() {
	try {
		mongoose.connect(process.env.MONGO_URI!);
		mongoose.connection.on("connected", () => {
			console.log("Database connected");
		});

		mongoose.connection.on("error", (err) => {
			console.log("Database connection failed", err);
		});
	} catch (error: any) {
		console.log(error);
	}
}
