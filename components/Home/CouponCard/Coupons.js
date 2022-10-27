import React, { useState, Fragment, useEffect } from "react";
import Coupon from "./Coupon";
import baseUrl from "../../../helper/baseUrl";

const Coupons = () => {
	const [data, setData] = useState([]);
	useEffect(() => {
		getCompany();
	}, []);
	const getCompany = async () => {
		const cpRes = await fetch(`${baseUrl}/api/addCuppon`);
		const cpData = await cpRes.json();
		console.log("cuppon", cpData);
		setData(cpData);
	};
	return (
		<>
			{data.map((item, i) => (
				<Fragment key={i}>
					<Coupon data={item} />
				</Fragment>
			))}
		</>
	);
};

export default Coupons;
