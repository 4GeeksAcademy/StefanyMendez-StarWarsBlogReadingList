import React, { useContext } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types"
import { Context } from "../store/appContext";


export const CardPlanets = ({ planet }, ...props) => {
    const { store, actions } = useContext(Context);
    return (

        <li className="list-group-item m-4 bg-dark text-white">
            <img src={`https://starwars-visualguide.com/assets/img/planets/${planet.uid}.jpg`} className="card-img-top " alt=""
                onError={({ currentTarget }) => {
                    currentTarget.onerror = null; // prevents looping
                    currentTarget.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg";
                }}
            />
            <div className="card-body ">
                <h3 className="card-title">{planet.name}</h3>
                <button className="btn btn-warning mt-4 fw-bold">
                    <Link className="link fs-5 text-decoration-none text-dark" to={`/planets/${planet.uid}`} onClick={() => actions.getPlanetsByID(planet.uid)}>
                        Learn More!
                    </Link>
                </button>
                <button className="btn btn-warning float-end fs-4" onClick={() => actions.addFavorite(planet, "planets")}><i className="fa-regular fa-heart"></i></button>
            </div>
        </li>

    )
}

CardPlanets.propTypes = {
    planet: PropTypes.object
}
export default CardPlanets