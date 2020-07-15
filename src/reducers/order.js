const initialState = {
  currentOrder: {
    restaurant: null,
    products: [],
  },
  activeOrder: null,
};

const order = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_ORDER':
      return {
        ...state,
        currentOrder: action.payload.order,
      };
    case 'UPDATE_ORDER':
      return {
        ...state,
        currentOrder: {
          ...state.currentOrder,
          products: [...state.currentOrder.products, action.payload.product],
      }
    };
    case 'DEL_ORDER':
      return {
        ...state,
        currentOrder: {
          ...state.currentOrder,
          products: state.currentOrder.products.filter((product) => product.id !== action.payload.productId),
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