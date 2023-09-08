import React from "react";
import { Button } from "./Button";
import "../App.css";
import "./Homepage.css";

function Heropage() {
	return (
		<div className="hero-container">
			<h1>Hi I am Wilkins, a Data Analyst/Coder</h1>
			<p>
				Browse the website to know more about me and the exciting projects I
				created. What are you waiting for?
			</p>
			<div className="hero-btns">
				<Button
					className="btns"
					buttonStyle="btn-outline"
					buttonSize="btn--large"
				>
					Projects
				</Button>
			</div>
		</div>
	);
}

export default Heropage;
