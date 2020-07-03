import React, { Component } from 'react';
import MyPageTitle from '../../components/pageTitleBar';
import MyBottonNav from '../../components/material/BottomNav';
import { MainWrapper, InputSearch, CardsWrapper, FilterWrapper } from './styles'
import FilterScroll from './FilterScroll';
import { push } from "connected-react-router";
import { routes } from '../Router';
import { connect } from 'react-redux';
import { getRestaurants } from '../../actions/GetRestaurantsAction';
import { InputAdornment } from '@material-ui/core';

import SearchIcon from '@material-ui/icons/Search';
import CardsRestaurants from './CardsRestaurants';
import CardOrder from './CardOrderProgress';
import { getActiveOrder, setActiveOrder, setOrder} from '../../actions/Order';

class FeedRestaurants extends Component {
  constructor(props) {
    super(props)
    this.state = {
      actualValue: ""
    }
  }

  componentDidMount() {
    if (localStorage.getItem('token') === null) {
      this.props.goToLogin()
    }
    this.props.getActiveOrder()
    this.props.getRestaurants()    
  }

  componentDidUpdate(){   
      if(this.props.activeOrder){
        const expiresTime = this.props.activeOrder.expiresAt -  Date.now()
        setTimeout(this.handleOrderOver, expiresTime)
      }     
  }

  handleOrderOver = () => {
    this.props.setActiveOrderNull(null)
  }

  handleFilterClick = (valorAlterado) => {
    if (valorAlterado === this.state.actualValue) {
      this.setState({ actualValue: "" })
    } else {
      this.setState({ actualValue: valorAlterado })
    }
  }

  render(){
    return (
      <MainWrapper>
        <MyPageTitle pageTitle={"FutureEats"} />
        <InputSearch
          id="input-with-icon-adornment"
          onClick={() => this.props.goToSearch()}
          placeholder="Restaurante"
          startAdornment={
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          }
        />
        <FilterWrapper>
          <FilterScroll handleClick={this.handleFilterClick} actualValue={this.state.actualValue} />
        </FilterWrapper>
        <CardsWrapper>
          {this.props.restaurantList
            .filter(restaurant => {
              return this.state.actualValue ? restaurant.category === this.state.actualValue
                : true
            }).map(restaurant => {
              return (
                <CardsRestaurants key={restaurant.id} restaurant={restaurant} />
              )
            })}
        </CardsWrapper>            
        {this.props.activeOrder && <CardOrder activeOrder={this.props.activeOrder}/>}   
        <MyBottonNav />
      </MainWrapper>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    restaurantList: state.store.restaurantList,
    activeOrder: state.store.activeOrder
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    setActiveOrderNull: (order) => dispatch(setActiveOrder(order)),
    getActiveOrder: () => dispatch(getActiveOrder()),
    setOrder: (order) => dispatch(setOrder(order)),
    getRestaurants: () => dispatch(getRestaurants()),
    goToLogin: () => dispatch(push(routes.login)),
    goToSearch: () => dispatch(push(routes.inputSearch))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(FeedRestaurants)