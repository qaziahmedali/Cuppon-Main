import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Home/Hero";
import Details from "../components/Home/Details";

export default function Home() {
	return (
		<>
			<Hero />
			<div className="container px-12">
				<Details />
			</div>
		</>
	);
}

