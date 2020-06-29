import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import store from "./store";
import profileReducer from './profile'

export const generateReducers = history =>
  combineReducers({
    router: connectRouter(history),
    store,
    profile: profileReducer
    // Outros reducers aqui
  });
