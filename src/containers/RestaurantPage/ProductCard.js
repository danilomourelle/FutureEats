import React from 'react'
import * as RPS from './RestaurantPageStyles'
import AlertDialogAddItem from '../../components/Dialog/AlertDialogAddItem'
import { connect } from 'react-redux'
import { delOrder, setOrder, updateOrder } from '../../actions/Order'

class ProductCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      productAddedDetails: undefined,
      openDialog: false,
      quantity: 0
    }
  }

  componentDidMount(){
    this.checkProductAlreadyInOrder(this.props.product.id)
  }
  
  componentDidUpdate(){
    this.checkProductAlreadyInOrder(this.props.product.id)
  }

  checkProductAlreadyInOrder = (thisProductId) => {
    if (this.props.restaurantOrder.products) {
      const productAdded = this.props.restaurantOrder.products.filter(product => (
        product.id === thisProductId
        ))
        if (productAdded.length > 0 && !this.state.productAddedDetails) {
          this.setState({
            productAddedDetails: {...productAdded[0]}
          })
        }
      }
    }

  openDialog = () => {
    this.setState({
      openDialog: true
    })
  }

  setOrder = (quantity) => {
    const { restaurantOrder, restaurantDetails, product, setOrder, updateOrder } = this.props
    if (restaurantOrder.id === restaurantDetails.id) {
      updateOrder({...product, quantity})
    }
    else {
      setOrder({
        ...restaurantDetails,
        products:[{...product, quantity}]
      })
    }
  }

  removeOrder = () => {
    const { product, delOrder } = this.props
    this.setState({productAddedDetails: undefined})
    delOrder(product.id)
  }

  render() {
    const { product } = this.props
    const { productAddedDetails } = this.state
  
    return (
      <RPS.Product key={product.id}>
        <RPS.ProductImage src={product.photoUrl} ></RPS.ProductImage>
        <RPS.ProductName>{product.name}</RPS.ProductName>
        <RPS.ProductIngredients>{product.description}</RPS.ProductIngredients>
        <RPS.ProductPrice>{"R$" + product.price.toFixed(2)}</RPS.ProductPrice>
        {
          productAddedDetails ?
            <>
              <RPS.RestaurantCountItens>{productAddedDetails.quantity}</RPS.RestaurantCountItens>
              <RPS.ProductAddRemoveBtn onClick={this.removeOrder} remove>
                Remover
              </RPS.ProductAddRemoveBtn>
            </> :
            <>
              <RPS.ProductAddRemoveBtn onClick={this.openDialog}>
                Adicionar
              </RPS.ProductAddRemoveBtn>
            </>
        }
        {this.state.openDialog && <AlertDialogAddItem setQuantity={this.setOrder} />}
      </RPS.Product>
    )
  }
}

const mapStateToProps = (state) => ({
  restaurantDetails: state.store.restaurantDetails,
  restaurantOrder: state.store.restaurantOrder,
})

const mapDispatchToProps = (dispatch) => ({
  delOrder: (productId) => dispatch(delOrder(productId)),
  setOrder: (order) => dispatch(setOrder(order)),
  updateOrder: (productId) => dispatch(updateOrder(productId))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductCard)

