import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import profile from './profile';
import restaurant from './restaurant';
import order from './order';
import app from './app';

export const generateReducers = (history) => combineReducers({
  router: connectRouter(history),
  profile,
  restaurant,
  order,
  app
  // Outros reducers aqui
});
