import React, { useState, Fragment, useEffect } from "react";
import Image from "next/image";
import baseUrl from "../../helper/baseUrl";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import InfoField from "../../components/create/infoField";
toast.configure();

function AddCompany() {
	const [name, setName] = useState("");
	const [url, setUrl] = useState("");
	const [media, setMedia] = useState("");
	const [categories, setCategories] = useState("");
	const [categoryId, setCategoryId] = useState("");
	const [info, setInfo] = useState([]);
	const [categoryData, setCategoryData] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		getCategory();
	}, []);
	const getCategory = async () => {
		const res = await fetch(`${baseUrl}/api/getAllCategories`);
		const res2 = await res.json();
		setCategoryData(res2);
	};

	const SetCategory = (e) => {
		setCategories(e.target.value);

		const cat = categoryData.filter(
			(word, i) => word.categoryName === e.target.value
		);

		setCategoryId(cat[0]._id);
		console.log("Cat", cat, "CategoryId", cat[0]._id);
	};
	const addInfo = () => {
		let oldInfo = [...info];
		let newInfo = {
			infoId: info.length + 1,
			infoHeading: "",
			infoText: "",
		};

		oldInfo.push(newInfo);
		setInfo(oldInfo);
	};

	const upInfoText = (index, value) => {
		let oldInfo = [...info];
		oldInfo[index].infoText = value;
		setInfo(oldInfo);
	};

	const upInfoHeading = (index, value) => {
		let oldInfo = [...info];
		oldInfo[index].infoHeading = value;
		setInfo(oldInfo);
	};

	const delInfo = (id) => {
		let oldInfo = [...info];
		var NewDataForDb = oldInfo.filter((task) => task.infoId !== id);
		setInfo(NewDataForDb);
	};

	const setDat = () => {
		var today = new Date(),
			date =
				today.getFullYear() +
				"-" +
				(today.getMonth() + 1) +
				"-" +
				today.getDate() +
				" " +
				today.getHours() +
				":" +
				today.getMinutes() +
				":" +
				today.getSeconds();
		return date;
	};
	const handleSubmit = async (e) => {
		e.preventDefault();

		setLoading(true);
		const media = await imageUpload();
		const date = setDat();
		const res = await fetch(`${baseUrl}/api/company`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				name,
				url,
				media,
				categories,
				categoryId,
				info,
				date,
			}),
		});
		const res2 = await res.json();
		console.log("object", res2);
		if (res2.error) {
			setLoading(false);
			toast.error("Error", res2.error, {
				autoClose: 3000,
			});
		} else {
			setLoading(false);
			toast.success("Added Successfully", {
				autoClose: 3000,
			});
		}
	};
	const imageUpload = async () => {
		const formData = new FormData();
		formData.append("file", media);
		formData.append("upload_preset", "mystore");
		formData.append("cloud_name", "ptg");
		const res = await fetch(
			"https://api.cloudinary.com/v1_1/ptg/image/upload",
			{
				method: "POST",
				body: formData,
			}
		);

		const res2 = await res.json();

		return res2.url;
	};
	const Loader = ({ src }) => {
		return `${media ? URL.createObjectURL(media) : ""}`;
	};
	return (
		<div className="container my-12">
			<div className="leading-loose">
				<div className="mt-2">
					<div className="py-2 bg-white px-2">
						<div className="max-w-md mx-auto rounded-lg overflow-hidden md:max-w-xl">
							<div className="md:flex">
								<div className="w-full p-3">
									<div className="relative border-dotted h-48 rounded-lg border-dashed border-2 border-blue-700 bg-gray-100 flex justify-center items-center">
										<div className="absolute">
											<div className="flex flex-col items-center">
												<i className="fa fa-folder-open fa-4x text-blue-700"></i>
												<span className="block text-gray-400 font-normal">
													Attach you files here
												</span>
											</div>
										</div>
										<input
											type="file"
											className="h-full w-full opacity-0"
											name=""
											accept="image/*"
											onChange={(e) => setMedia(e.target.files[0])}
										/>
										<div className="file-field input-field mr-10">
											<Image
												loader={Loader}
												src={media ? URL.createObjectURL(media) : "default"}
												className="responsive-img"
												width={100}
												height={100}
												alt=""
											/>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="mt-2">
					<label className="block text-sm text-gray-600">Name</label>
					<input
						className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
						id="name"
						name="name"
						type="text"
						placeholder="Name"
						value={name}
						onChange={(e) => {
							setName(e.target.value);
						}}
						aria-label="Name"
					/>
				</div>
				<div className="mt-2">
					<label className="block text-sm text-gray-600">Url</label>
					<input
						className="w-full px-5  py-4 text-gray-700 bg-gray-200 rounded"
						id="url"
						name="url"
						type="text"
						value={url}
						onChange={(e) => {
							setUrl(e.target.value);
						}}
						placeholder="Company Url"
						aria-label="Url"
					/>
				</div>

				<div className="inline-block relative w-full mt-2">
					<label className="block text-sm text-gray-600">Select category</label>
					<select
						className="block appearance-none w-full border text-gray-700 bg-gray-200 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
						value={categories}
						onChange={(e) => {
							SetCategory(e);
						}}
					>
						<option>Select Category</option>
						{categoryData.length === 0 ? (
							<option>---No category Defined---</option>
						) : (
							categoryData.map((item, i) => (
								<option key={i}>{item.categoryName}</option>
							))
						)}
					</select>
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

				<div className="mt-2">
					{info.map((data, index) => (
						<div key={index}>
							<InfoField
								Data={data}
								IT={upInfoText}
								IH={upInfoHeading}
								key={index}
								index={index}
								Del={delInfo}
							/>
						</div>
					))}

					<div className="flex flex-col float-right">
						<button onClick={() => addInfo()}>
							<i className="fa fa-plus-circle text-6xl text-green-500"></i>
						</button>
					</div>
				</div>

				<div className="mt-6">
					<button
						className="px-4 py-1 text-white font-light tracking-wider bg-gray-900 rounded"
						type="submit"
						onClick={(e) => handleSubmit(e)}
						{...(loading && "disabled")}
					>
						{loading === true ? (
							<i className="fa fa-spinner fa-spin"></i>
						) : (
							"Submit"
						)}
					</button>
				</div>
				{/* </form> */}
			</div>
		</div>
	);
}

export default AddCompany;
