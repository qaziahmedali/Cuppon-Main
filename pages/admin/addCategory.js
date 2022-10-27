import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "../../components/Admin/Header";
import baseUrl from "../../helper/baseUrl";
toast.configure();

function AddCategory() {
	const [categoryName, setCategoryName] = useState("");
	const [loading, setLoading] = useState(false);
	const handleSubmit = async (e) => {
		e.preventDefault();

		setLoading(true);
		const res = await fetch(`${baseUrl}/api/addCategory`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				categoryName,
			}),
		});
		const res2 = await res.json();
		if (res2.error) {
			setLoading(false);
			toast.error(" Error: " + res2.error, {
				autoClose: 3000,
			});
		} else {
			setCategoryName("");
			setLoading(false);
			toast.success(" Category added successfully ...", {
				autoClose: 3000,
			});
		}
	};

	return (
		<>
			<div className="container my-12">
				<div className="leading-loose">
					<form
						className="p-10 bg-white rounded shadow-xl"
						onSubmit={(e) => handleSubmit(e)} //
					>
						<div className="inline-block relative w-full mt-4">
							<label className="block text-sm text-gray-600">
								Enter Category
							</label>
							<input
								className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
								id="redirectLink"
								name="redirectLink"
								type="text"
								placeholder="Enter Category here"
								value={categoryName}
								onChange={(e) => {
									setCategoryName(e.target.value);
								}}
								aria-label="Name"
							/>
						</div>

						<div className="mt-6">
							<button
								className="px-4 py-1 text-white font-light tracking-wider bg-gray-900 rounded"
								type="submit"
								{...(loading && "disabled")}
							>
								{loading === true ? (
									<i className="fa fa-spinner fa-spin"></i>
								) : (
									"Submit"
								)}
							</button>
						</div>
					</form>
				</div>
			</div>
		</>
	);
}

export default AddCategory;
