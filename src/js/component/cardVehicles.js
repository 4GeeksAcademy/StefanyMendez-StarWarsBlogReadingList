import React, { useContext } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types"
import { Context } from "../store/appContext";


export const CardVehicle = ({ vehicle }, ...props) => {
    const { store, actions } = useContext(Context);
    return (

        <li className="list-group-item m-4 bg-dark text-white">
            <img src={`https://starwars-visualguide.com/assets/img/vehicles/${vehicle.uid}.jpg`} className="card-img-top " alt="..." />
            <div className="card-body ">
                <h3 className="card-title">{vehicle.name}</h3>
                <button className="btn btn-warning mt-4 fw-bold">
                    <Link className="link fs-5 text-decoration-none text-dark" to={`/vehicles/${vehicle.uid}`} onClick={() => actions.getVehiclesByID(vehicle.uid)}>
                        Learn More!
                    </Link>
                </button>
                <button className="btn btn-warning float-end fs-4" onClick={() => {
                    store.favorites.find((favorite) => favorite.name === vehicle.name)
                        ? actions.deleteFavorite(vehicle)
                        : actions.addFavorite(vehicle, "vehicles")
                }}>
                    <i className={store.favorites.find((favorite) => favorite.name === vehicle.name)
                        ? "fa-solid fa-heart"
                        : "fa-regular fa-heart"}>
                    </i>
                </button>
            </div>
        </li>

    )
}

CardVehicle.propTypes = {
    vehicle: PropTypes.object
}
export default CardVehicle