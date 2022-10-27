import Link from "next/link";
import Image from "next/image";
import Jotex from "../../images/Jotex.png";
function StoreInfo({ CompanyInfo }) {
	// console.log("CompanyInfo", CompanyInfo);
	let d = new Date();
	var months = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December",
	];
	let year = d.getUTCFullYear();
	let month = months[d.getMonth()];
	const myLoader = ({ src }) => {
		return `${CompanyInfo.media}`;
	};
	return (
		<>
			<div className="container m-auto px-4 md:px-0">
				<div className="flex gap-8 md:flex-wrap justify-between md:justify-start items-center">
					<div className="w-auto">
						<Link href={CompanyInfo.url}>
							<a
								rel="noopener nofollow"
								target="_blank"
								className="text-green-700 hover:text-green-900 dark:text-white dark:hover:text-white text-underline fs-5 tracked"
								alt="Go to Jotex"
								aria-label="Go to Jotex"
							>
								<div
									style={{
										display: "inline-block",
										maxWidth: "100%",
										overflow: "hidden",
										position: "relative",
										boxSizing: "border-box",
										margin: 0,
									}}
								>
									<div
										style={{
											display: "inline-block",
											maxWidth: "100%",
											boxSizing: "border-box",
										}}
									>
										<Image
											style={{
												maxWidth: "100%",
												display: "block",
												margin: 0,
												border: "none",
												padding: 0,
											}}
											alt=""
											aria-hidden="true"
											role="presentation"
											loader={myLoader}
											src={`${CompanyInfo.media}`}
											width="100%"
											height="100%"
										/>
									</div>
								</div>
							</a>
						</Link>
					</div>
					<div className="py-3 self-center">
						<h1 className="md:text-2xl text-lg font-bold dark:text-white">
							<font style={{ verticalAlign: "inherit" }}>
								{CompanyInfo.name} discount code
							</font>
						</h1>
						<h2 className="md:text-lg text-sm mb-2 dark:text-white">
							<font style={{ verticalAlign: "inherit" }}>
								Valid {CompanyInfo.name} discount codes for {month} {year}
							</font>
						</h2>
						<Link href={CompanyInfo.url}>
							<a
								rel="noopener nofollow"
								target="_blank"
								className="text-green-700 hover:text-green-900 dark:text-white dark:hover:text-white text-underline fs-5 tracked"
								alt="Go to Jotex"
								aria-label="Go to Jotex"
							>
								<div className="bg-white shadow inline-block text-gray-700 hover:bg-gray-300 cursor-pointer w-auto px-3 py-1 text-sm rounded">
									<font style={{ verticalAlign: "inherit" }}>
										Visit website
									</font>
								</div>
							</a>
						</Link>
					</div>
				</div>
			</div>
		</>
	);
}

export default StoreInfo;
