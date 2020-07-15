export const baseURL = 'https://us-central1-missao-newton.cloudfunctions.net/futureEats';

export const setBottomNav = (actualPlace) => (
  {
    type: 'SET_BOTTOM_NAV_PLACE',
    payload: { actualPlace },
  }
);

export const setDialog = (status) => (
  {
    type: 'SET_DIALOG_OPEN',
    payload: { dialog: status },
  }
);