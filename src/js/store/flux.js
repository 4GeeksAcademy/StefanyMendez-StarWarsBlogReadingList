const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			urlApi: "https://www.swapi.tech/api",

			people: null,
			idCharacter: [],
			uidCharacter: null,

			vehicles: null,
			idVehicle: null,
			uidVehicle: null,

			planets: null,
			idPlanet: null,
			uidPlanet: null,

			favorites: JSON.parse(localStorage.getItem("favorites")) == undefined ? [] : JSON.parse(localStorage.getItem("favorites")),
			hiddenFavorites: localStorage.getItem("favorites") ==  "[]" ? true : false,

			searchPeople: [],
			searchPlanets: [],
			searchVehicles: []

		},
		actions: {

			getPeople: () => {
				const store = getStore();

				fetch(`${store.urlApi}/people`)
					.then(response => response.json())
					.then(result => {
						console.log("...Loading People");
						setStore({ people: result.results })
						setStore({ searchPeople: result.results })

					})
					.catch(error => { console.log(error + " Error in getPeople()") })
			},

			getPeopleByID: id => {
				setStore({ idCharacter: null })
				setStore({ uidCharacter: null })
				const store = getStore();

				fetch(`${store.urlApi}/people/${id}`)
					.then(response => response.json())
					.then(result => {
						setStore({ idCharacter: result.result.properties })
						setStore({ uidCharacter: id })
					})
					.catch(error => { console.log(error + " Error in getPeopleByID()") })
			},

			getVehicles: () => {
				const store = getStore();

				fetch(`${store.urlApi}/vehicles`)
					.then(response => response.json())
					.then(result => {
						console.log("...Loading Vehicles");
						setStore({ vehicles: result.results })
						setStore({ searchVehicles: result.results })

					})
					.catch(error => { console.log(error + " Error in getVehicles()") })
			},

			getVehiclesByID: id => {
				setStore({ idVehicle: null })
				setStore({ uidVehicle: null })
				const store = getStore();

				fetch(`${store.urlApi}/vehicles/${id}`)
					.then(response => response.json())
					.then(result => {
						setStore({ idVehicle: result.result.properties })
						setStore({ uidVehicle: id })
					})
					.catch(error => { console.log(error + " Error in getVehiclesByID()") })
			},

			getPlanets: () => {
				const store = getStore();

				fetch(`${store.urlApi}/planets`)
					.then(response => response.json())
					.then(result => {
						console.log("...Loading Planets");
						setStore({ planets: result.results })
						setStore({ searchPlanets: result.results })
					})
					.catch(error => { console.log(error + " Error in getPlanets()") })
			},

			getPlanetsByID: id => {
				setStore({ idCharacter: null })
				setStore({ uidPlanet: null })
				const store = getStore();

				fetch(`${store.urlApi}/planets/${id}`)
					.then(response => response.json())
					.then(result => {
						setStore({ idPlanet: result.result.properties })
						setStore({ uidPlanet: id })
					})
					.catch(error => { console.log(error + " Error in getPplanetsByID()") })
			},

			addFavorite: (newItem, type) => {
				const store = getStore();
				if (!store.favorites.find(item => item.name == newItem.name)) {
					setStore({ favorites: [newItem, ...store.favorites] })
					setStore(store.favorites[0].type = type)
					setStore({ hiddenFavorites: false })
					localStorage.setItem("favorites", JSON.stringify(store.favorites));
				}
			},

			deleteFavorite: (items) => {
				const store = getStore();
				setStore({ favorites: store.favorites.filter(item => item.uid != items.uid) })
				localStorage.setItem("favorites", JSON.stringify(store.favorites));

				if (store.favorites.length == 0) {
					setStore({ hiddenFavorites: true })
				}
			},

			getFavoritesByType: (id, type) => {
				const store = getStore();

				setStore({ idCharacter: null })
				setStore({ uidCharacter: null })
				setStore({ idVehicle: null })
				setStore({ uidVehicle: null })
				setStore({ idCharacter: null })
				setStore({ uidPlanet: null })

				fetch(`${store.urlApi}/${type == "characters" ? "people" : type}/${id}`)
					.then(response => response.json())
					.then(result => {

						if (type === "characters") {
							setStore({ idCharacter: result.result.properties })
							setStore({ uidCharacter: id })
						}
						if (type === "vehicles") {
							setStore({ idVehicle: result.result.properties })
							setStore({ uidVehicle: id })
						}
						if (type === "planets") {
							setStore({ idPlanet: result.result.properties })
							setStore({ uidPlanet: id })
						}
					})
					.catch(error => { console.log(error + " Error in getFavoritesByType)") })
			},

			getSearchPeople: input => {
				const store = getStore();

				const newPeople = store.searchPeople.filter(character => {
					if (character.name.toLowerCase().includes(input.toLowerCase())) {
						return character
					}
				})
				setStore({ people: newPeople })
			},

			getSearchVehicles: input => {
				const store = getStore();

				const newVehicle = store.searchVehicles.filter(vehicle => {
					if (vehicle.name.toLowerCase().includes(input.toLowerCase())) {
						return vehicle
					}
				})
				setStore({ vehicles: newVehicle })
			},

			getSearchPlanets: input => {
				const store = getStore();

				const newPlanet = store.searchPlanets.filter(planet => {
					if (planet.name.toLowerCase().includes(input.toLowerCase())) {
						return planet
					}
				})
				setStore({ planets: newPlanet })
			}
		}
	};
};

export default getState;
