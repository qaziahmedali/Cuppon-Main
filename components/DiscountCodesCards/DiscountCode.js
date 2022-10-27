import React, { useState } from "react";
import styles from "../../styles/DiscountCode.module.css";
import Image from "next/image";
import Link from "next/link";
import Model from "../Model";
const DiscountCode = ({ cp }) => {
	const [showModel, setShowModel] = useState(false);
	console.log("cp", cp);
	console.log("cplength", cp.length);
	const handleModel = () => {
		setShowModel(true);
	};
	const closeModel = () => {
		setShowModel(false);
	};
	return (
		<>
			<div className="col-md-12">
				{Object.entries(cp).length === 0 ? (
					<h1
						style={{
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							fontSize: "30px",
						}}
					>
						No Record for this Category
					</h1>
				) : (
					cp?.map((items, i) => {
						const myLoader = ({ src }) => {
							return `${items.companyId.media}`;
						};

						return (
							<div
								key={i}
								className="rounded shadow p-3 my-4 bg-white dark:bg-gray-800 flex m-0"
							>
								<div className="p-2 inline-block align-top">
									<Link href={items.companyId.url}>
										<a
											type="button"
											target="_blank"
											className="no-underline tracked"
											data-bs-toggle="modal"
											data-bs-target="#id_24786"
											alt=""
										>
											<div
												style={{
													display: "inline-block",
													maxWidth: "100%",
													overflow: "hidden",
													position: "relative",
													boxSizing: "border-box",
													margin: "0px",
												}}
											>
												<Image
													loader={myLoader}
													src={`${items.companyId.media}`}
													alt="img"
													width={200}
													height={200}
													style={{
														position: "absolute",
														inset: "0px",
														boxSizing: "border-box",
														padding: "0px",
														border: "none",
														margin: "auto",
														display: "block",
														width: "200px",
														height: "200px",
														minWidth: "100%",
														maxWidth: "100%",
														minHeight: "100%",
														maxHeight: "100%",
													}}
												/>
											</div>
										</a>
									</Link>
								</div>
								<div className="px-3 py-2 md:flex w-full items-center justify-between">
									<div className="md:w-4/6 md:px-4 dark:text-white">
										<a
											type="button"
											className="no-underline text-black tracked"
											data-bs-toggle="modal"
											data-bs-target="#id_24786"
											alt={items.companyName}
										>
											<small className="text-muted">
												<font style={{ verticalAlign: "inherit" }}>
													<font style={{ verticalAlign: "inherit" }}>
														Valid until Saturday, July 31, 2021
													</font>
												</font>
											</small>
											<div className="font-semibold text-xl mt-1 mb-0">
												<font style={{ verticalAlign: "inherit" }}>
													<font style={{ verticalAlign: "inherit" }}>
														-{items.discountPercent}%
													</font>
												</font>
											</div>
										</a>

										<small className="block text-muted mb-2"></small>
										<small className="block text-muted mt-2">
											<font style={{ verticalAlign: "inherit" }}>
												<font style={{ verticalAlign: "inherit" }}>
													See more{" "}
												</font>
												<Link
													href={"/store/[store]"}
													as={`/store/${items.companyName}`}
												>
													<a className="text-green-700 hover:text-green-900 dark:text-white dark:hover:text-white text-underline fs-5">
														<font style={{ verticalAlign: "inherit" }}>
															{items.companyName} discount codes
														</font>
													</a>
												</Link>
											</font>
										</small>
									</div>
									<div className="md:w-2/6 mb-2 block">
										<Link href={items.companyId.url}>
											<a
												type="button"
												className="w-full modal-open no-underline text-black tracked"
												data-bs-toggle="modal"
												data-bs-target="#id_24786"
												alt="Button: -10% at Jotex"
												target="_blank"
												onClick={handleModel}
											>
												<div className="flex cursor-pointer group relative overflow-hidden">
													<div className="bg-green-600 group-hover:bg-green-700 dark:bg-blue-500 bg-gradient-to-l dark:from-blue-900 dark:group-hover:bg-blue-900 dark:text-white text-white py-2 px-4 rounded-l w-4/5 text-center">
														<font style={{ verticalAlign: "inherit" }}>
															<font style={{ verticalAlign: "inherit" }}>
																Show discount code
															</font>
														</font>
													</div>
													<div
														className={`transform ${styles.rotate_25} w-12 bottom-0 -top-2 lg:right-6  md:right-2  right-6 absolute group-hover:-translate-x-3 rounded bg-green-300 from-green-500  dark:bg-blue-500 bg-gradient-to-l dark:from-blue-900 dark:text-white h-12`}
													></div>
													<span className="pr-4 pl-0 z-10 rounded-r bg-yellow-50 items-center py-2 w-1/5 border">
														<font style={{ verticalAlign: "inherit" }}>
															{items.link.slice(-4, -1)}
														</font>
													</span>
												</div>
											</a>
										</Link>
									</div>
								</div>
								{showModel && (
									<Model
										closeModel={closeModel}
										companyName={items.companyName}
										discountPercent={items.discountPercent}
										Code={items.link}
										URL={items.companyId.url}
									/>
								)}
							</div>
						);
					})
				)}
			</div>
		</>
	);
};

export default DiscountCode;
