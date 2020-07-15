const initialState = {
  order: {
    products: [],
  },
  activeOrder: null,
};

const order = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_ORDER':
      return {
        ...state,
        restaurantOrder: action.payload.order,
      };
    case 'UPDATE_ORDER':
      return {
        ...state,
        restaurantOrder: {
          ...state.restaurantOrder,
          products: [...state.restaurantOrder.products, action.payload.product],
        },
      };
    case 'DEL_ORDER':
      return {
        ...state,
        restaurantOrder: {
          ...state.restaurantOrder,
          products: state.restaurantOrder.products.filter((product) => product.id !== action.payload.productId),
        },
      };
    case 'SET_ACTIVE_ORDER':
      return {
        ...state,
        activeOrder: action.payload.order,
      };
    default:
      return state;
  }
}

export default order;