import React from "react";
import "../../App.css";
import Footer from "../Footer";

export const Contact = () => {
	return (
		<>
			<div className="contactme">
				<h1>Contact Me</h1>
				<div className="contactcontainer">
					<div className="contactwrapper">
						<div className="contactinfo">Wilkins Cheng</div>
						<a
							className="contactinfo"
							href="mailto:wilkins.cheng@gmail.com"
							target="/blank"
							rel="noreferrer"
						>
							wilkins.cheng@gmail.com
						</a>
						<div className="contactinfo">
							<a
								target="_blank"
								rel="noreferrer"
								href="https://drive.google.com/file/d/1K0qRkGMTN2ZPXN29xZle1Wml2dFeKay9/view?usp=sharing"
							>
								Resume
							</a>
						</div>
						<div className="contactinfo">
							<a
								target="_blank"
								rel="noreferrer"
								href="https://github.com/wcheng8"
							>
								Github
							</a>
						</div>
						<div className="contactinfo">
							<a
								target="_blank"
								href="https://www.linkedin.com/in/wilkinscheng/"
								rel="noreferrer"
							>
								LinkedIn
							</a>
						</div>
						<div className="contactinfo">
							<a
								target="_blank"
								rel="noreferrer"
								href="https://medium.com/@wilkins.cheng"
							>
								Medium
							</a>
						</div>
					</div>
				</div>
			</div>

			<Footer />
		</>
	);
};
