import Link from "next/link";
function MoreDiscountCode() {
	return (
		<>
			<div className="mb-4">
				<div className="px-6 pt-4 pb-4 rounded-3 bg-white dark:bg-gray-800 dark:text-white">
					<h2 className="text-lg font-semibold mb-2">
						<font style={{ verticalAlign: "inherit" }}>
							<font style={{ verticalAlign: "inherit" }}>
								Want to see more discount codes?
							</font>
						</font>
					</h2>
					<div className="mb-3 text-sm">
						<font style={{ verticalAlign: "inherit" }}>
							<font style={{ verticalAlign: "inherit" }}>
								See more valid discount codes from the same category as Jotex by
								clicking the button below
							</font>
						</font>
					</div>
					<Link href="/categories">
						<a className="text-green-700 hover:text-green-900 dark:text-white dark:hover:text-white text-underline fs-5">
							<div
								type="button"
								className="bg-green-600 tracked hover:bg-green-700 dark:bg-blue-500 bg-gradient-to-l xl:px-8 dark:from-blue-900 dark:text-white w-full text-center py-2 text-white dark:hover:bg-blue-900 rounded shadow-lg cursor-pointer"
							>
								<font style={{ verticalAlign: "inherit" }}>
									<font style={{ verticalAlign: "inherit" }}>
										See more discount codes
									</font>
								</font>
							</div>
						</a>
					</Link>
				</div>
			</div>
		</>
	);
}

export default MoreDiscountCode;
