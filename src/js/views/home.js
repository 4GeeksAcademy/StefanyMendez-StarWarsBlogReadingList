import "../../styles/home.css";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";
import CardPeople from "../component/cardPeople";
import CardPlanets from "../component/cardPlanets";
import CardVehicle from "../component/cardVehicles";

export const Home = (...props) => {
	const { store, actions } = useContext(Context);
	return (
		<div>
			<div className="mt-5 mx-5 divFondo">
				<h1 className="mt-5 ms-5 text-warning">Characters</h1>
				<ul className="list-group list-group-horizontal p-4">
					{!!store.people &&
						store.people.map((character, index) => {
							return (
								<CardPeople key={index} character={character} />
							)
						})}
				</ul>
			</div>
			<div className="mt-5 mx-5 divFondo">
				<h1 className="mt-5 ms-5 text-warning">Planets</h1>
				<ul className="list-group list-group-horizontal p-4">
					<CardPlanets />
					<CardPlanets />
					<CardPlanets />
					<CardPlanets />
					<CardPlanets />
					<CardPlanets />
					<CardPlanets />
				</ul>
			</div>
			<div className="mt-5 mx-5 divFondo">
				<h1 className="mt-5 ms-5 text-warning">Vehicles</h1>
				<ul className="list-group list-group-horizontal p-4">
					<CardVehicle />
					<CardVehicle />
					<CardVehicle />
					<CardVehicle />
					<CardVehicle />
					<CardVehicle />
				</ul>
			</div>
		</div>
	)
}
export default Home
