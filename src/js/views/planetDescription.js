import "../../styles/home.css";
import React, { useContext } from "react";
import { Context } from "../store/appContext.js";

export const PlanetDescription = (...props) => {

    const { store, actions } = useContext(Context);


    return (
        <div className="mt-5 mx-5 divFondoDescription">
            <div className="row">
                <div className="col-lg-5 col-sm-auto m-5">
                    <img className="img-fluid" src={`https://starwars-visualguide.com/assets/img/planets/${store.uidPlanet}.jpg `}
                        onError={({ currentTarget }) => {
                            currentTarget.onerror = null; // prevents looping
                            currentTarget.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg";
                        }}
                    ></img>
                </div>
                <div className="col-lg-6 col-sm-auto my-auto ms-3">
                    <h1 className="mb-5 text-warning">{!!store.idPlanet ? store.idPlanet.name : "...Loading"}</h1>
                    <p className="fs-5 me-5">Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.</p>
                </div>
            </div>
            <hr className="text-warning mx-5" />
            <div className="row">
                <div className="col-lg-2 col-sm-auto text-center my-5">
                    <label className="fs-3 fw-bold text-warning">Surface Water</label>
                    <br />
                    <label className="fs-4">{!!store.idPlanet ? store.idPlanet.surface_water : "...Loading"}</label>
                </div>
                <div className="col-lg-2 col-sm-auto text-center my-5">
                    <label className="fs-3 fw-bold text-warning">Diameter</label>
                    <br />
                    <label className="fs-4">{!!store.idPlanet ? store.idPlanet.diameter : "...Loading"}</label>
                </div>
                <div className="col-lg-2 col-sm-auto text-center my-5">
                    <label className="fs-3 fw-bold text-warning">Gravity</label>
                    <br />
                    <label className="fs-4">{!!store.idPlanet ? store.idPlanet.gravity : "...Loading"}</label>
                </div>
                <div className="col-lg-2 col-sm-auto text-center my-5">
                    <label className="fs-3 fw-bold text-warning">Population</label>
                    <br />
                    <label className="fs-4">{!!store.idPlanet ? store.idPlanet.population : "...Loading"}</label>
                </div>
                <div className="col-lg-2 col-sm-auto text-center my-5">
                    <label className="fs-3 fw-bold text-warning">Climate</label>
                    <br />
                    <label className="fs-4">{!!store.idPlanet ? store.idPlanet.climate : "...Loading"}</label>
                </div>
                <div className="col-lg-2 col-sm-auto text-center my-5">
                    <label className="fs-3 fw-bold text-warning">Terrain</label>
                    <br />
                    <label className="fs-4">{!!store.idPlanet ? store.idPlanet.terrain : "...Loading"}</label>
                </div>
            </div>
        </div>
    )

}
export default PlanetDescription
