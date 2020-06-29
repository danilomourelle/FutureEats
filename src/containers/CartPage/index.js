import React, { Component } from "react";
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { routes } from '../Router'
import * as CPS from './CartPageStyles'
import * as RPS from '../../components/Restaurant Page/RestaurantPageStyles'
import MyPageTitle from '../../components/pageTitleBar'
import MyBottonNav from '../../components/material/BottomNav';
import { getProfile } from '../../actions/profile'
import { fetchRestaurant } from '../../actions/GetRestaurantDetailsAction'
import { Divider } from "@material-ui/core";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { withStyles } from '@material-ui/core/styles';
import {placeOrder} from '../../actions/SetOrder'


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

    handleInputValue = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleChangePaymentMethod = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    };
    handleSendOrder = ()=>{
        this.props.placeOrder(this.state.paymentMethod,this.props.restaurantOrder)
    }



    render() {
        const { restaurantDetails } = this.props;
        let orderValue = 0;
        if (restaurantDetails.id === null || restaurantDetails.id === undefined || restaurantDetails.id === "") {
            return (
                <CPS.PageWrapper>
                    <MyPageTitle showBack pageTitle='Meu Carrinho' />
                    <CPS.GreyBox>
                        <CPS.AddressLabel>Endereco de Entrega</CPS.AddressLabel>
                        <CPS.Address>{this.props.profile && this.props.profile.address} </CPS.Address>
                    </CPS.GreyBox>

                    <CPS.Title>
                        <CPS.Text>Carrinho Vazio</CPS.Text>
                    </CPS.Title>

                    <CPS.TotalContainer>
                        <CPS.Freight>Frete: R$ 34,50</CPS.Freight>
                        <CPS.SubTotal>SUBTOTAL</CPS.SubTotal>
                        <CPS.TotalValue>R$00.00</CPS.TotalValue>
                    </CPS.TotalContainer>

                    <CPS.PayMethodLabel>Forma de Pagamento</CPS.PayMethodLabel>

                    <CPS.LineBreak />

                    <CPS.PayMethodContainer>
                        <RadioGroup name="paymentMethod" value={this.state.paymentMethod} onChange={this.handleChangePaymentMethod}>
                            <FormControlLabel value="dinheiro" control={<GreenRadio />} label="Dinheiro" />
                            <FormControlLabel value="cartao" control={<GreenRadio />} label="Cartao" />
                        </RadioGroup>
                    </CPS.PayMethodContainer>

                    <CPS.ConfirmButton>Confirmar</CPS.ConfirmButton>

                    <MyBottonNav />
                </CPS.PageWrapper>
            );
        }
        else {
            return (
                <CPS.PageWrapper>
                    <MyPageTitle showBack pageTitle='Meu Carrinho' />
                    <CPS.GreyBox>
                        <CPS.AddressLabel>Endereco de Entrega</CPS.AddressLabel>
                        <CPS.Address>{this.props.profile && this.props.profile.address} </CPS.Address>
                    </CPS.GreyBox>
                    <RPS.Restaurant>
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
                                                orderValue += (product.price * item.quantity)
                                                return (
                                                    <RPS.RestaurantCountItens><RPS.RestaurantCounterItensText>{item.quantity}</RPS.RestaurantCounterItensText></RPS.RestaurantCountItens>
                                                )
                                            }
                                        })}
                                        <RPS.RestaurantButtomSubIten onClick={() => this.props.delOrder(product.id)}><RPS.RestaurantButtomSubItenText>Remover</RPS.RestaurantButtomSubItenText></RPS.RestaurantButtomSubIten>
                                    </RPS.RestaurantItem>
                                )
                            }
                        })}
                    </RPS.Restaurant>
                    <CPS.TotalContainer>
                        <CPS.Freight>{"Frete R$" + restaurantDetails.shipping.toFixed(2)}</CPS.Freight>
                        <CPS.SubTotal>SUBTOTAL</CPS.SubTotal>
                        <CPS.TotalValue>R${orderValue.toFixed(2)}</CPS.TotalValue>
                    </CPS.TotalContainer>

                    <CPS.PayMethodLabel>Forma de Pagamento</CPS.PayMethodLabel>

                    <CPS.LineBreak />

                    <CPS.PayMethodContainer>
                        <RadioGroup name="paymentMethod" value={this.state.paymentMethod} onChange={this.handleChangePaymentMethod}>
                            <FormControlLabel value="money" control={<GreenRadio />} label="Dinheiro" />
                            <FormControlLabel value="creditcard" control={<GreenRadio />} label="Cartao" />
                        </RadioGroup>
                    </CPS.PayMethodContainer>

                    <CPS.ConfirmButton onClick={()=>this.handleSendOrder()}>Confirmar</CPS.ConfirmButton>

                    <MyBottonNav />
                </CPS.PageWrapper>
            );
        }

    }
}

const mapStateToProps = (state) => {
    return {
        restaurantOrder: state.store.restaurantOrder,
        restaurantDetails: state.store.restaurantDetails,
        profile: state.profile.profileDetails,

    }
};

const mapDispatchToProps = dispatch => {
    return {
        goToLogin: () => dispatch(push(routes.login)),
        getProfileDetails: () => dispatch(getProfile()),
        fetchRestaurant: (id) => dispatch(fetchRestaurant(id)),
        placeOrder: (paymentMethod,orders) => dispatch(placeOrder(paymentMethod,orders))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartPage);