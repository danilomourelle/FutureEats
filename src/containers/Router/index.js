import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Switch, Route } from 'react-router-dom';
import FirstPage from '../FirstPage';
import LoginPage from '../Auth/Login';
import RegisterPage from '../Auth/RegisterProfile';
import AddressRegister from '../Auth/Address';
import FeedRestaurants from '../FeedRestaurants';
import InputSearchResult from '../FeedRestaurants/InputSearchResult';
import RestaurantPage from '../RestaurantPage';
import CartPage from '../CartPage';
import Profile from '../ProfilePage';
import ProfileEdit from '../ProfilePage/editProfile';
import AddressEdit from '../ProfilePage/editAddress';

export const routes = {
  firstPage: '/',
  login: '/login',
  register: '/register',
  addressRegister: '/addressRegister',
  feedRestaurants: '/restaurants',
  inputSearch: '/search',
  restaurantPage: '/restaurant',
  cart: '/cart',
  profile: '/profile',
  editProfile: '/profile/edit',
  editAddress: '/profile/editAddress',
};

function Router(props) {
  const { history } = props;
  return (
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path={routes.firstPage} component={FirstPage} />
        <Route exact path={routes.login} component={LoginPage} />
        <Route exact path={routes.register} component={RegisterPage} />
        <Route exact path={routes.addressRegister} component={AddressRegister} />
        <Route exact path={routes.feedRestaurants} component={FeedRestaurants} />
        <Route exact path={routes.inputSearch} component={InputSearchResult} />
        <Route exact path={routes.restaurantPage} component={RestaurantPage} />
        <Route exact path={routes.cart} component={CartPage} />
        <Route exact path={routes.profile} component={Profile} />
        <Route exact path={routes.editProfile} component={ProfileEdit} />
        <Route exact path={routes.editAddress} component={AddressEdit} />
      </Switch>
    </ConnectedRouter>
  );
}

export default Router;
