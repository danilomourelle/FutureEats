const initialState = {
    restaurantList: [],
    restaurantDetails: [],
    restaurantOrder: [],
    orderHistory: [],
}

export const store = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_RESTAURANTS':

            return {
                ...state,
                restaurantList: action.payload.restaurantList
            }
        case 'SET_RESTAURANT_DETAIL':
            return {
                ...state,
                restaurantDetails: action.payload.restaurant
            }
        case 'SET_RESTAURANT_ORDER':
            return {
                ...state,
                restaurantOrder: [...state.restaurantOrder, action.payload.restaurantOrder]
            }
        case 'DEL_RESTAURANT_ORDER':
            return {
                ...state,
                restaurantOrder: state.restaurantOrder.filter(order => action.payload !== order.id)
            }
        case 'SET_ORDER_HISTORY':
            return {
                ...state,
                orderHistory: action.payload.orders
            }
        default:
            return state;
    }
}

export default store;