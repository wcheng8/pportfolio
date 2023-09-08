import React from "react";
import "../../App.css";
import Footer from "../Footer";
import profileimg from "../../images/profile.JPG";
export const About = () => {
	return (
		<>
			<div className="aboutme">
				<h1>About Me</h1>
				<div className="aboutcontainer">
					<div className="aboutwrapper">
						<div className="aboutsection">
							<img
								src={profileimg}
								alt="profileimg"
								width="400"
								height="500"
							></img>
						</div>
						<div className="aboutsection">
							<p>
								Hi, I'm Wilkins and I am a Data Analyst/Coder who is always
								seeking new ways to visualize data so that you can use the data
								to generate data-driven decision! I am a lifelong learner and
								firmly beleive if you put time in it, anything is learnable.
								Some of my hobbies include learning about financial information,
								cooking, tennis and martial arts. As a avid learner of Data
								Science, I love to find new ways of using data to help enhance
								my hobbies as well. If you are interested in these topics as
								well, follow me on medium where I post about topics related to
								these as and random stuff as well!
							</p>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};
