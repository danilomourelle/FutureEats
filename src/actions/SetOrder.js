import axios from 'axios'
import { push } from "connected-react-router";
import { routes } from '../containers/Router';

const baseURL = 'https://us-central1-missao-newton.cloudfunctions.net/futureEats'

export const setOrder = (order) => ({
	type: 'SET_RESTAURANT_ORDER',
	payload: {
		restaurantOrder: order
	}
})
export const delOrder = (orderId) => ({
	type: 'DEL_RESTAURANT_ORDER',
	payload: orderId
})

export const getOrder = () => async (dispatch) => {
	try {
		const response = await axios.get(`${baseURL}/active-order`, {
			// headers:{auth:tokenTest} ADICIONAR AUTH CERTO AQUI
		});
		// dispatch(setOrders(response.data))
		console.log(response.data)
	} catch (error) {
		console.error(error)
		alert('Erro ao tentar adquirir lista de pedidos')
	}
}

export const placeOrder = (paymentMethod, orders) => async (dispatch) => {
	let restaurantId = orders[0].restaurantId
	let formatedOrder =[]
	formatedOrder = orders.map(order => {
		delete order.restaurantId
		return  order
	})

	try {
		console.log("esse é o restaurantId " + restaurantId)
		console.log("esse é o paymentMethod " + paymentMethod)
		console.log(formatedOrder)
		console.log("token" + localStorage.getItem("token"))
		await axios.post(`${baseURL}/restaurants/${restaurantId}/order`,
		{
			products: formatedOrder,
			paymentMethod:paymentMethod
		},
		{ headers: { auth: localStorage.getItem("token") } }
		)
		dispatch(console.log("teste"))
	} catch (error) {
		console.error(error)
		alert('Erro ao tentar mandar a order')
	}
}

//---

/*
const setOrderHistory = (orderHistory) => ({
	type: 'SET_ORDER_HISTORY',
	payload: {
		// orderHistory: orders	
	}	
})
*/
export const getOrderHistory = () => async (dispatch) => {
	try {
		const response = await axios.get(`${baseURL}/orders/history`, {
			// headers:{auth:tokenTest} ADICIONAR AUTH CERTO AQUI
		});
		// dispatch(setOrderHistory(response.data))
		console.log(response.data)
	} catch (error) {
		console.error(error)
		alert('Erro ao tentar adquirir historico de pedidos')
	}
}