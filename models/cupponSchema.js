import mongoose from "mongoose";
const { ObjectId } = mongoose.Schema.Types;
const cupponSchema = new mongoose.Schema({
	companyId: {
		type: ObjectId,
		ref: "company",
	},
	companyName: {
		type: String,
		required: "true",
	},
	type: {
		type: String,
		required: true,
	},
	link: {
		type: String,
		required: false,
	},
	discountPercent: {
		type: String,
		required: false,
	},
	discountType: {
		type: String,
		required: false,
	},
	validDate: {
		type: Date,
		required: false,
	},
	categoryId: {
		type: ObjectId,
		ref: "category",
	},
});

export default mongoose.models.cuppon || mongoose.model("cuppon", cupponSchema);
