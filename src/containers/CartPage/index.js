import React, { Component } from "react";
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { routes } from '../Router'
import * as CPS from './CartPageStyles'
import * as RPS from '../RestaurantPage/RestaurantPageStyles'
import MyPageTitle from '../../components/pageTitleBar'
import MyBottonNav from '../../components/material/BottomNav';
import { getProfile } from '../../actions/profile'
import { fetchRestaurant } from '../../actions/GetRestaurantDetailsAction'
import { Divider } from "@material-ui/core";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { withStyles } from '@material-ui/core/styles';
import { placeOrder } from '../../actions/Order';
import ProductCard from "../RestaurantPage/ProductCard";
import MyButton from "../../components/material/Button";

const GreenRadio = withStyles({
  root: {
    color: "#5cb646",
    '&$checked': {
      color: "#5cb646",
    },
  },
  checked: {},
})((props) => <Radio color="default" {...props} />);

class CartPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      paymentMethod: "money",
    }
  }

  componentDidMount() {
    if (localStorage.getItem('token') === null) {
      this.props.goToLogin()
    }
    if (this.props.restaurantOrder.length > 0) {
      const restaurantId = this.props.restaurantOrder[0].restaurantId
      this.props.fetchRestaurant(restaurantId)
    }
    //this.props.getOrder()
    this.props.getProfileDetails()


  }

  handleChangePaymentMethod = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  };

  handleSendOrder = (event) => {
    event.preventDefault()
    this.props.placeOrder(this.state.paymentMethod, this.props.restaurantOrder)
  }

  render() {
    const { restaurantOrder, profile } = this.props;
    return (
      <>
        <MyPageTitle showBack pageTitle='Meu Carrinho' />
        <CPS.PageWrapper>
          <CPS.GreyBox>
            <CPS.AddressLabel>Endereco de Entrega</CPS.AddressLabel>
            <CPS.Address>{profile && profile.address} </CPS.Address>
          </CPS.GreyBox>

          {
            restaurantOrder.products.length === 0 ?
              <CPS.Title>
                <CPS.Text>Carrinho Vazio</CPS.Text>
              </CPS.Title>
              :
              <>
                <RPS.RestaurantData>
                  <RPS.RestaurantName>{restaurantOrder.name}</RPS.RestaurantName>
                  <RPS.RestaurantAdress>{restaurantOrder.address}</RPS.RestaurantAdress>
                  <RPS.RestaurantDataMid>
                    <RPS.RestaurantTimeDeliver>{restaurantOrder.deliveryTime + " min"}</RPS.RestaurantTimeDeliver>
                  </RPS.RestaurantDataMid>
                </RPS.RestaurantData>

                <Divider />
                {
                  restaurantOrder.products.map(product => (
                    <ProductCard key={product.id} product={product} />
                  ))
                }
              </>
          }

          <CPS.TotalContainer>
            <CPS.Freight>Frete: R${restaurantOrder.products.length > 0 ? restaurantOrder.shipping.toFixed(2) : "00.00"}</CPS.Freight>
            <CPS.CashBox>
              <CPS.SubTotal>SUBTOTAL</CPS.SubTotal>
              <CPS.TotalValue>
                R$ {
                  restaurantOrder.products.length > 0 ? (restaurantOrder.products.reduce((acc, product) => (
                    product.quantity * product.price + acc
                  ), 0) + restaurantOrder.shipping).toFixed(2) : "00.00"
                }
              </CPS.TotalValue>
            </CPS.CashBox>
          </CPS.TotalContainer>

          <CPS.PayMethodLabel>Forma de Pagamento</CPS.PayMethodLabel>
          <CPS.LineBreak />

          <CPS.PayMethodContainer>
            <RadioGroup name="paymentMethod" value={this.state.paymentMethod} onChange={this.handleChangePaymentMethod}>
              <FormControlLabel value="money" control={<GreenRadio />} label="Dinheiro" />
              <FormControlLabel value="creditcard" control={<GreenRadio />} label="Cartao" />
            </RadioGroup>
          </CPS.PayMethodContainer>

          <form onSubmit={this.handleSendOrder}>
            <MyButton
              btnText="Confirmar"
              disabled={this.props.restaurantOrder.products.length === 0}
            />
          </form>
        </CPS.PageWrapper>
        <MyBottonNav />
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    restaurantOrder: state.store.restaurantOrder,
    profile: state.profile.profileDetails,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    goToLogin: () => dispatch(push(routes.login)),
    getProfileDetails: () => dispatch(getProfile()),
    fetchRestaurant: (id) => dispatch(fetchRestaurant(id)),
    placeOrder: (paymentMethod, orders) => dispatch(placeOrder(paymentMethod, orders))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartPage);