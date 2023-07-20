const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			urlApi: "https://www.swapi.tech/api",

			people: null,
			idCharacter: null,

			vehicles: null,
			idVehicle: null,

			planets:null,
			idPlanet:null,

			favorite: false,
			
		},
		actions: {

			getPeople: () => {
				const store = getStore();

				fetch(`${store.urlApi}/people`)
					.then(response => response.json())
					.then(result => {
						console.log("...Loading");
						setStore({people: result.results})
/* 	
						store.people.map((character,index)=>{
								fetch(`${store.urlApi}/people/${character.uid}`)
								.then(response => response.json())
								.then(result => {
									setStore({idCharacter:result.result})
								})
						}) */
					})
			},
			getPeopleByID: id => {
				setStore({ idCharacter: null })
				const store = getStore();

				fetch(`${store.urlApi}/people/${id}`)
					.then(response => response.json())
					.then(result =>{
					 setStore({ idCharacter: result.result.properties})})
			}
		}
	};
};

export default getState;
