import axios from 'axios'

const baseURL = 'https://us-central1-missao-newton.cloudfunctions.net/futureEats'

const setRestaurants = (restaurants) => ({
	type: 'SET_RESTAURANTS',
	payload: {
		restaurantList : restaurants		
	}	
})

export const getRestaurants = () => async (dispatch) => {
	const token = localStorage.getItem('token')	
	try {
		const response = await axios.get(`${baseURL}/restaurants`,{
			headers:{auth:token}
		});
		
		dispatch(setRestaurants(response.data.restaurants))

	} catch (error) {
		console.error(error)
		alert('Erro ao tentar adquirir lista de restaurantes')
	}
}