import React from "react";
import Link from "next/link";
import baseUrl from "../helper/baseUrl";
const categories = ({ category }) => {
	console.log(category);
	return (
		<>
			<h1 className="md:text-2xl text-lg font-bold dark:text-white mt-8">
				<font style={{ verticalAlign: "inherit" }}>
					<font style={{ verticalAlign: "inherit" }}>All categories</font>
				</font>
			</h1>
			<p className="dark:text-white">
				<font style={{ verticalAlign: "inherit" }}>
					<font style={{ verticalAlign: "inherit" }}>
						Find discount codes and offers in different categories
					</font>
				</font>
			</p>
			<div className="md:flex flex-wrap my-8">
				{category.map((item, i) => (
					<div key={i} className="md:w-1/6 mb-4 px-2">
						<Link
							href={"/category/[category]"}
							as={`/category/${item.categoryName}`}
						>
							<a>
								<div className="bg-white hover:text-white hover:bg-green-700 dark:text-white dark:bg-gray-800 p-5 border dark:border-transparent rounded text-center cursor-pointer">
									<div className="m-0">
										<div className="h5 text-body fw-bold">
											<font style={{ verticalAlign: "inherit" }}>
												<font style={{ verticalAlign: "inherit" }}>
													{item.categoryName}
												</font>
											</font>
										</div>
									</div>
								</div>
							</a>
						</Link>
					</div>
				))}
			</div>
		</>
	);
};
export async function getServerSideProps(context) {
	const res = await fetch(`${baseUrl}/api/getAllCategories`);
	const data = await res.json();
	console.log(data);
	return {
		props: { category: data }, // will be passed to the page component as props
	};
}
export default categories;
