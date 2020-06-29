import React, { Component } from 'react'
import MyPageTitle from '../../components/pageTitleBar'
import { InputSearch, MainWrapper, CardsWrapper } from '../FeedRestaurants/styles'
import { goToRestaurantDetail } from '../../actions/GetRestaurantDetailsAction';
import CardsRestaurants from '../FeedRestaurants/CardsRestaurants';

import { InputAdornment, Typography } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

import { connect } from 'react-redux';
import { push } from "connected-react-router";
import { routes } from '../Router';


class InputSearchResult extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: "",
      listRestaurant: []
    }
  }

  componentDidMount() {
    if (this.props.restaurantList.length < 1) {
      this.props.goToFeed()
    }
  }

  inputSearchChange = (event) => {
    this.setState({ inputValue: event.target.value })

  }
  render() {
    const filtro = this.props.restaurantList
      .filter(restaurant => (
        restaurant.name.toLowerCase()
          .normalize('NFD')
          .replace(/[\u0300-\u036f]/g, "")
          .includes((this.state.inputValue)
            .toLowerCase()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, ""))
      ))
    return (

      <MainWrapper>
        <MyPageTitle showBack pageTitle={"Busca"} />
        <InputSearch
          id="input-with-icon-adornment"
          placeholder="Restaurante"
          value={this.state.inputValue}
          onChange={this.inputSearchChange}
          startAdornment={
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          }
        />
        <CardsWrapper>
          {this.state.inputValue ?
            filtro.length > 0 ?
              filtro.map(restaurant => {
                return (
                  <CardsRestaurants key={restaurant.id} restaurant={restaurant} />
                )
              }) : <Typography align='center' variant="subtitle2" >Não encontramos :(</Typography>
            : <Typography align='center' variant="subtitle2" >Busque por nome de restaurante</Typography>
          }
        </CardsWrapper>
      </MainWrapper>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    restaurantList: state.store.restaurantList
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    goToRestaurantDetail: (id) => dispatch(goToRestaurantDetail(id)),
    goToFeed: () => dispatch(push(routes.feedRestaurants))

  }
};

export default connect(mapStateToProps, mapDispatchToProps)(InputSearchResult)