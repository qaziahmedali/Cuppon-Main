import { useRouter } from "next/dist/client/router";
import React, { useState, useEffect } from "react";
import baseUrl from "../../helper/baseUrl";
import cookie from "js-cookie";

const Login = () => {
	const [loading, setLoading] = useState(false);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const router = useRouter();
	let tokenExist;
	useEffect(() => {
		getToken();
	}, []);
	const getToken = () => {
		tokenExist = cookie.get("token");
		if (tokenExist !== undefined) {
			router.push("/admin/");
		}
	};
	const handleLogin = async (e) => {
		e.preventDefault();
		setLoading(true);
		const res = await fetch(`${baseUrl}/api/login/`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				email,
				password,
			}),
		});
		const res2 = await res.json();
		if (res2.error) {
			alert(res2.error);
		} else {
			cookie.set("token", res2.token);
			cookie.set("name", res2.admin.name);
			router.push("/admin/");
		}
	};
	return (
		<>
			<div className="w-1/3 m-auto bg-white shadow-md rounded px-8 my-8 pt-6 pb-8 mb-4 flex flex-col">
				<form onSubmit={(e) => handleLogin(e)}>
					<div className="mb-4">
						<label className="block text-grey-darker text-sm font-bold mb-2">
							Email
						</label>
						<input
							className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
							id="username"
							type="text"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							placeholder="Enter your email"
						/>
					</div>
					<div className="mb-6">
						<label className="block text-grey-darker text-sm font-bold mb-2">
							Password
						</label>
						<input
							className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3"
							id="password"
							type="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							placeholder="******************"
						/>
						{/* <p className="text-red text-xs italic">Please choose a password.</p> */}
					</div>
					<div className="flex items-center justify-between">
						<button
							type="submit"
							className="bg-blue-700 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
						>
							{loading === true ? (
								<i className="fa fa-spinner fa-spin"></i>
							) : (
								"Log In"
							)}
						</button>
					</div>
				</form>
			</div>
		</>
	);
};

export default Login;
