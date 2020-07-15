import React from 'react';
import { connect } from 'react-redux';
import * as P from './style';
import AlertDialogAddItem from '../Dialog';
import { delOrder, setOrder, updateOrder } from '../../actions/order';
import { setDialog } from '../../actions/app';

class ProductCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productAddedDetails: undefined,
    };
  }

  componentDidMount() {
    this.checkProductAlreadyInOrder(this.props.product.id);
  }

  componentDidUpdate() {
    this.checkProductAlreadyInOrder(this.props.product.id);
  }

  checkProductAlreadyInOrder = (thisProductId) => {
    const { products } = this.props.order
    if (products.length > 0) {
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

  handleDialog = (status, id) => {
    const { setDialog } = this.props
    setDialog({
      status,
      productId: id,
    })
  }

  setOrder = (quantity) => {
    const {
      order, restaurantDetails, product, setCurrentOrder, updateCurrentOrder,
    } = this.props;
    if (order.restaurant && order.restaurant.id === restaurantDetails.id) {
      updateCurrentOrder({ ...product, quantity });
    } else {
      const { products, ...newRestaurantDetails } = restaurantDetails
      setCurrentOrder({
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
    const { product, dialog } = this.props;
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
                <P.ProductAddRemoveBtn onClick={() => this.handleDialog(true, product.id)}>
                  Adicionar
                </P.ProductAddRemoveBtn>
              </>
            )
        }
        {
          (dialog.status && dialog.productId === product.id) &&
          <AlertDialogAddItem
            product={product}
            setQuantity={this.setOrder}
            handleDialog={this.handleDialog}
          />
        }
      </P.Product>
    );
  }
}

const mapStateToProps = (state) => ({
  restaurantDetails: state.restaurant.restaurantDetails,
  order: state.order.currentOrder,
  dialog: state.app.dialog,
});

const mapDispatchToProps = (dispatch) => ({
  deleteOrder: (productId) => dispatch(delOrder(productId)),
  setCurrentOrder: (order) => dispatch(setOrder(order)),
  updateCurrentOrder: (productId) => dispatch(updateOrder(productId)),
  setDialog: (status) => dispatch(setDialog(status)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductCard);
