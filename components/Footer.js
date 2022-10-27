import Link from "next/link";
const Footer = () => {
	return (
		<footer
			className=" container
			text-gray-600 body-font"
			style={{ backgroundColor: "#d2d6ef" }}
		>
			<div className="container px-2 py-12">
				<div className="flex flex-wrap md:text-left text-center -mb-10 -mx-4">
					<div className="lg:w-1/3 md:w-1/2 w-full px-4">
						<h1 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
							CATEGORIES
						</h1>
						<nav className="list-none mb-10">
							<li>
								<Link href="/">
									<a className="text-gray-600 hover:text-gray-800">Default</a>
								</Link>
							</li>
							<li>
								<p>
									Find discount codes and offers at over 200 Norwegian online
									stores on Default.no. Save money with discount code in your
									favorite online store. With more than 3000 discount codes and
									offers, you will find something for everyone at Default.
								</p>
							</li>
						</nav>
					</div>
					<div className="lg:w-1/3 md:w-1/2 w-full px-4">
						<h1 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
							SERVICES
						</h1>
						<nav className="list-none mb-10">
							<li>
								<Link href="/">
									<a className="text-gray-600 hover:text-gray-800">Home</a>
								</Link>
							</li>
							<li>
								<Link href="/discountCodes">
									<a className="text-gray-600 hover:text-gray-800">
										All Discount Codes
									</a>
								</Link>
							</li>
							<li>
								<Link href="/whatisdicountcode">
									<a className="text-gray-600 hover:text-gray-800">
										What is a discount code?
									</a>
								</Link>
							</li>
							<li>
								<Link href="/howusediscountcode">
									<a className="text-gray-600 hover:text-gray-800">
										How to use discount code?
									</a>
								</Link>
							</li>
						</nav>
					</div>
					<div className="lg:w-1/3 md:w-1/2 w-full px-4">
						<h1 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
							ABOUT US
						</h1>
						<nav className="list-none mb-10">
							<li>
								<Link href="/about">
									<a className="text-gray-600 hover:text-gray-800">About us</a>
								</Link>
							</li>
							<li>
								<Link href="/privacy">
									<a className="text-gray-600 hover:text-gray-800">Privacy</a>
								</Link>
							</li>
							<li>
								<Link href="/contact">
									<a className="text-gray-600 hover:text-gray-800">
										Contact us
									</a>
								</Link>
							</li>
						</nav>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
