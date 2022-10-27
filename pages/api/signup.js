import initDB from "../../helper/initDB";
import Admin from "../../models/adminSchema";
import handler from "./middleware";
initDB();

const signup = async (req, res) => {
	await handler(req, res);

	const { name, email, password } = req.body;
	console.log("Data", name, email, password);
	try {
		if (!name || !email || !password) {
			return res.status(422).json({ error: "Please add all the fields" });
		}
		const admin = await Admin.findOne({ email });
		if (admin) {
			return res.status(422).json({ error: "email already exist" });
		}
		await new Admin({
			name,
			email,
			password,
		}).save();
		res.status(200).json({ message: "signup success you can login now" });
	} catch (err) {
		console.log(err);
	}
};
export default signup;
