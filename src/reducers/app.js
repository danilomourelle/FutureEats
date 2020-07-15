const initialState = {
  bottomNavPlace: 'home',
};

const app = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_BOTTOM_NAV_PLACE':
      return {
        ...state,
        bottomNavPlace: action.payload.actualPlace,
      };
    default:
      return state;
  }
}

export default app;