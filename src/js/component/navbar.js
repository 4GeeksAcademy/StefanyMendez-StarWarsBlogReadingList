import React from "react";
import { Link } from "react-router-dom";
import starWars from "../..//img/starwars.png"


export const Navbar = () => {
	return (
		<nav className="navbar mb-3 p-3 sticky-top">
			<Link to="/">
				<button className="navbar-brand ms-5">
					<img src={starWars} alt="Logo StarWars" height="80" width="120"/>
				</button>
			</Link>
			
				<div className="btn-group dropstart me-5">
					<button className="btn btn-warning btn-lg dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
						Favorites
					</button>
					<ul className="dropdown-menu bg-dark text-warning" aria-labelledby="dropdownMenuButton1">
						<li className="m-3">
							<label>Nombre</label>
							<button className="float-end"><i className="fa-solid fa-trash text-warning"></i></button>
						</li>
					</ul>
				</div>
			
		</nav>
	);
};
