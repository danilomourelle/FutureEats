const initialState = {
  profileDetails: null,
  profileFullAddress: null,
  profileOrderHistory: null,
};

const profile = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_PROFILE_DETAILS':
      return {
        ...state,
        profileDetails: action.payload.profileDetails,
      };
    case 'SET_PROFILE_FULL_ADDRESS':
      return {
        ...state,
        profileFullAddress: action.payload.profileFullAddress,
      };
    case 'SET_PROFILE_ORDER_HISTORY':
      return {
        ...state,
        profileOrderHistory: action.payload.orderHistory,
      };
    default:
      return state;
  }
};

export default profile;
