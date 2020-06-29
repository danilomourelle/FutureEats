import React, { Component } from "react";
import * as RPS from './RestaurantPageStyles'
import { Divider } from "@material-ui/core";
import { connect } from 'react-redux'
import { push } from "connected-react-router";
import { routes } from '../../containers/Router';
import MyPageTitle from '../../components/pageTitleBar'
import AlertDialogAddItem from '../Dialog/AlertDialogAddItem'
import { delOrder } from '../../actions/SetOrder'


export class RestaurantPage extends Component {

  componentDidMount() {
    const { restaurantDetails, goToFeed, goToLogin } = this.props
    const token = localStorage.getItem('token')
    if (token === null) {
      goToLogin()
    }
    else {
      if (restaurantDetails.id === null || restaurantDetails.id === undefined || restaurantDetails.id === "") {
        goToFeed()
      }
    }
  }

  render() {
    const { restaurantDetails } = this.props;
    if (restaurantDetails.id === null || restaurantDetails.id === undefined || restaurantDetails.id === "") {
      return (
        <div>
          Nothing here!
        </div>
      )
    }
    else {
      return (
        <RPS.Restaurant>
          <MyPageTitle showBack pageTitle={"Restaurante"} />
          <RPS.ImageLogoRestaurant src={restaurantDetails.logoUrl} alt="Logo"></RPS.ImageLogoRestaurant>
          <RPS.RestaurantData>
            <RPS.RestaurantName>{restaurantDetails.name}</RPS.RestaurantName>
            <RPS.RestaurantType>{restaurantDetails.category}</RPS.RestaurantType>
            <RPS.RestaurantDataMid>
              <RPS.RestaurantTimeDeliver>{restaurantDetails.deliveryTime + " min"}</RPS.RestaurantTimeDeliver>
              <RPS.RestaurantFreight>{"Frete R$" + restaurantDetails.shipping.toFixed(2)}</RPS.RestaurantFreight>
            </RPS.RestaurantDataMid>
            <RPS.RestaurantAdress>{restaurantDetails.address}</RPS.RestaurantAdress>
          </RPS.RestaurantData>
          <RPS.DividerTitle>Principal</RPS.DividerTitle>
          <Divider />
          {restaurantDetails.products.map(product => {
            if (product.category !== "Acompanhamento") {
              let checkButtonRole = false;
              if (this.props.restaurantOrder.length > 0) {
                this.props.restaurantOrder.forEach(order => {
                  if (order.id === product.id) {
                    checkButtonRole = true;
                  }
                })
              }
              if (checkButtonRole) {
                return (
                  <RPS.RestaurantItem key={product.id}>
                    <RPS.RestaurantItemImage src={product.photoUrl} ></RPS.RestaurantItemImage>
                    <RPS.RestaurantItemName>{product.name}</RPS.RestaurantItemName>
                    <RPS.RestaurantItemIngredients>{product.description}</RPS.RestaurantItemIngredients>
                    <RPS.RestaurantItemPrice>{"R$" + product.price.toFixed(2)}</RPS.RestaurantItemPrice>
                    {this.props.restaurantOrder && this.props.restaurantOrder.map(item => {
                      if (product.id === item.id) {
                        return (
                          <RPS.RestaurantCountItens><RPS.RestaurantCounterItensText>{item.quantity}</RPS.RestaurantCounterItensText></RPS.RestaurantCountItens>
                        )
                      }
                    })}
                    <RPS.RestaurantButtomSubIten onClick={() => this.props.delOrder(product.id)}><RPS.RestaurantButtomSubItenText>Remover</RPS.RestaurantButtomSubItenText></RPS.RestaurantButtomSubIten>
                  </RPS.RestaurantItem>
                )
              }
              else{
                return (
                  <RPS.RestaurantItem key={product.id}>
                    <RPS.RestaurantItemImage src={product.photoUrl} ></RPS.RestaurantItemImage>
                    <RPS.RestaurantItemName>{product.name}</RPS.RestaurantItemName>
                    <RPS.RestaurantItemIngredients>{product.description}</RPS.RestaurantItemIngredients>
                    <RPS.RestaurantItemPrice>{"R$" + product.price.toFixed(2)}</RPS.RestaurantItemPrice>
                    {this.props.restaurantOrder && this.props.restaurantOrder.map(item => {
                      if (product.id === item.id) {
                        return (
                          <RPS.RestaurantCountItens><RPS.RestaurantCounterItensText>{item.quantity}</RPS.RestaurantCounterItensText></RPS.RestaurantCountItens>
                        )
                      }
                    })}
                    <RPS.RestaurantButtomAddIten><RPS.RestaurantButtomAddItenText><AlertDialogAddItem id={product.id} restaurantId={restaurantDetails.id}></AlertDialogAddItem></RPS.RestaurantButtomAddItenText></RPS.RestaurantButtomAddIten>
                  </RPS.RestaurantItem>
                )
              }

            }
          })}
          <RPS.DividerTitle>Acompanhamentos</RPS.DividerTitle>
          <Divider />
          {restaurantDetails.products.map(product => {
            if (product.category === "Acompanhamento") {
              let checkButtonRole = false;
              if (this.props.restaurantOrder.length > 0) {
                this.props.restaurantOrder.forEach(order => {
                  if (order.id === product.id) {
                    checkButtonRole = true;
                  }
                })
              }
              if (checkButtonRole) {
                return (
                  <RPS.RestaurantItem key={product.id}>
                    <RPS.RestaurantItemImage src={product.photoUrl} ></RPS.RestaurantItemImage>
                    <RPS.RestaurantItemName>{product.name}</RPS.RestaurantItemName>
                    <RPS.RestaurantItemIngredients>{product.description}</RPS.RestaurantItemIngredients>
                    <RPS.RestaurantItemPrice>{"R$" + product.price.toFixed(2)}</RPS.RestaurantItemPrice>
                    {this.props.restaurantOrder && this.props.restaurantOrder.map(item => {
                      if (product.id === item.id) {
                        return (
                          <RPS.RestaurantCountItens><RPS.RestaurantCounterItensText>{item.quantity}</RPS.RestaurantCounterItensText></RPS.RestaurantCountItens>
                        )
                      }
                    })}
                    <RPS.RestaurantButtomSubIten onClick={() => this.props.delOrder(product.id)}><RPS.RestaurantButtomSubItenText>Remover</RPS.RestaurantButtomSubItenText></RPS.RestaurantButtomSubIten>
                  </RPS.RestaurantItem>
                )
              }
              else{
                return (
                  <RPS.RestaurantItem key={product.id}>
                    <RPS.RestaurantItemImage src={product.photoUrl} ></RPS.RestaurantItemImage>
                    <RPS.RestaurantItemName>{product.name}</RPS.RestaurantItemName>
                    <RPS.RestaurantItemIngredients>{product.description}</RPS.RestaurantItemIngredients>
                    <RPS.RestaurantItemPrice>{"R$" + product.price.toFixed(2)}</RPS.RestaurantItemPrice>
                    {this.props.restaurantOrder && this.props.restaurantOrder.map(item => {
                      if (product.id === item.id) {
                        return (
                          <RPS.RestaurantCountItens><RPS.RestaurantCounterItensText>{item.quantity}</RPS.RestaurantCounterItensText></RPS.RestaurantCountItens>
                        )
                      }
                    })}
                    <RPS.RestaurantButtomAddIten><RPS.RestaurantButtomAddItenText><AlertDialogAddItem id={product.id}></AlertDialogAddItem></RPS.RestaurantButtomAddItenText></RPS.RestaurantButtomAddIten>
                  </RPS.RestaurantItem>
                )
              }

            }
          })}
        </RPS.Restaurant>
      )
    }
  }
}

const mapStateToProps = (state) => ({
  restaurantDetails: state.store.restaurantDetails,
  restaurantOrder: state.store.restaurantOrder,
})

const mapDispatchToProps = (dispatch) => ({
  delOrder: (id) => dispatch(delOrder(id)),
  goToLogin: () => dispatch(push(routes.login)),
  goToFeed: () => dispatch(push(routes.feedRestaurants))
})

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantPage)