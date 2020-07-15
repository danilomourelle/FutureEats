import axios from 'axios';
import { push } from 'connected-react-router';
import { routes } from '../containers/Router/index';
import { baseURL } from './app';

//* ****ASSÍNCRONAS*****//
export const getActiveOrder = () => async (dispatch) => {
  try {
    const response = await axios.get(`${baseURL}/active-order`,
      {
        headers:
        {
          auth: localStorage.getItem('token'),
        },
      });
    dispatch(setActiveOrder(response.data.order));
  } catch (error) {
    console.error(error);
    alert('Erro ao tentar adquirir pedido em andamento');
  }
};

export const placeOrder = (paymentMethod, order) => async (dispatch) => {
  try {
    const response = await axios.post(`${baseURL}/restaurants/${order.restaurant.id}/order`,
      {
        products: order.products,
        paymentMethod,
      },
      { headers: { auth: localStorage.getItem('token') } });
    dispatch(setOrder({ restaurant: null, products: [] }));
    dispatch(setActiveOrder(response.data.order))
    dispatch(push(routes.feedRestaurants));
  } catch (error) {
    console.error(error);
    alert('Erro ao tentar mandar a pedido');
  }
};

//* ****SÍNCRONAS*****//
export const setOrder = (order) => ({
  type: 'SET_ORDER',
  payload: { order },
});

export const updateOrder = (product) => ({
  type: 'UPDATE_ORDER',
  payload: { product },
});

export const delOrder = (productId) => ({
  type: 'DEL_ORDER',
  payload: { productId },
});

export const setActiveOrder = (order) => ({
  type: 'SET_ACTIVE_ORDER',
  payload: { order },
});
