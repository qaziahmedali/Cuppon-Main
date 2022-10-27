import React from "react";
import DiscountCodesCards from "../components/DiscountCodesCards";
import baseUrl from "../helper/baseUrl";
const discountCode = (props) => {
	const { cuppon } = props;
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
					<DiscountCodesCards cp={cuppon} />
				</div>
			</main>
		</>
	);
};
export async function getServerSideProps() {
	const cpRes = await fetch(`${baseUrl}/api/addCuppon`);
	const cpData = await cpRes.json();
	console.log("cuppon", cpData);
	return {
		props: { cuppon: cpData }, // will be passed to the page component as props
	};
}
export default discountCode;
