import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";
import covidimg from "../images/covid.jpeg";
import tetrisimg from "../images/tetris.jpeg";
import noteimg from "../images/notebook.jpeg";
import bookimg from "../images/bookmarket.jpeg";

function Cards() {
	return (
		<div className="cards">
			<h1>Projects</h1>
			<div className="cards__container">
				<div className="cards__wrapper">
					<ul className="cards__items">
						<CardItem
							src={covidimg}
							text="Covid Analysis on Tableau"
							label="Data Analysis"
							linkname="Tableau Web"
							link="/"
						/>
						<CardItem
							src={tetrisimg}
							text="Tetris Clone"
							label="Game"
							linkname="Github"
							link="https://github.com/wcheng8/tetrisclone"
						/>
					</ul>
					<ul className="cards__items">
						<CardItem
							src={noteimg}
							text="Markdown Notetaking Application"
							label="Web App"
							linkname="Github"
							link="https://github.com/wcheng8/MarkDownNotesApp"
						/>
						<CardItem
							src={bookimg}
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
