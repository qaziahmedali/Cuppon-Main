import initDB from "../../helper/initDB";
import Cuppon from "../../models/cupponSchema";
import Company from "../../models/companySchema";
import handler from "./middleware";
initDB();
const findCuppon = async (req, res) => {
	switch (req.method) {
		case "GET":
			await getAllCuppon(req, res);
			break;
		case "POST":
			await saveCuppon(req, res);
			break;
	}
};
export default findCuppon;

const getAllCuppon = async (req, res) => {
	await handler(req, res);
	Cuppon.find()
		.populate("companyId", "-v")
		.exec((err, data) => {
			res.status(200).json(data);
		});
};

const saveCuppon = async (req, res) => {
	await handler(req, res);
	const { companyId, companyName, type, link, discountPercent, discountType } =
		req.body;
	// console.log({
	// 	companyId,
	// 	companyName,
	// 	type,
	// 	link,
	// 	discountPercent,
	// 	discountType,
	// });
	const company = await Company.find({ name: companyName });
	// res.status(200).json(data);
	const categoryId = company[0].categoryId;

	try {
		if (
			!companyId ||
			!companyName ||
			!categoryId ||
			!type ||
			!link ||
			!discountPercent ||
			!discountType
		) {
			return res.status(422).json({ error: "Please add all the fields" });
		}

		const cuppon = await new Cuppon({
			companyId,
			companyName,
			type,
			link,
			discountPercent,
			discountType,
			categoryId,
		}).save();
		console.log("Cuppon:", cuppon);
		return res.status(200).json(cuppon);
	} catch (err) {
		res.status(500).json(err);
	}
};
