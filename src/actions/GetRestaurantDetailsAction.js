import axios from 'axios'
import { push } from "connected-react-router";
import { routes } from '../containers/Router';

const baseURL = 'https://us-central1-missao-newton.cloudfunctions.net/futureEats'

export const setRestaurantDetail = (restaurant) => ({
	type:'SET_RESTAURANT_DETAIL',
	payload:{
		restaurant
	}
});

export const fetchRestaurant = (id) => async(dispatch, getState) => {
	const token = localStorage.getItem('token')
	const response = await axios.get(`${baseURL}/restaurants/${id}`,{
		headers:{auth: token}
	});	
	dispatch(setRestaurantDetail(response.data.restaurant))
};

export const goToRestaurantDetail = restId => async(dispatch) =>{
	await dispatch(fetchRestaurant(restId))
	dispatch(push(routes.restaurantPage))
};



