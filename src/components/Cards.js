import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
	return (
		<div className="cards">
			<h1>Projects</h1>
			<div className="cards__container">
				<div className="cards__wrapper">
					<ul className="cards__items">
						<CardItem
							src="/images/covid.jpeg"
							text="Covid Analysis on Tableau"
							label="Data Analysis"
							linkname="Tableau Web"
							link="/"
						/>
						<CardItem
							src="images/tetris.jpeg"
							text="Tetris Clone"
							label="Game"
							linkname="Github"
							link="https://github.com/wcheng8/tetrisclone"
						/>
					</ul>
					<ul className="cards__items">
						<CardItem
							src="images/notebook.jpeg"
							text="Markdown Notetaking Application"
							label="Web App"
							linkname="Github"
							link="https://github.com/wcheng8/MarkDownNotesApp"
						/>
						<CardItem
							src="images/bookmarket.jpeg"
							text="Ruby on Rails Two way Marketplace"
							label="Web App"
							linkname="Github"
							link="https://github.com/wcheng8/bookmarketapp"
						/>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Cards;
