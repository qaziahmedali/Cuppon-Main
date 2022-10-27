import initDB from "../../helper/initDB";
import Company from "../../models/companySchema";
import handler from "./middleware";
initDB();
const findCompany = async (req, res) => {
	switch (req.method) {
		case "GET":
			await getAllCompany(req, res);
			break;
		case "POST":
			await saveCompany(req, res);
			break;
	}
};
export default findCompany;

const getAllCompany = async (req, res) => {
	await handler(req, res);
	await Company.find().then((company) => {
		console.log("Company", company);
		return res.status(200).json(company);
	});
};

const saveCompany = async (req, res) => {
	await handler(req, res);
	const { name, url, media, categories, categoryId, info, date } = req.body;
	if (!name || !url || !media || !categories || !date) {
		return res.status(422).json({ error: "Please add all the fields" });
	} else {
		const com = await Company.find({ name });

		try {
			if (com.length > 0) {
				return res.status(422).json({ error: "Company Name Already Exist" });
			} else {
				const company = await new Company({
					name,
					url,
					media,
					categories,
					categoryId,
					info,
					date,
				}).save();
				console.log("Response added:", req.body);
				return res.status(200).json(company);
			}
		} catch (err) {
			res.status(500).json(err);
			console.log("object3", err);
		}
	}
};
