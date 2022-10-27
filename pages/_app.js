import "../styles/globals.css";
import { useRouter } from "next/dist/client/router";
import Layout from "../components/Layout";
import AdminLayout from "../components/AdminLayout";
function MyApp({ Component, pageProps }) {
	const router = useRouter();
	let allowed = "";
	if (router.pathname.startsWith("/admin")) {
		allowed = "admin";
	} else if (router.pathname.startsWith("/")) {
		allowed = "user";
	}

	return (
		<>
			{allowed === "admin" ? (
				<AdminLayout>
					<Component {...pageProps} />
				</AdminLayout>
			) : (
				<Layout>
					<Component {...pageProps} />
				</Layout>
			)}
		</>
	);
}

export default MyApp;
