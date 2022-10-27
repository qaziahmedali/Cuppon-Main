import React, { useState } from "react";
import styles from "../../../styles/Coupon.module.css";
import Image from "next/image";
import Link from "next/link";

import Model from "../../Model";

const Coupon = (props) => {
	const { data } = props;
	const [showModel, setShowModel] = useState(false);

	const handleModel = () => {
		setShowModel(true);
	};

	const closeModel = () => {
		setShowModel(false);
	};
	const myLoader = ({ src }) => {
		return `${data.companyId.media}`;
	};
	return (
		<>
			<div className="mt-6 xl:w-1/4 lg:w-1/3 md:w-1/2 w-full text-center px-2 mb-4">
				<div className="rounded-3 shadow px-8 py-4 bg-white dark:bg-gray-800">
					<div className="w-100 py-2 block">
						<Link href={data.companyId.url}>
							<a
								type="button"
								className="text-decoration-none"
								data-bs-toggle="modal"
								data-bs-target="#id_24786"
								target="_blank"
							>
								<div className={styles.coupons}>
									<div className={styles.couponDiv}>
										<Image
											loader={myLoader}
											src={`${data.companyId.media}`}
											// className={styles.resImg}
											width={100}
											height={100}
											alt=""
											aria-hidden="true"
											role="presentation"
										/>
									</div>
								</div>
							</a>
						</Link>
						<a
							type="button"
							className="block text-black no-underline text-truncate text-decoration-none"
						>
							<small className="dark:text-white">
								Valid Until Saturday, July 31, 2021
							</small>
							<div className="font-semibold text-xl truncate mt-1 mb-4 dark:text-white">
								-{data.discountPercent}%
							</div>
						</a>
						<Link href={data.companyId.url}>
							<a
								type="button"
								target="_blank"
								className="w-full modal-open no-underline text-black tracked"
								alt="Knapp: -10% hos Jotex"
								onClick={handleModel}
							>
								<div className="col-md-12 p-0 mb-2">
									<div className="flex cursor-pointer group relative overflow-hidden">
										<div className="bg-green-600 group-hover:bg-green-700 dark:bg-blue-500 bg-gradient-to-l dark:from-blue-900 dark:group-hover:bg-blue-900 dark:text-white text-white py-2 px-4 rounded-l w-4/5 text-center">
											Show Discount Code
										</div>
										<div
											className={`transform ${styles.rotate_25} w-12 bottom-0 -top-2 lg:right-6  md:right-2  right-6 absolute group-hover:-translate-x-3 rounded bg-green-300 from-green-500  dark:bg-blue-500 bg-gradient-to-l dark:from-blue-900 dark:text-white h-12`}
										></div>
										<span className="pr-4 pl-0 z-10 rounded-r bg-yellow-50 items-center py-2 w-1/5 border">
											{data.link.slice(-4, -1)}
										</span>
									</div>
								</div>
							</a>
						</Link>
						<small className="dark:text-white">
							See more ...
							<Link href={"/store/[store]"} as={`/store/${data.companyName}`}>
								<a className="text-green-700 hover:text-green-900 dark:text-white dark:hover:text-white text-underline fs-5">
									{data.companyName} discount codes
								</a>
							</Link>
						</small>
					</div>
				</div>
				<div
					className="modal opacity-0 pointer-events-none z-20 fixed w-full h-full px-2 top-0 left-0 flex items-start justify-center"
					id="id_24786"
				></div>
				{showModel && (
					<Model
						closeModel={closeModel}
						companyName={data.companyName}
						discountPercent={data.discountPercent}
						Code={data.link}
						URL={data.companyId.url}
					/>
				)}
			</div>
		</>
	);
};

export default Coupon;
