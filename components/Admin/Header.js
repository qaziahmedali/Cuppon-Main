import React, { useEffect } from "react";
import Link from "next/link";
import cookie from "js-cookie";
import { useRouter } from "next/dist/client/router";

const Header = () => {
	const router = useRouter();
	const Logout = () => {
		cookie.remove("token");
		router.push("/admin/login");
	};
	let tokenExist;
	useEffect(() => {
		getToken();
	}, []);
	const getToken = () => {
		tokenExist = cookie.get("token");
		if (tokenExist === undefined) {
			router.push("/admin/login");
		}
		console.log(tokenExist);
	};
	return (
		<header className="text-gray-600 body-font bg-white">
			<div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
				<Link href="/admin/">
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
				<nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
					<Link href="/admin/addCompany">
						<a className="mr-5 hover:text-gray-900 lg:px-2 lg:py-4 py-2 block cursor-pointer border-transparent border-b hover:text-green-700 lg:hover:border-green-600 dark:text-white dark:hover:border-white dark:hover:text-white">
							Companies
						</a>
					</Link>
					<Link href="/admin/addCategory">
						<a className="mr-5 hover:text-gray-900 lg:px-2 lg:py-4 py-2 block cursor-pointer border-transparent border-b hover:text-green-700 lg:hover:border-green-600 dark:text-white dark:hover:border-white dark:hover:text-white">
							Categories
						</a>
					</Link>
					<Link href="/admin/addCuppon">
						<a className="mr-5 hover:text-gray-900 lg:px-2 lg:py-4 py-2 block cursor-pointer border-transparent border-b hover:text-green-700 lg:hover:border-green-600 dark:text-white dark:hover:border-white dark:hover:text-white">
							Coupons
						</a>
					</Link>
					{/* <a className="mr-5 hover:text-gray-900">Fourth Link</a> */}
				</nav>
				{tokenExist !== "undefined" ? (
					<button
						className="bg-blue-700 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
						onClick={Logout}
					>
						Logout
					</button>
				) : (
					""
				)}
			</div>
		</header>
	);
};

export default Header;
