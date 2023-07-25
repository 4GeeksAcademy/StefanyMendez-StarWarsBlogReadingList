import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types"
import { Context } from "../store/appContext";


export const CardPeople = ({ character }, ...props) => {
    const { store, actions } = useContext(Context);

    useEffect(() => {

    }, [store.favorites.favorite])


    return (
        <li className="list-group-item m-4 bg-dark text-white">
            <img src={`https://starwars-visualguide.com/assets/img/characters/${character.uid}.jpg`} className="card-img-top" alt="..."
                onError={({ currentTarget }) => {
                    currentTarget.onerror = null; // prevents looping
                    currentTarget.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg";
                }} />
            <div className="card-body ">
                <h3 className="card-title">{character.name}</h3>

                <button className="btn btn-warning mt-4 fw-bold">
                    <Link className="link fs-5 text-decoration-none text-dark" to={`/people/${character.uid}`} onClick={() => actions.getPeopleByID(character.uid)}>
                        Learn More!
                    </Link>
                </button>
                <button className="btn btn-warning float-end fs-4" onClick={() => {
                    store.favorites.find((favorite) => favorite.name === character.name)
                        ? actions.deleteFavorite(character)
                        : actions.addFavorite(character, "characters")
                }}>
                    <i className={store.favorites.find((favorite) => favorite.name === character.name)
                        ? "fa-solid fa-heart"
                        : "fa-regular fa-heart"}>
                    </i>
                </button>
            </div>
        </li>
    )
}
CardPeople.propTypes = {
    character: PropTypes.object
}
export default CardPeople