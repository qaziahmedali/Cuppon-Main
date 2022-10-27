import Link from "next/link";
import SearchIcon from "@material-ui/icons/Search";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import SearchBox from "./SearchBox";
import { useState } from "react";
function Header() {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<>
			<nav className="py-4 bg-white px-4 dark:bg-gray-900 border-b border-green-600 dark:border-gray-600">
				<div className="container m-auto px-4 lg:px-0 flex justify-between">
					<Link href="/">
						<a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								stroke="currentColor"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
								viewBox="0 0 24 24"
							>
								<path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
							</svg>
							<span className="ml-3 text-xl">Default</span>
						</a>
					</Link>
					<button
						className="navbar-toggler  lg:hidden"
						type="button"
						onClick={() => {
							setIsOpen(!isOpen);
						}}
					>
						<span className="navbar-toggler-icon">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-6 w-6"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d={
										isOpen == true
											? "M6 18L18 6M6 6l12 12"
											: "M4 6h16M4 12h16M4 18h16"
									}
								></path>
							</svg>
						</span>
					</button>

					<div
						className={`lg:flex items-center lg:pb-0 lg:px-0 px-4 pb-8 z-10 lg:relative absolute lg:border-transparent border-t border-b border-green-600 bg-white w-full left-0 lg:top-0 top-16 ${
							isOpen == true ? "block navbarNav" : "hidden "
						}`}
					>
						<ul className="lg:flex  ml-auto">
							<li className="px-2">
								<Link href="/shops">
									<a>
										<span className="lg:px-2 lg:py-4 py-2 block cursor-pointer border-transparent border-b hover:text-green-700 lg:hover:border-green-600 dark:text-white dark:hover:border-white dark:hover:text-white">
											<font style={{ verticalAlign: "inherit" }}>Shops</font>
										</span>
									</a>
								</Link>
							</li>
							<li className="px-2">
								<Link href="/categories">
									<a>
										<span className="lg:px-2 lg:py-4 py-2 block cursor-pointer border-transparent border-b hover:text-green-700 lg:hover:border-green-600 dark:text-white dark:hover:border-white dark:hover:text-white">
											<font style={{ verticalAlign: "inherit" }}>
												Categories
											</font>
										</span>
									</a>
								</Link>
							</li>

							<li className="px-2">
								<Link href="/discountCodes">
									<a>
										<span className="lg:px-2 lg:py-4 py-2 block cursor-pointer border-transparent border-b hover:text-green-700 lg:hover:border-green-600 dark:text-white dark:hover:border-white dark:hover:text-white">
											<font style={{ verticalAlign: "inherit" }}>
												The best discount codes
											</font>
										</span>
									</a>
								</Link>
							</li>

							<li className="px-2 self-center">
								<div className="bg-white dark:bg-gray-700 rounded-full flex py-2 border border-green-600 dark:border-gray-600 w-50 relative">
									<div className="rounded z-20 bg-white dark:bg-gray-700 border dark:border-gray-900 w-full absolute top-10 hidden"></div>
									<SearchBox />
								</div>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</>
	);
}

export default Header;
