import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { InputSearch, MainWrapper, CardsWrapper } from './styles';
import { InputAdornment, Typography } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import CardsRestaurants from '../../components/CardRestaurant';
import MyPageTitle from '../../components/PageTitle/pageTitleBar';
import { routes } from '../Router';
import { getRestaurantDetails } from '../../actions/restaurant';

class InputSearchResult extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
    };
  }

  componentDidMount() {
    if (this.props.restaurantList.length < 1) {
      this.props.goToFeed();
    }
  }

  inputSearchChange = (event) => {
    this.setState({ inputValue: event.target.value });
  }

  applyFilter = () => {
    if (this.state.inputValue) {
      const filter = this.props.restaurantList
        .filter((restaurant) => (
          restaurant.name.toLowerCase()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .includes((this.state.inputValue)
              .toLowerCase()
              .normalize('NFD')
              .replace(/[\u0300-\u036f]/g, ''))
        ));
      if (filter.length > 0) {
        return filter.map((restaurant) => (
          <CardsRestaurants key={restaurant.id} restaurant={restaurant} />
        ));
      }
      return <Typography align="center" variant="subtitle2">Não encontramos :</Typography>;
    }
    return <Typography align="center" variant="subtitle2">Busque por nome de restaurante</Typography>;
  }

  render() {
    return (

      <MainWrapper>
        <MyPageTitle showBack pageTitle="Busca" />
        <InputSearch
          id="input-with-icon-adornment"
          placeholder="Restaurante"
          value={this.state.inputValue}
          onChange={this.inputSearchChange}
          autoFocus
          startAdornment={(
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          )}
        />
        <CardsWrapper>
          {this.applyFilter()}
        </CardsWrapper>
      </MainWrapper>
    );
  }
}

const mapStateToProps = (state) => ({
  restaurantList: state.restaurant.restaurantList,
});

const mapDispatchToProps = (dispatch) => ({
  goToRestaurantDetail: (id) => dispatch(getRestaurantDetails(id)),
  goToFeed: () => dispatch(push(routes.feedRestaurants)),

});

export default connect(mapStateToProps, mapDispatchToProps)(InputSearchResult);
