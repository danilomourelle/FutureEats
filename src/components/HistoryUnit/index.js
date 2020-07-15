import React from 'react';
import { Wrapper, Infos } from './style';

function HistoryUnit(props) {
  const { order } = props;

  const timeTracker = (createdAt) => {
    const date = new Date(parseInt(createdAt, 10));
    const day = date.getDate(); let month; const
      year = date.getFullYear();
    switch (date.getMonth()) {
      case 0:
        month = 'Janeiro';
        break;
      case 1:
        month = 'Fevereiro';
        break;
      case 2:
        month = 'Março';
        break;
      case 3:
        month = 'Abril';
        break;
      case 4:
        month = 'Maio';
        break;
      case 5:
        month = 'Junho';
        break;
      case 6:
        month = 'Julho';
        break;
      case 7:
        month = 'Agosto';
        break;
      case 8:
        month = 'Setembro';
        break;
      case 9:
        month = 'Outubro';
        break;
      case 10:
        month = 'Novembro';
        break;
      case 11:
        month = 'Dezembro';
        break;
      default:
        break;
    }
    return `${day} de ${month} de ${year}`;
  };
  return (
    <Wrapper>
      <Infos>{order.restaurantName}</Infos>
      <Infos>{timeTracker(order.createdAt)}</Infos>
      {order.totalPrice ? (
        <Infos>
          {`SUBTOTAL ${order.totalPrice.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`}
        </Infos>
      ) : <Infos>Valor não encontrado</Infos>}
    </Wrapper>
  );
}

export default HistoryUnit;
