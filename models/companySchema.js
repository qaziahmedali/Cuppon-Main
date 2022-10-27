import mongoose from "mongoose";
const { ObjectId } = mongoose.Schema.Types;
const subSchema = mongoose.Schema({
	infoId: {
		type: String,
		required: true,
	},
	infoHeading: {
		type: String,
		required: true,
	},
	infoText: {
		type: String,
		required: true,
	},
});
const companySchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	url: {
		type: String,
		required: true,
	},
	media: {
		type: String,
		required: true,
	},
	categories: {
		type: String,
		required: true,
	},
	categoryId: {
		type: ObjectId,
		ref: "category",
	},
	info: {
		type: [subSchema],
		required: false,
	},

	date: {
		type: Date,
		required: true,
	},
});

export default mongoose.models.company ||
	mongoose.model("company", companySchema);
