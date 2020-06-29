import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  width:calc(100% - 32px);
  height: 102px;
  margin: 0 16px 8px 16px;
  padding:16px;
  border: solid 1px #b8b8b8;
  border-radius: 8px;
  display:flex;
  flex-flow: column wrap;
  justify-content:space-between;
  &:last-of-type{
    margin-bottom:64px;
  }
`
const Infos = styled.p`
  margin:0;
  width:100%;
  &:first-child{
    color:#5cb646;
    font-size:16px;
  }
  &:nth-child(2){
    color: #000;
    font-size:12px
  }
  &:last-child{
    color:#000;
    font-size:18px;
    font-weight:bold;
    line-height:normal;
  }
`


export function HystoryUnit(props) {
  const { order } = props

  const timeTracker = (createdAt) => {
    const date = new Date(parseInt(createdAt, 10));
    let day = date.getDate(), month, year = date.getFullYear()
    switch (date.getMonth()) {
      case 0:
        month = 'Janeiro'
        break;
      case 1:
        month = 'Fevereiro'
        break;
      case 2:
        month = 'Março'
        break;
      case 3:
        month = 'Abril'
        break;
      case 4:
        month = 'Maio'
        break;
      case 5:
        month = 'Junho'
        break;
      case 6:
        month = 'Julho'
        break;
      case 7:
        month = 'Agosto'
        break;
      case 8:
        month = 'Setembro'
        break;
      case 9:
        month = 'Outubro'
        break;
      case 10:
        month = 'Novembro'
        break;
      case 11:
        month = 'Dezembro'
        break;
      default:
        break;
    }
    return `${day} de ${month} de ${year}`
  }
  return (
    <Wrapper>
      <Infos>{order.restaurantName}</Infos>
      <Infos>{timeTracker(order.createdAt)}</Infos>
      {order.totalPrice ? <Infos>{'SUBTOTAL ' + order.totalPrice.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} </Infos> : <Infos>Valor não encontrado</Infos>}
    </Wrapper>
  )
}

export default HystoryUnit