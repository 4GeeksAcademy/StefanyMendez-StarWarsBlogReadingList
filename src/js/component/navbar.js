import React, { useContext } from "react";
import { Link } from "react-router-dom";
import starWars from "../..//img/starwars.png"
import { Context } from "../store/appContext";


export const Navbar = () => {

	const { store, actions } = useContext(Context)

	return (
		<nav className="navbar mb-3 p-3 sticky-top">
			<Link to="/">
				<button className="navbar-brand ms-5">
					<img src={starWars} alt="Logo StarWars" height="80" width="120" />
				</button>
			</Link>

			<div className="btn-group me-5">
				<button className="btn btn-warning btn-lg dropdown-toggle position-relative my-3" type="button" id="dropdownMenuButton1" data-bs-auto-close="outside" data-bs-toggle="dropdown" aria-expanded="false">
					Favorites
					<span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger fs-5" hidden={store.favorites.length == 0 ? true : false}>
						{store.favorites.length}
						<span className="visually-hidden">unread messages</span>
					</span>
				</button>
				<ul className="dropdown-menu dropdown-menu-lg-end bg-dark text-warning" aria-labelledby="dropdownMenuButton1">
					{
						!!store.favorites && store.favorites.map((favorite, index) => {
							return (
								<li className="m-3 favorites" key={index}>
									<label>{favorite.name}</label>
									<button className="float-end" onClick={() => actions.deleteFavorite(favorite)}><i className="fa-solid fa-trash text-warning"></i></button>
								</li>
							)
						})
					}

				</ul>
			</div>

		</nav>
	);
};
