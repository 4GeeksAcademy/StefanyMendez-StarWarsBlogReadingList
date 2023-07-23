import "../../styles/home.css";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";
import CardPeople from "../component/cardPeople";
import CardPlanets from "../component/cardPlanets";
import CardVehicle from "../component/cardVehicles";
import CardFavorites from "../component/cardFavorites";


export const Home = (...props) => {
	const { store, actions } = useContext(Context);

	return (
		<div>

			<div className="mt-5 mx-5 divFondo">
				<h1 className="mt-5 ms-5 text-warning">Characters</h1>
				<div className="div-search">
				<i className="fa-solid fa-magnifying-glass text-warning me-2 fs-3 ms-5"></i>
					<label htmlFor="inputSearchPeople" className="col-form-label text-warning fs-4">Search</label>
					<input type="text" id="inputSearch" className="form-control w-50 bg-dark text-white ms-5" autoComplete="off" aria-describedby="passwordHelpInline"
						onKeyUp={e => {
							actions.getSearchPeople(e.target.value)
						}}
						/>
				</div>
				<ul className="list-group list-group-horizontal p-4">
					{
						!!store.people &&
						store.people.map((character, index) => {
							return (
								<CardPeople key={index} character={character} />
							)
						})
					}
				</ul>
			</div>
			<div className="mt-5 mx-5 divFondo">
				<h1 className="mt-5 ms-5 text-warning">Planets</h1>
				<div className="div-search">
				<i className="fa-solid fa-magnifying-glass text-warning me-2 fs-3 ms-5"></i>
					<label htmlFor="inputSearch" className="col-form-label text-warning fs-4">Search</label>
					<input type="text" id="inputSearchPlanet" className="form-control w-50 bg-dark text-white ms-5" autoComplete="off" aria-describedby="passwordHelpInline"
						onKeyUp={e => {
							actions.getSearchPlanets(e.target.value)
						}}
						/>
				</div>
				<ul className="list-group list-group-horizontal p-4">
					{!!store.planets &&
						store.planets.map((planet, index) => {
							return (
								<CardPlanets key={index} planet={planet} />
							)
						})}
				</ul>
			</div>
			<div className="mt-5 mx-5 divFondo">
				<h1 className="mt-5 ms-5 text-warning">Vehicles</h1>
				<div className="div-search">
				<i className="fa-solid fa-magnifying-glass text-warning me-2 fs-3 ms-5"></i>
					<label htmlFor="inputSearch" className="col-form-label text-warning fs-4">Search</label>
					<input type="text" id="inputSearchVehicle" className="form-control w-50 bg-dark text-white ms-5" autoComplete="off" aria-describedby="passwordHelpInline"
						onKeyUp={e => {
							actions.getSearchVehicles(e.target.value)
						}}
						/>
				</div>
				<ul className="list-group list-group-horizontal p-4">

					{!!store.vehicles &&
						store.vehicles.map((vehicle, index) => {
							return (
								<CardVehicle key={index} vehicle={vehicle} id />
							)
						})}
				</ul>
			</div>
			<div className="mt-5 mx-5 divFondo" hidden={store.hiddenFavorites}>
				<h1 className="mt-5 ms-5 text-warning">Favorites</h1>
				<ul className="list-group list-group-horizontal p-4">

					{!!store.favorites &&
						store.favorites.map((favorite, index) => {
							return (
								<CardFavorites key={index} favorite={favorite} />
							)
						})}
				</ul>
			</div>
		</div>
	)
}
export default Home
