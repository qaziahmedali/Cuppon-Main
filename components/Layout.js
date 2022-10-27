import Header from "./Header";
import Footer from "./Footer";
import Head from "next/head";
function Layout({ children }) {
	return (
		<>
			<Head>
				<meta charSet="UTF-8" />
				<meta name="viewport" content="width=device-width" />
				<title>Add a Shopping Cart to Any Website in Minutes - Snipcart</title>
				<meta
					name="description"
					content="Add a shopping cart to your site in minutes. Works with any site builder, CMS, and framework. 20 000+ merchants trust our e-commerce solution for their website. Join them!"
				/>
				<link
					href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css"
					rel="stylesheet"
				></link>
				<link
					rel="stylesheet"
					href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
				></link>
				<meta
					property="og:title"
					content="Add a Shopping Cart to Any Website in Minutes - Snipcart"
				/>
				<meta
					property="og:description"
					content="Add a shopping cart to your site in minutes. Works with any site builder, CMS, and framework. 20 000+ merchants trust our e-commerce solution for their website. Join them!"
				/>
				<meta property="og:url" content="https://snipcart.com/" />
				<meta property="og:type" content="website" />
			</Head>
			<Header />
			<main className="container m-auto ">{children}</main>
			<Footer />
		</>
	);
}

export default Layout;
