const initialState = {
  bottomNavPlace: 'home',
  dialogOpen: false
};

const app = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_BOTTOM_NAV_PLACE':
      return {
        ...state,
        bottomNavPlace: action.payload.actualPlace,
      };
    case 'SET_DIALOG_OPEN':
      return {
        ...state,
        dialogOpen: action.payload.dialog,
      };
    default:
      return state;
  }
}

export default app;