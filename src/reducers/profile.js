const initialState = {
  profileDetails: undefined,
  profileFullAddress: undefined,
  profileOrderHistory: undefined,
  bottomNavPlace:'home'
}

const profileReducer = (state = initialState, action) => {    
  switch (action.type) {
      case 'SET_PROFILE_DETAILS':                    
          return {
              ...state,
              profileDetails: action.payload.profileDetails
          }
      case 'SET_PROFILE_FULL_ADDRESS':
          return {
              ...state,
              profileFullAddress: action.payload.profileFullAddress
          }
      case 'SET_ORDER_HISTORY':
          return {
              ...state,
              profileOrderHistory: action.payload.orderHistory
          }
      case 'SET_BOTTOM_NAV_PLACE':
          return {
              ...state,
              bottomNavPlace: action.payload.actualPlace
          }
      default:
          return state;
  }
}

export default profileReducer;