import React, { Component } from 'react';
import MyPageTitle from '../../components/pageTitleBar';
import MyBottonNav from '../../components/material/BottomNav';
import { MainWrapper, InputSearch, CardsWrapper, FilterWrapper } from './styles'
import FilterScroll from './FilterScroll';
import { push } from "connected-react-router";
import { routes } from '../Router';
import { connect } from 'react-redux';
import { getRestaurants } from '../../actions/GetRestaurantsAction';
import { Input, InputAdornment, Typography } from '@material-ui/core';

import SearchIcon from '@material-ui/icons/Search';
import CardsRestaurants from './CardsRestaurants';

class FeedRestaurants extends Component {
    constructor(props){
        super(props)
        this.state = {
            actualValue: ""
        }
    }

    componentDidMount() {
        if (localStorage.getItem('token') === null) {
            this.props.goToLogin()
          }
        this.props.getRestaurants()
    }

    handleClick = (valorAlterado) => {        
        if(valorAlterado === this.state.actualValue){
            this.setState({actualValue: ""})
        }else{
            switch(valorAlterado){
                case "Hamburguer":
                    this.setState({actualValue: "Hamburguer"}) 
                    break;
                case "Árabe":
                    this.setState({actualValue: "Árabe"})
                    break;
                case "Asiática":
                    this.setState({actualValue: "Asiática"})
                    break; 
                case "Mexicana":
                    this.setState({actualValue: "Mexicana"})
                    break; 
                case "Baiana":
                    this.setState({actualValue: "Baiana"})
                    break; 
                case "Carnes":
                    this.setState({actualValue: "Carnes"})
                    break; 
                case "Italiana":
                    this.setState({actualValue: "Italiana"})
                    break; 
                case "Sorvetes":
                    this.setState({actualValue:"Sorvetes"})
                    break; 
                case "Petiscos":
                    this.setState({actualValue: "Petiscos"})
                    break;
                    
                    default:
                        this.setState({actualValue: ""})
                        break;
            }
        }
    }

    render() {        
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
                    <FilterScroll  handleClick = {this.handleClick} />
                </FilterWrapper>
                <CardsWrapper>
                    {this.props.restaurantList
                    .filter(restaurant => {
                        return this.state.actualValue? restaurant.category === this.state.actualValue 
                        : true
                    }).map(restaurant => {
                        return(
                            <CardsRestaurants key={restaurant.id} restaurant= {restaurant} />                           
                        )
                    })}
                </CardsWrapper>
                <MyBottonNav />
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
        getRestaurants: () => dispatch(getRestaurants()),
        goToLogin: () => dispatch(push(routes.login)),
        goToSearch: () => dispatch(push(routes.inputSearch))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(FeedRestaurants)