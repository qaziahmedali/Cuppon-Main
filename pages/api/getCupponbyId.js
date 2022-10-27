import initDB from "../../helper/initDB";
import Cuppon from "../../models/cupponSchema";
import Company from "../../models/companySchema";
import handler from "./middleware";
initDB();

const findCupponByName = async (req, res) => {
	await handler(req, res);
	const { store } = req.query;

	const store1 = store.charAt(0).toUpperCase() + store.slice(1);
	// console.log("Store", store1);
	const company = await Company.find({ name: store1 });

	// console.log("Company", company);
	// console.log("CompanyID", company[0]._id);
	// console.log("length", company.length);
	if (company.length > 0) {
		await Cuppon.find({ companyId: company[0]._id })
			.populate("companyId", "-v")
			.exec((err, data) => {
				console.log("Data is:", data);
				res.status(200).json(data);
			});
	} else {
		console.log("company doesn't exist");
	}
};
export default findCupponByName;
