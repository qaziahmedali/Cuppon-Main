import { Fragment } from "react";
import Menu from "../../components/store/Menu";
import StoreInfo from "../../components/store/StoreInfo";
import ContactStore from "../../components/store/ContactStore";
import Shipping from "../../components/store/Shipping";
import SimilarShops from "../../components/store/SimilarShops";
import MoreDiscountCode from "../../components/store/MoreDiscountCode";
import baseUrl from "../../helper/baseUrl";

import DiscountCode from "../../components/DiscountCodesCards/";

const Store = ({ store }) => {
	console.log("Store", store);
	// console.log("Store1", store[0].companyId.info);
	return (
		<>
			{store ? (
				<>
					<div className="dark:bg-gray-800 md:pb-3 pb-1  dark:border-gray-800">
						<Menu Category={store[0].companyId} />
						<StoreInfo CompanyInfo={store[0].companyId} />
					</div>

					<div className="container m-auto px-4 md:px-0">
						<div className="flex flex-wrap mt-4">
							<div className="lg:w-9/12 w-full lg:pr-8 md:pr-8">
								<DiscountCode cp={store} />
							</div>
							<div className="lg:w-3/12 w-full">
								{store[0].companyId.info.map((item, i) => {
									return (
										<Fragment key={i}>
											<Shipping Item={item} />
										</Fragment>
									);
								})}
								<SimilarShops />
								<MoreDiscountCode />
							</div>
						</div>
					</div>
				</>
			) : (
				<h1>---No Cuppon Code in this Company ---</h1>
			)}
		</>
	);
};

export async function getServerSideProps({ params: { store } }) {
	// console.log("name", store);

	const res = await fetch(`${baseUrl}/api/getCupponbyId?store=${store}`);
	const data = await res.json();

	console.log("products:", data);
	return {
		props: { store: data }, // will be passed to the page component as props
	};
}
export default Store;
