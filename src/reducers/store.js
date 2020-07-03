const initialState = {
  restaurantList: [],
  restaurantDetails: [],
  restaurantOrder: {
    products: []
  },
  orderHistory: [],
  activeOrder: null
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
        restaurantOrder: action.payload.order
      }
    case 'UPDATE_RESTAURANT_ORDER':
      return {
        ...state,
        restaurantOrder: {
          ...state.restaurantOrder,
          products: [...state.restaurantOrder.products, action.payload.product]
        }
      }
    case 'DEL_RESTAURANT_ORDER':
      return {
        ...state,
        restaurantOrder: {
          ...state.restaurantOrder,
          products: state.restaurantOrder.products.filter(product => product.id !== action.payload.productId)
        }
      }
    case 'SET_ORDER_HISTORY':
      return {
        ...state,
        orderHistory: action.payload.orders
      }
    case 'SET_ACTIVE_ORDER':
      return {
        ...state,
        activeOrder: action.payload.order
      }
    default:
      return state;
  }
}

export default store;