import "../../App.css";
import Cards from "../Cards";
import HomePage from "../Homepage";
import Footer from "../Footer";
import React from "react";

function Home() {
	return (
		<>
			<HomePage />
			<Cards />
			<Footer />
		</>
	);
}

export default Home;
