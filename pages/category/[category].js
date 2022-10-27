import React from "react";
import DiscountCodesCards from "../../components/DiscountCodesCards";
import baseUrl from "../../helper/baseUrl";
const Category = (props) => {
	const { category } = props;
	console.log(category);
	return (
		<>
			<main className="container m-auto my-8">
				<h1 className="md:text-2xl text-lg font-bold dark:text-white">
					<font style={{ verticalAlign: "inherit" }}>
						<font className="" style={{ verticalAlign: "inherit" }}>
							The best discount codes
						</font>
					</font>
				</h1>
				<p className="dark:text-white">
					<font style={{ verticalAlign: "inherit" }}>
						<font style={{ verticalAlign: "inherit" }}>
							We have collected the best discount codes in the list below.
						</font>
					</font>
				</p>
				<div className="col-lg-9 row mt-4">
					<DiscountCodesCards cp={category} />
				</div>
			</main>
		</>
	);
};
export async function getServerSideProps({ params: { category } }) {
	// console.log("name", store);

	const res = await fetch(`${baseUrl}/api/addCategory?category=${category}`);
	const data = await res.json();

	console.log("category:", data);
	return {
		props: { category: data }, // will be passed to the page component as props
	};
}

export default Category;
