import React, { useState } from "react";
import Link from "next/link";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// toast-configuration method,
// it is compulsory method.
toast.configure();

const Model = (props) => {
	const { closeModel, companyName, discountPercent, Code, URL } = props;

	function copyCode() {
		/* Get the text field */
		let copyText = document.getElementById("copy_24786");

		/* Select the text field */
		copyText.select();
		copyText.setSelectionRange(0, 99999); /* For mobile devices */

		/* Copy the text inside the text field */
		document.execCommand("copy");

		toast.success(copyText.value + " Copied...", {
			autoClose: 3000,
		});
		// alert("Copied the text: " + copyText.value);
	}

	return (
		<div>
			<div
				className="fixed z-40 inset-0 overflow-y-auto"
				aria-labelledby="modal-title"
				role="dialog"
				aria-modal="true"
			>
				<div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
					<div
						className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
						aria-hidden="true"
					></div>
					<span
						className="hidden sm:inline-block sm:align-middle sm:h-screen"
						aria-hidden="true"
					>
						&#8203;
					</span>

					<div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
						<div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
							<div className="sm:flex sm:items-start">
								<div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
									<div className="md:px-16 px-4 py-4 text-center">
										<p className="text-xl px-2 mt-0 py-4">
											<font style={{ verticalAlign: "inherit" }}>
												<font style={{ verticalAlign: "inherit" }}>
													-{discountPercent}% at Jotex
												</font>
											</font>
										</p>
										<div className="lh-lg text-xl modal-body">
											<div className="block mb-8 md:mb-4">
												<div className="mb-8">
													<div className="inline-flex gap-8 relative w-full">
														<input
															readOnly
															className="text-center w-full p-6 bg-yellow-50 border-2 border-dashed border-green-600 rounded"
															style={{ fontWeight: "bold", fontSize: "22px" }}
															value={Code}
															id="copy_24786"
														/>
														<div
															className="cursor-pointer shadow py-2 text-sm absolute md:right-8 right-4 self-center px-4 bg-green-600 text-white rounded"
															id="24786"
															onClick={() => {
																copyCode();
															}}
														>
															<font style={{ verticalAlign: "inherit" }}>
																<font style={{ verticalAlign: "inherit" }}>
																	Copy code
																</font>
															</font>
														</div>
													</div>
												</div>
											</div>
											<div className="block mb-8 md:mb-4">
												<Link href={URL}>
													<a
														target="_blank"
														className="text-green-700 hover:text-green-900 dark:text-white dark:hover:text-white text-underline fs-5 tracked"
														alt="Go to jotex"
														aria-label="Go to jotex"
													>
														<span>
															<font style={{ verticalAlign: "inherit" }}>
																Go to {companyName}&gt;
															</font>
														</span>
													</a>
												</Link>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
							<button
								type="button"
								onClick={closeModel}
								className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
							>
								Cancel
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Model;
