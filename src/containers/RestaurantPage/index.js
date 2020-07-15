import React, { Component } from 'react';
import { Divider } from '@material-ui/core';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import * as RPS from './style';
import { routes } from '../Router';
import MyPageTitle from '../../components/PageTitle/pageTitleBar';
import { delOrder } from '../../actions/order';
import ProductCard from '../../components/ProductCard'

class RestaurantPage extends Component {
  componentDidMount() {
    const { restaurantDetails, goToFeed, goToLogin } = this.props;
    const token = localStorage.getItem('token');
    if (token === null) {
      goToLogin();
    } else if (!restaurantDetails.id) {
      goToFeed();
    }
  }

  filterDetails = () => {
    const { restaurantDetails } = this.props;
    const { products, ...filteredDetails } = restaurantDetails;
    return filteredDetails;
  }

  render() {
    const { restaurantDetails } = this.props;
    if (!restaurantDetails.id) {
      return (
        <div>
          Nothing here!
        </div>
      );
    }

    return (
      <RPS.Restaurant>
        <MyPageTitle showBack pageTitle="Restaurante" />
        <RPS.ImageLogoRestaurant src={restaurantDetails.logoUrl} alt="Logo" />
        <RPS.RestaurantData>
          <RPS.RestaurantName>{restaurantDetails.name}</RPS.RestaurantName>
          <RPS.RestaurantType>{restaurantDetails.category}</RPS.RestaurantType>
          <RPS.RestaurantDataMid>
            <RPS.RestaurantTimeDeliver>{`${restaurantDetails.deliveryTime} min`}</RPS.RestaurantTimeDeliver>
            <RPS.RestaurantFreight>{`Frete R$${restaurantDetails.shipping.toFixed(2)}`}</RPS.RestaurantFreight>
          </RPS.RestaurantDataMid>
          <RPS.RestaurantAddress>{restaurantDetails.address}</RPS.RestaurantAddress>
        </RPS.RestaurantData>
        <RPS.DividerTitle>Principal</RPS.DividerTitle>
        <Divider />
        {
          restaurantDetails.products.filter((product) => (
            product.category !== 'Acompanhamento'
          )).map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              restaurantDetails={this.filterDetails()}
            />
          ))
        }

        <RPS.DividerTitle>Acompanhamentos</RPS.DividerTitle>
        <Divider />
        {
          restaurantDetails.products.filter((product) => (
            product.category === 'Acompanhamento'
          )).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        }
      </RPS.Restaurant>
    );
  }
}

const mapStateToProps = (state) => ({
  restaurantDetails: state.restaurant.restaurantDetails,
});

const mapDispatchToProps = (dispatch) => ({
  delOrder: (id) => dispatch(delOrder(id)),
  goToLogin: () => dispatch(push(routes.login)),
  goToFeed: () => dispatch(push(routes.feedRestaurants)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantPage);
