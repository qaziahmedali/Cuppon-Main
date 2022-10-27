import initDB from "../../helper/initDB";
import Admin from "../../models/adminSchema";
import jwt from "jsonwebtoken";
import handler from "./middleware";
initDB();

const login = async (req, res) => {
	await handler(req, res);

	const { JWT_SECRET } = process.env;
	const { email, password } = req.body;
	console.log(email, password, req.body);
	try {
		if (!email || !password) {
			return res.status(422).json({ error: "Please add all the fields" });
		}
		const admin = await Admin.findOne({ email });
		if (!admin) {
			return res.status(422).json({ error: "email doesn't exist" });
		}

		if (password === admin.password) {
			const token = jwt.sign({ adminId: admin._id }, JWT_SECRET);
			const { name } = admin;
			res.status(201).json({ token, admin: { name } });
		} else {
			return res.status(401).json({ error: "email or password is wrong" });
		}
	} catch (error) {
		console.log(error);
	}
};
export default login;
