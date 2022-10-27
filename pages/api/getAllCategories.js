import initDB from "../../helper/initDB";
import Category from "../../models/categorySchema";
import Company from "../../models/companySchema";
import handler from "./middleware";
initDB();

const getAllCategories = async (req, res) => {
	await handler(req, res);
	Category.find().then((category) => {
		return res.status(200).json(category);
	});
};

export default getAllCategories;
