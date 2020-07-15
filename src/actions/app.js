export const baseURL = 'https://us-central1-missao-newton.cloudfunctions.net/futureEats';

export const setBottomNav = (actualPlace) => (
  {
    type: 'SET_BOTTOM_NAV_PLACE',
    payload: { actualPlace },
  }
);