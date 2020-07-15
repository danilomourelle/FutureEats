import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { withStyles } from '@material-ui/core/styles';
import { Divider } from '@material-ui/core';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { routes } from '../Router';
import * as CPS from './style';
import * as RPS from '../RestaurantPage/style';
import MyPageTitle from '../../components/PageTitle/pageTitleBar';
import MyBottomNav from '../../components/material/BottomNav';
import { getProfile } from '../../actions/profile';
import { placeOrder } from '../../actions/order';
import ProductCard from '../../components/ProductCard/index';
import MyButton from '../../components/material/Button';

const GreenRadio = withStyles({
  root: {
    color: '#5cb646',
    '&$checked': {
      color: '#5cb646',
    },
  },
  checked: {},
})((props) => <Radio color="default" {...props} />);

class CartPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      paymentMethod: 'money',
    };
  }

  componentDidMount() {
    if (localStorage.getItem('token') === null) {
      this.props.goToLogin();
    }
    if (this.props.order.products.length > 0) {
      const { restaurantId } = this.props.restaurantOrder[0];
      this.props.fetchRestaurant(restaurantId);
    }
    // this.props.getOrder()
    this.props.getProfileDetails();
  }

  handleChangePaymentMethod = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSendOrder = (event) => {
    event.preventDefault();
    this.props.placeOrder(this.state.paymentMethod, this.props.restaurantOrder);
  }

  render() {
    const { order, profile } = this.props;
    const { restaurant, products } = order
    return (
      <>
        <MyPageTitle showBack pageTitle="Meu Carrinho" />
        <CPS.PageWrapper>
          <CPS.GreyBox>
            <CPS.AddressLabel>Endereço de Entrega</CPS.AddressLabel>
            <CPS.Address>
              {profile && profile.address}
            </CPS.Address>
          </CPS.GreyBox>

          {
            products.length === 0
              ? (
                <CPS.Title>
                  <CPS.Text>Carrinho Vazio</CPS.Text>
                </CPS.Title>
              )
              : (
                <>
                  <RPS.RestaurantData>
                    <RPS.RestaurantName>{restaurant.name}</RPS.RestaurantName>
                    <RPS.RestaurantAddress>{restaurant.address}</RPS.RestaurantAddress>
                    <RPS.RestaurantDataMid>
                      <RPS.RestaurantTimeDeliver>{`${restaurant.deliveryTime} min`}</RPS.RestaurantTimeDeliver>
                    </RPS.RestaurantDataMid>
                  </RPS.RestaurantData>

                  <Divider />
                  {
                    products.map((product) => (
                      <ProductCard key={product.id} product={product} />
                    ))
                  }
                </>
              )
          }

          <CPS.TotalContainer>
            <CPS.Freight>
              Frete: R$
              {products.length > 0 ? restaurant.shipping.toFixed(2) : '00.00'}
            </CPS.Freight>
            <CPS.CashBox>
              <CPS.SubTotal>SUBTOTAL</CPS.SubTotal>
              <CPS.TotalValue>
                R$
                {products.length > 0
                  ? (products.reduce((acc, product) => (
                    product.quantity * product.price + acc
                  ), 0) + restaurant.shipping).toFixed(2)
                  : '00.00'}
              </CPS.TotalValue>
            </CPS.CashBox>
          </CPS.TotalContainer>

          <CPS.PayMethodLabel>Forma de Pagamento</CPS.PayMethodLabel>
          <CPS.LineBreak />

          <CPS.PayMethodContainer>
            <RadioGroup name="paymentMethod" value={this.state.paymentMethod} onChange={this.handleChangePaymentMethod}>
              <FormControlLabel value="money" control={<GreenRadio />} label="Dinheiro" />
              <FormControlLabel value="creditcard" control={<GreenRadio />} label="Cartão" />
            </RadioGroup>
          </CPS.PayMethodContainer>

          <form onSubmit={this.handleSendOrder}>
            <MyButton
              btnText="Confirmar"
              disabled={products.length === 0}
            />
          </form>
        </CPS.PageWrapper>
        <MyBottomNav />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  order: state.order.order,
  profile: state.profile.profileDetails,
});

const mapDispatchToProps = (dispatch) => ({
  goToLogin: () => dispatch(push(routes.login)),
  getProfileDetails: () => dispatch(getProfile()),
  placeOrder: (paymentMethod, orders) => dispatch(placeOrder(paymentMethod, orders)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartPage);
