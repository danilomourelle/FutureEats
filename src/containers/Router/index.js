import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import LoginPage from "../Auth/Login";
import RegisterPage from "../Auth/RegisterProfile";
import Profile from "../ProfilePage";
import ProfileEdit from '../ProfilePage/editProfile';
import AddressEdit from '../ProfilePage/editAddress';
import RestaurantPage from '../RestaurantPage'
import FeedRestaurants from "../../containers/FeedRestaurants";
import CartPage from "../CartPage";
import AddressRegister from "../Auth/Address";
import FirstPage from "../FirstPage";
import InputSearchResult from '../InputSearchResult/InputSearchResult'

export const routes = {
  firstpage:'/',
  login:"/login",
  register:"/register",
  addressregister: "/addressregister",
  feedRestaurants: "/restaurants",
  cart:'/cart',
  profile:'/profile',
  editProfile:'/profile/edit',
  editAddress:'/profile/editAddress',
  restaurantPage: '/restaurant',
  inputSearch: '/search'
};

function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
     <Switch>
        <Route exact path={routes.firstpage} component={FirstPage} />
        <Route exact path={routes.login} component={LoginPage} />
        <Route exact path={routes.register} component={RegisterPage} />
        <Route exact path={routes.addressregister} component={AddressRegister} />
        <Route exact path={routes.feedRestaurants} component={FeedRestaurants} />
        <Route exact path={routes.cart} component={CartPage} />
        <Route exact path={routes.profile} component={Profile} />
        <Route exact path={routes.editProfile} component={ProfileEdit} />
        <Route exact path={routes.editAddress} component={AddressEdit} />
        <Route exact path={routes.restaurantPage} component={RestaurantPage} />
        <Route exact path={routes.inputSearch} component={InputSearchResult} />
      </Switch>
    </ConnectedRouter>
  );
}

export default Router;
