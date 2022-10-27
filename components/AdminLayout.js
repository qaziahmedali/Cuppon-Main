import React from "react";
import Header from "./Admin/Header";
import Footer from "./Footer";
import Head from "next/head";
import Script from "next/script";
const AdminLayout = ({ children }) => {
	return (
		<>
			<Head>
				<meta charSet="UTF-8" />
				{/* <meta name="viewport" content="width=device-width" /> */}
				<title>Admin - Cuppon Code</title>
				<link
					href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css"
					rel="stylesheet"
				></link>
				<link
					rel="stylesheet"
					href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
				></link>
				<script
					dangerouslySetInnerHTML={{
						__html: `
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer', 'asdf');
    `,
					}}
				/>
			</Head>
			<Header />
			<main className="container m-auto">{children}</main>
			<Footer />
		</>
	);
};

export default AdminLayout;
