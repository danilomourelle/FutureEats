const initialState = {
  restaurantList: [],
  restaurantDetails: null,
};

const restaurant = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_RESTAURANTS':
      return {
        ...state,
        restaurantList: action.payload.restaurantList,
      };
    case 'SET_RESTAURANT_DETAIL':
      return {
        ...state,
        restaurantDetails: action.payload.restaurant,
      };
    default:
      return state;
  }
}

export default restaurant