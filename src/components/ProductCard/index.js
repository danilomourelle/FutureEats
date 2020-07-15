import React from 'react';
import { connect } from 'react-redux';
import * as P from './style';
import AlertDialogAddItem from '../Dialog';
import { delOrder, setOrder, updateOrder } from '../../actions/order';

class ProductCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productAddedDetails: undefined,
      openDialog: false,
    };
  }

  componentDidMount() {
    this.checkProductAlreadyInOrder(this.props.product.id);
  }

  componentDidUpdate() {
    this.checkProductAlreadyInOrder(this.props.product.id);
  }

  checkProductAlreadyInOrder = (thisProductId) => {
    if (this.props.order.products) {
      const productAdded = this.props.order.products.filter((product) => (
        product.id === thisProductId
      ));
      if (productAdded.length > 0 && !this.state.productAddedDetails) {
        this.setState({
          productAddedDetails: { ...productAdded[0] },
        });
      }
    }
  }

  openDialog = () => {
    this.setState({
      openDialog: true,
    });
  }

  setOrder = (quantity) => {
    const {
      order, restaurantDetails, product, setNewOrder, updateCurrentOrder,
    } = this.props;
    if (order.restaurant.id === restaurantDetails.id) {
      updateCurrentOrder({ ...product, quantity });
    } else {
      const { products, ...newRestaurantDetails } = restaurantDetails
      setNewOrder({
        restaurant: { ...newRestaurantDetails },
        products: [{ ...product, quantity }],
      });
    }
  }

  removeOrder = () => {
    const { product, deleteOrder } = this.props;
    this.setState({ productAddedDetails: undefined });
    deleteOrder(product.id);
  }

  render() {
    const { product } = this.props;
    const { productAddedDetails } = this.state;

    return (
      <P.Product key={product.id}>
        <P.ProductImage src={product.photoUrl} />
        <P.ProductName>{product.name}</P.ProductName>
        <P.ProductIngredients>{product.description}</P.ProductIngredients>
        <P.ProductPrice>{`R$${product.price.toFixed(2)}`}</P.ProductPrice>
        {
          productAddedDetails
            ? (
              <>
                <P.ProductQuantityAdded>{productAddedDetails.quantity}</P.ProductQuantityAdded>
                <P.ProductAddRemoveBtn onClick={this.removeOrder} remove>
                  Remover
                </P.ProductAddRemoveBtn>
              </>
            )
            : (
              <>
                <P.ProductAddRemoveBtn onClick={this.openDialog}>
                  Adicionar
                </P.ProductAddRemoveBtn>
              </>
            )
        }
        {this.state.openDialog && <AlertDialogAddItem setQuantity={this.setOrder} />}
      </P.Product>
    );
  }
}

const mapStateToProps = (state) => ({
  restaurantDetails: state.restaurant.restaurantDetails,
  order: state.order.order,
});

const mapDispatchToProps = (dispatch) => ({
  deleteOrder: (productId) => dispatch(delOrder(productId)),
  setOrder: (order) => dispatch(setOrder(order)),
  updateCurrentOrder: (productId) => dispatch(updateOrder(productId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductCard);
