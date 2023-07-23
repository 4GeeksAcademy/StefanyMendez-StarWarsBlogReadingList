import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types"
import { Context } from "../store/appContext";


export const CardFavorites = ({ favorite }, ...props) => {
    const { store, actions } = useContext(Context);

    return (
        <li className="list-group-item m-4 bg-dark text-white">
            <img src={`https://starwars-visualguide.com/assets/img/${favorite.type}/${favorite.uid}.jpg`} className="card-img-top" alt="..."
            onError={({ currentTarget }) => {
                currentTarget.onerror = null; // prevents looping
                currentTarget.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg";
            }}/>
            <div className="card-body ">
                <h3 className="card-title">{favorite.name}</h3>
                <button className="btn btn-warning mt-4 fw-bold">
                    <Link className="link fs-5 text-decoration-none text-dark" to={`/${favorite.type == "characters" ? "people" : favorite.type}/${favorite.uid}`} onClick={() => actions.getFavoritesByType(favorite.uid, favorite.type)}>
                        Learn More!
                    </Link>
                </button>
                <button className="btn btn-warning float-end fs-4" onClick={() => actions.deleteFavorite(favorite)}><i className="fa-solid fa-trash"></i></button>
            </div>
        </li>
    )
}
CardFavorites.propTypes = {
    favorite: PropTypes.object,
}
export default CardFavorites