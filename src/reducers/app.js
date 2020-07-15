const initialState = {
  bottomNavPlace: 'home',
  dialog: {
    status: false,
    productId: null,
  },
};

const app = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_BOTTOM_NAV_PLACE':
      return {
        ...state,
        bottomNavPlace: action.payload.actualPlace,
      };
    case 'SET_DIALOG':
      return {
        ...state,
        dialog: action.payload.dialog,
      };
    default:
      return state;
  }
}

export default app;