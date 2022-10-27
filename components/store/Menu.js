import Link from "next/link";
function Menu({ Category }) {
	return (
		<>
			<div className="bg-yellow-50 dark:bg-gray-700 border-b dark:border-transparent py-3">
				<div className="container p-0">
					<div className="flex md:gap-8 text-sm px-2">
						<div className="cursor-pointer font-semibold hover:text-green-700 dark:text-white">
							<Link href="/">
								<a>
									<font style={{ verticalAlign: "inherit" }}>Home </font>
								</a>
							</Link>

							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-4 w-4 inline-block"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M9 5l7 7-7 7"
								></path>
							</svg>
						</div>
						<div className="cursor-pointer font-semibold hover:text-green-700 dark:text-white">
							<Link
								href="/category/[category]"
								as={`/category/${Category.categories}`}
							>
								<a>
									<font style={{ verticalAlign: "inherit" }}>
										{Category.categories}
									</font>
								</a>
							</Link>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-4 w-4 inline-block"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M9 5l7 7-7 7"
								></path>
							</svg>
						</div>
						<div className="dark:text-white">
							<font style={{ verticalAlign: "inherit" }}>
								<font style={{ verticalAlign: "inherit" }}>
									{Category.name}
								</font>
							</font>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Menu;
