import React, { useContext } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types"
import { Context } from "../store/appContext";


export const CardVehicle = ({ vehicle }, ...props) => {
    const { store, actions } = useContext(Context);
    return (
      
            <li className="list-group-item m-4 bg-dark text-white">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs6OgFCP6eaeFwE4TkcpdT_VtWqV0owWY5fVvOy-DyKQQd_qWjhG9S6xnuKSkwjEtEkoA&usqp=CAU" className="card-img-top" alt="..." />
                    <div className="card-body ">
                        <h5 className="card-title">Card title</h5>
                        <label className="card-text">Population</label>
                        <br/>
                        <label className="card-text">Terrain</label>
                        <br/>
                        <button className="btn btn-warning mt-4 fw-bold">Learn More!</button>
                        <button className="btn btn-warning float-end fs-4"><i className="fa-regular fa-heart"></i></button>
                    </div>       
            </li>
    
    )
}

CardVehicle.propTypes = {
    vehicle: PropTypes.object
}
export default CardVehicle