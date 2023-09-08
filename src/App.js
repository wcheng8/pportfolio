import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import { Projects } from "./components/pages/Projects";
import { Contact } from "./components/pages/Contact";
import { About } from "./components/pages/About";

function App() {
	return (
		<>
			<Router>
				<Navbar />
				<Routes>
					<Route path="/pportfolio" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/projects" element={<Projects />} />
				</Routes>
			</Router>
		</>
	);
}

export default App;
