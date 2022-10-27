import initDB from "../../helper/initDB";
import Category from "../../models/categorySchema";
import Company from "../../models/companySchema";
import Cuppon from "../../models/cupponSchema";
import handler from "./middleware";
initDB();
const findCategory = async (req, res) => {
	switch (req.method) {
		case "GET":
			await getAllCategory(req, res);
			break;
		case "POST":
			await saveCategory(req, res);
			break;
	}
};
export default findCategory;

const getAllCategory = async (req, res) => {
	await handler(req, res);
	const { category } = req.query;
	console.log("category from server", category);
	try {
		const categories = await Category.find({ categoryName: category });
		console.log("categoury", categories[0]._id);
		Cuppon.find({ categoryId: categories[0]._id })
			.populate("categoryId", "-v")
			.populate("companyId", "-v")
			.exec((err, category) => {
				console.log("data", category);
				res.status(200).json(category);
			});
	} catch (error) {
		res.status(500).json(error);
	}
	// Category.find().then((category) => {
	// 	return res.status(200).json(category);
	// });
};

const saveCategory = async (req, res) => {
	await handler(req, res);
	const { categoryName } = req.body;
	console.log({
		categoryName,
	});
	const category = await Category.find({ categoryName });

	try {
		if (category.length > 0) {
			return res.status(422).json({ error: "Category Already Exist" });
		} else {
			const category = await new Category({
				categoryName,
			}).save();
			return res.status(200).json(category);
		}
	} catch (err) {
		res.status(500).json(err);
	}
};
