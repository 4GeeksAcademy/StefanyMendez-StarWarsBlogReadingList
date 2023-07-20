import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types"
import { Context } from "../store/appContext";


export const CardPeople = ({ character }, ...props) => {
    const { store, actions } = useContext(Context);

    return (
        <li className="list-group-item m-4 bg-dark text-white">
                    <img src={`https://starwars-visualguide.com/assets/img/characters/${character.uid}.jpg`} className="card-img-top" alt="..." />
                    <div className="card-body ">
                        <h5 className="card-title">{character.name}</h5>
                        <label className="card-text"></label>
                        <br/>
                        <label className="card-text">Hair Color</label>
                        <br/>
                        <label className="card-text">Eye-Color</label>
                        <br/>
                        <button className="btn btn-warning mt-4 fw-bold">
                            <Link className="text-decoration-none text-dark" to={`/people/${character.uid}`} onClick={()=> actions.getPeopleByID(character.uid)}>
                            Learn More!
                            </Link>
                            </button>
                        <button className="btn btn-warning float-end fs-4"><i className="fa-regular fa-heart"></i></button>
                    </div>       
            </li> 
    )
}

CardPeople.propTypes = {
    character: PropTypes.object,
    idCharacter: PropTypes.object
}
export default CardPeople