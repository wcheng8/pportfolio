import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
	const [click, setClick] = useState(false);
	const [button, setButton] = useState(true);

	const handleClick = () => setClick(!click);
	const closeMobileMenu = () => setClick(false);

	const showButton = () => {
		if (window.innerWidth < 960) {
			setButton(false);
		} else {
			setButton(true);
		}
	};

	useEffect(() => {
		showButton();
	}, []);
	window.addEventListener("resize", showButton);
	return (
		<div>
			<nav className="navbar">
				<div className="navbar-container">
					<Link
						to="/pportfolio"
						className="navbar-logo"
						onClick={closeMobileMenu}
					>
						W{" "}
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="16"
							fill="currentColor"
							class="bi bi-bar-chart-fill"
							viewBox="0 0 16 16"
						>
							<path d="M1 11a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-3zm5-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V2z" />
						</svg>
					</Link>
					<div className="menu-icon" onClick={handleClick}>
						<i className={click ? "fas fa-times" : "fas fa-bars"}></i>
					</div>
					<ul className={click ? "nav-menu active" : "nav-menu"}>
						<li className="nav-item">
							<Link
								to="/pportfolio"
								className="nav-links"
								onClick={closeMobileMenu}
							>
								Home
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/about" className="nav-links" onClick={closeMobileMenu}>
								About
							</Link>
						</li>
						<li className="nav-item">
							<Link
								to="/projects"
								className="nav-links"
								onClick={closeMobileMenu}
							>
								Projects
							</Link>
						</li>
						<li className="nav-item">
							<Link
								to="./Contact"
								className="nav-links"
								onClick={closeMobileMenu}
							>
								Contact Me
							</Link>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
