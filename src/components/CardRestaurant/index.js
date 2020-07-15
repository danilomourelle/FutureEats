import React from 'react';
import { connect } from 'react-redux';
import { CardRestaurant, InfosContainer } from './style';
import { makeStyles } from '@material-ui/core/styles';
import { CardActionArea, CardContent, CardMedia, Typography, } from '@material-ui/core';
import { getRestaurantDetails } from '../../actions/restaurant';

const useStyles = makeStyles({
  media: {
    height: 140,
  },
});

function CardsRestaurants(props) {
  const classes = useStyles();
  const { restaurant } = props;

  const handleOpenRestaurant = () => {
    if (!props.activeOrder) {
      props.goToRestaurantDetail(restaurant.id);
    }
  };
  return (
    <CardRestaurant key={restaurant.id}>
      <div role="button" tabIndex="0" onClick={handleOpenRestaurant}>
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
                {`${restaurant.deliveryTime} min`}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {`Frete R$${restaurant.shipping.toFixed(2)}`}
              </Typography>
            </InfosContainer>
          </CardContent>
        </CardActionArea>
      </div>
    </CardRestaurant>
  );
}

const mapStateToProps = (state) => ({
  activeOrder: state.order.activeOrder,
});

const mapDispatchToProps = (dispatch) => ({
  goToRestaurantDetail: (id) => dispatch(getRestaurantDetails(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CardsRestaurants);
