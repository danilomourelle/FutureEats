import React, { Component } from 'react';
import { push } from 'connected-react-router';
import { connect } from 'react-redux';
import {
  MainWrapper, InputSearch, CardsWrapper, FilterWrapper,
} from './styles';
import { InputAdornment } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import MyPageTitle from '../../components/PageTitle/pageTitleBar';
import MyBottomNav from '../../components/material/BottomNav';
import FilterScroll from '../../components/FilterScroll';
import CardsRestaurants from '../../components/CardRestaurant'
import CardOrder from '../../components/CardOrderActive';
import { routes } from '../Router';
import { getActiveOrder, setActiveOrder, setOrder } from '../../actions/order';
import { getRestaurants } from '../../actions/restaurant';

class FeedRestaurants extends Component {
  constructor(props) {
    super(props);
    this.state = {
      actualValue: '',
    };
  }

  componentDidMount() {
    if (localStorage.getItem('token') === null) {
      this.props.goToLogin();
    } else {
      this.props.getActiveOrder();
      this.props.getRestaurants();
    }
  }

  componentDidUpdate() {
    if (this.props.activeOrder) {
      const expiresTime = this.props.activeOrder.expiresAt - Date.now();
      setTimeout(this.handleOrderOver, expiresTime);
    }
  }

  handleOrderOver = () => {
    this.props.setActiveOrderNull(null);
  }

  handleFilterClick = (valorAlterado) => {
    if (valorAlterado === this.state.actualValue) {
      this.setState({ actualValue: '' });
    } else {
      this.setState({ actualValue: valorAlterado });
    }
  }

  render() {
    return (
      <MainWrapper>
        <MyPageTitle pageTitle="FutureEats" />
        <InputSearch
          id="input-with-icon-adornment"
          onClick={() => this.props.goToSearch()}
          placeholder="Restaurante"
          startAdornment={(
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          )}
        />
        <FilterWrapper>
          <FilterScroll handleClick={this.handleFilterClick} actualValue={this.state.actualValue} />
        </FilterWrapper>
        <CardsWrapper>
          {this.props.restaurantList
            .filter((restaurant) => (
              this.state.actualValue
                ? restaurant.category === this.state.actualValue
                : true))
            .map((restaurant) => (
              <CardsRestaurants key={restaurant.id} restaurant={restaurant} />
            ))}
        </CardsWrapper>
        {this.props.activeOrder && <CardOrder activeOrder={this.props.activeOrder} />}
        <MyBottomNav />
      </MainWrapper>
    );
  }
}

const mapStateToProps = (state) => ({
  restaurantList: state.restaurant.restaurantList,
  activeOrder: state.order.activeOrder,
});

const mapDispatchToProps = (dispatch) => ({
  setActiveOrderNull: (order) => dispatch(setActiveOrder(order)),
  getActiveOrder: () => dispatch(getActiveOrder()),
  setOrder: (order) => dispatch(setOrder(order)),
  getRestaurants: () => dispatch(getRestaurants()),
  goToLogin: () => dispatch(push(routes.login)),
  goToSearch: () => dispatch(push(routes.inputSearch)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FeedRestaurants);
