import React from 'react';
import { CardOrderProgress, ContentCardOrder, ImgClock } from './styles';
import { Typography } from '@material-ui/core';

function CardOrder(props) {
  return (
    <div>
      <CardOrderProgress>
        <ImgClock src={require('../../images/clock.svg')} alt="clock" />
        <ContentCardOrder>
          <Typography variant="subtitle1" color="secondary">Pedido em Andamento</Typography>
          <Typography variant="subtitle1">{props.activeOrder.restaurantName}</Typography>
          <Typography variant="h6">SUBTOTAL R$ {props.activeOrder.totalPrice.toFixed(2)} </Typography>
        </ContentCardOrder>
      </CardOrderProgress>
    </div>
  )
}

export default CardOrder;