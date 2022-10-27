import mongoose, { connect } from "mongoose";

export default function initDB() {
	if (mongoose.connection.readyState === 1) {
		console.log("already connected");
		return;
	}
	mongoose.connect(process.env.MONGO_URI, {
		useUnifiedTopology: true,
		useNewUrlParser: true,
	});
	mongoose.connection.on("connected", () => {
		console.log("Welcome to Mongo");
	});
	mongoose.connection.on("Error", (err) => {
		console.log("Error", err);
	});
}
