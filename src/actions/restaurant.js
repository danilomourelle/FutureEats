import axios from 'axios';
import { push } from 'connected-react-router';
import { routes } from '../containers/Router';
import { baseURL } from './app';

//* ****ASSÍNCRONAS**** *//
export const getRestaurants = () => async (dispatch) => {
  const token = localStorage.getItem('token');
  try {
    const response = await axios.get(`${baseURL}/restaurants`, {
      headers: { auth: token },
    });

    dispatch(setRestaurants(response.data.restaurants));
  } catch (error) {
    console.error(error);
    alert('Erro ao tentar adquirir lista de restaurantes');
  }
};

export const getRestaurantDetails = (id) => async (dispatch) => {
  const token = localStorage.getItem('token');
  const response = await axios.get(`${baseURL}/restaurants/${id}`, {
    headers: { auth: token },
  });
  dispatch(setRestaurantDetail(response.data.restaurant));
  dispatch(push(routes.restaurantPage));
};

//* ****SÍNCRONAS*****//
const setRestaurants = (restaurants) => ({
  type: 'SET_RESTAURANTS',
  payload: {
    restaurantList: restaurants,
  },
});

export const setRestaurantDetail = (restaurant) => ({
  type: 'SET_RESTAURANT_DETAIL',
  payload: {
    restaurant,
  },
});