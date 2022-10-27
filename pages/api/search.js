import initDB from "../../helper/initDB";
import Company from "../../models/companySchema";
import handler from "./middleware";
initDB();

const search = async (req, res) => {
	await handler(req, res);

	const { name } = req.query;
	var regex = new RegExp(name, "i");
	console.log("REQ", regex);
	try {
		if (regex) {
			const results = await Company.find({ name: regex });
			// res.status(200).json(result);
			console.log(results);
			res.statusCode = 200;
			res.setHeader("Content-Type", "application/json");
			res.end(JSON.stringify({ results }));
		} else {
			console.log("error");
		}
	} catch (error) {
		res.status(400).json(error);
	}
};
export default search;
