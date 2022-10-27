import React from "react";

function Contact() {
	return (
		<>
			<div className="flex justify-between">
				<div className="md:w-2/4">
					<h1 className="md:text-2xl text-lg font-bold dark:text-white">
						<font style={{ verticalAlign: "inherit" }}>
							<font style={{ verticalAlign: "inherit" }}>Contact Us</font>
						</font>
					</h1>
					<p>
						<font style={{ verticalAlign: "inherit" }}>
							<font style={{ verticalAlign: "inherit" }}>
								Do you have any questions about the content on Default?{" "}
							</font>
							<font style={{ verticalAlign: "inherit" }}>
								Are you interested in publishing a discount code for your online
								store?{" "}
							</font>
							<font style={{ verticalAlign: "inherit" }}>
								Do you have ideas for how Default can be even better?{" "}
							</font>
							<font style={{ verticalAlign: "inherit" }}>
								Contact us in the contact form on the right!
							</font>
						</font>
					</p>
					<p className="mt-5">
						<font style={{ verticalAlign: "inherit" }}>
							<font style={{ verticalAlign: "inherit" }}>
								Do you have questions regarding expired discount codes?{" "}
							</font>
							<font style={{ verticalAlign: "inherit" }}>
								Did you forget to activate the discount code?{" "}
							</font>
							<font style={{ verticalAlign: "inherit" }}>
								Then you must contact the online store yourself, as they have
								information about your order.{" "}
							</font>
							<font style={{ verticalAlign: "inherit" }}>
								Invoice, shipping or payment we can unfortunately not help with.
							</font>
						</font>
					</p>
				</div>
				<div className="md:w-1/4 offset-md-2">
					<form className="pb-4 pt-2 px-5 bg-white rounded shadow-lg">
						<div className="form-group">
							<label className="mt-4 mb-1 font-semibold block text-sm text-muted small">
								<font style={{ verticalAlign: "inherit" }}>
									<font style={{ verticalAlign: "inherit" }}>Your name *</font>
								</font>
							</label>
							<input
								type="text"
								className="py-2 px-2 border rounded w-full"
								required=""
								value=""
							/>
						</div>
						<div className="form-group">
							<label className="mt-4 mb-1 font-semibold block text-sm text-muted small">
								<font style={{ verticalAlign: "inherit" }}>
									<font style={{ verticalAlign: "inherit" }}>
										Your e-mail *
									</font>
								</font>
							</label>
							<div className="">
								<input
									type="email"
									className="py-2 px-2 border rounded w-full"
									value=""
								/>
							</div>
						</div>
						<div className="form-group">
							<label className="mt-4 mb-1 font-semibold block text-sm text-muted small">
								<font style={{ verticalAlign: "inherit" }}>
									<font style={{ verticalAlign: "inherit" }}>Subject *</font>
								</font>
							</label>
							<input
								type="text"
								className="py-2 px-2 border rounded w-full"
								value=""
							/>
						</div>
						<div className="form-group">
							<label className="mt-4 mb-1 font-semibold block text-sm text-muted small">
								<font style={{ verticalAlign: "inherit" }}>
									<font style={{ verticalAlign: "inherit" }}>Message *</font>
								</font>
							</label>
							<textarea
								className="py-2 px-2 border rounded w-full"
								placeholder="Your message to us"
								rows="7"
								cols="30"
								required=""
							></textarea>
						</div>
						<div
							type="button"
							className="bg-green-600 tracked hover:bg-green-700 dark:bg-blue-500 bg-gradient-to-l xl:px-8 dark:from-blue-900 dark:text-white w-full text-center py-2 text-white dark:hover:bg-blue-900 rounded shadow-lg cursor-pointer"
						>
							<font style={{ verticalAlign: "inherit" }}>
								<font style={{ verticalAlign: "inherit" }}>
									<input
										type="submit"
										className="bg-transparent"
										value="send a message"
									/>
								</font>
							</font>
						</div>
					</form>
				</div>
			</div>
		</>
	);
}

export default Contact;
