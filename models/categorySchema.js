import mongoose from "mongoose";
const categorySchema = new mongoose.Schema({
	categoryName: {
		type: String,
		required: true,
	},
});

export default mongoose.models.category ||
	mongoose.model("category", categorySchema);
