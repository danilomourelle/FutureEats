import React from 'react';
import { CardRestaurant, InfosContainer } from './styles'

import { connect } from 'react-redux';
import { goToRestaurantDetail } from '../../actions/GetRestaurantDetailsAction';

import { makeStyles } from '@material-ui/core/styles';
import { CardActionArea, CardContent, CardMedia, Typography } from '@material-ui/core';


const useStyles = makeStyles({
  root: {
    // maxWidth: 345,
  },
  media: {
    height: 140,

  },
});

function CardsRestaurants(props) {
  const classes = useStyles();
  const { restaurant } = props

  const handdleOpenRestaurant = () => {
    if (!props.activeOrder) {
      props.goToRestaurantDetail(restaurant.id)
    }
  }
  return (
    <CardRestaurant className={classes.root} key={restaurant.id}>
      <div onClick={handdleOpenRestaurant}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={restaurant.logoUrl}
            title={restaurant.name}
          />
          <CardContent>
            <Typography gutterBottom variant="h6" color="primary">
              {restaurant.name}
            </Typography>
            <InfosContainer>
              <Typography variant="body2" color="textSecondary" component="p">
                {restaurant.deliveryTime + " min"}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {"Frete R$" + restaurant.shipping.toFixed(2)}
              </Typography>
            </InfosContainer>
          </CardContent>
        </CardActionArea>
      </div>
    </CardRestaurant>
  );
}


const mapStateToProps = (state) => {
  return {
    restaurantList: state.store.restaurantList,
    activeOrder: state.store.activeOrder
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    goToRestaurantDetail: (id) => dispatch(goToRestaurantDetail(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardsRestaurants)