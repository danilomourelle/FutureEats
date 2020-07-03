import styled from 'styled-components';
import { Card, Input, CardContent } from '@material-ui/core';

export const InputSearch = styled(Input)`
  width: calc(100% - 32px);
  height: 56px;
  border-radius: 2px;
  border: solid 1px #b8b8b8;
  margin:0 16px;
  `
export const MainWrapper = styled.div`
    width: 100%;
    min-height: 100vh;       
`
export const CardsWrapper = styled.div`
  margin: 8px 16px;
  border-radius: 8px;  
`
export const FilterWrapper = styled.div`
    margin:8px;
    display:flex;
    justify-content:space-evenly;
`
export const CardRestaurant = styled(Card)`
    margin-bottom:8px;
    border-radius: 8px;
    border: solid 1px #b8b8b8;
    width: 100%;
    &:last-of-type{
      margin-bottom:64px;
      // position: absolute;
    }
`

export const InfosContainer = styled.div`
  display:flex;
  justify-content:space-between;
`

export const CardOrderProgress = styled(Card)`
    display:grid;
    grid-template-columns: 1fr 1fr 1fr;
    background-color: #5cb646;
    width: 100%;
    height: 118px;
    position: fixed;
    bottom: 56px;
    margin-top: 30%;
`

export const ContentCardOrder = styled(CardContent)`
    width: 256px;
`

export const ImgClock = styled.img`
    width: 32px;
    height: 32px;
    object-fit: contain;
    margin: 44px 0 42px 24px;
`