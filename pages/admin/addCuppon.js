import React, { useState, Fragment, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import baseUrl from "../../helper/baseUrl";
toast.configure();

function AddCuppon() {
	const [companyData, setCompanyData] = useState([]);
	const [companyId, setCompanyId] = useState("");
	const [companyName, setCompanyName] = useState("Select Company");
	const [type, setType] = useState("");
	const [link, setLink] = useState("");
	const [discountPercent, setDiscountPercent] = useState("");
	const [discountType, setDiscountType] = useState([]);
	const [loading, setLoading] = useState(false);
	const [validDate, setValidDate] = useState(new Date());

	useEffect(() => {
		getCompany();
	}, []);
	const getCompany = async () => {
		const res = await fetch(`${baseUrl}/api/company`);
		const res2 = await res.json();
		console.log(res2);
		setCompanyData(res2);
	};
	const setCompany = async (e) => {
		setCompanyName(e.target.value);
		const filterData = companyData.filter(
			(word) => word.name === e.target.value
		);
		console.log("FilterDat", filterData);
		setCompanyId(filterData[0]?._id);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);
		console.log(companyId, companyName);
		const res = await fetch(`${baseUrl}/api/addCuppon`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				companyId,
				companyName,
				type,
				link,
				discountPercent,
				discountType,
			}),
		});
		const res2 = await res.json();
		if (res2.error) {
			toast.error(" Error: " + res2.error, {
				autoClose: 3000,
			});
			setLoading(false);
		} else {
			setLoading(false);
			toast.success(" Cuppon added successfully ...", {
				autoClose: 3000,
			});
		}
	};

	return (
		<div className="container my-12">
			<div className="leading-loose">
				<form
					className="p-10 bg-white rounded shadow-xl"
					onSubmit={(e) => handleSubmit(e)} //
				>
					<div className="inline-block relative w-full mt-4">
						<label className="block text-sm text-gray-600">
							Select Company
						</label>

						{companyData.length === 0 ? (
							<select
								className="block appearance-none w-full border text-gray-700 bg-gray-200 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
								// value={companyId}
								onChange={(e) => setCompany(e)}
							>
								<option disabled>---No Company is Present--- </option>
							</select>
						) : (
							<select
								className="block appearance-none w-full border text-gray-700 bg-gray-200 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
								// value={companyName}
								onChange={(e) => setCompany(e)}
							>
								<option defaultValue>Select Company Name</option>
								{companyData.map((item, i) => (
									<option key={i}>{item.name} </option>
								))}
							</select>
						)}

						<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
							<svg
								className="fill-current h-4 w-4"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
							>
								<path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
							</svg>
						</div>
					</div>

					<div className="inline-block relative w-full mt-4">
						<label className="block text-sm text-gray-600">Select Type</label>
						<select
							className="block appearance-none w-full border text-gray-700 bg-gray-200 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
							// value={type}
							onChange={(e) => {
								setType(e.target.value);
							}}
						>
							<option>----Select Type----</option>
							<option>Link</option>
							<option>Code</option>
						</select>
						<div className="inline-block relative w-full mt-4">
							{type === "Link" ? (
								<>
									<label className="block text-sm text-gray-600">
										Enter Redirect Link
									</label>
									<input
										className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
										id="redirectLink"
										name="redirectLink"
										type="text"
										placeholder="Enter redirect link here"
										value={link}
										onChange={(e) => {
											setLink(e.target.value);
										}}
										aria-label="Name"
									/>
								</>
							) : (
								<>
									<label className="block text-sm text-gray-600">
										Enter Code
									</label>
									<input
										className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
										id="redirectLink"
										name="redirectLink"
										type="text"
										placeholder="Enter Code here"
										value={link}
										onChange={(e) => {
											setLink(e.target.value);
										}}
										aria-label="Name"
									/>
								</>
							)}
						</div>
						<div className="inline-block relative w-full mt-4">
							<label className="block text-sm text-gray-600">
								Enter Discount Percent
							</label>
							<input
								className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
								id="discountPercent"
								name="discountPercent"
								type="text"
								placeholder="Enter discount percent here"
								value={discountPercent}
								onChange={(e) => {
									setDiscountPercent(e.target.value);
								}}
								aria-label="Name"
							/>
						</div>
						<div className="inline-block relative w-full mt-4">
							<label className="block text-sm text-gray-600">
								Enter Discount Type
							</label>
							<select
								className="block appearance-none w-full border text-gray-700 bg-gray-200 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
								// value={discountType}
								onChange={(e) => {
									setDiscountType(e.target.value);
								}}
							>
								<option disabled>Select Discount Type</option>
								<option>Free Shipping</option>
								<option>Gift</option>
								<option>Sale</option>
								<option>New</option>
							</select>
						</div>
						<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
							<svg
								className="fill-current h-4 w-4"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
							>
								<path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
							</svg>
						</div>
					</div>
					<div className="inline-block relative w-full mt-4">
						<label className="block text-sm text-gray-600">
							Enter Cuppon Valid Date
						</label>
						<input
							className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
							id="valid Date"
							name="valid Date"
							type="date"
							placeholder="Enter discount percent here"
							value={validDate}
							onChange={(e) => {
								setValidDate(e.target.value);
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
	);
}

export default AddCuppon;
