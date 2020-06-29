import styled from 'styled-components';
import { Card, Input } from '@material-ui/core';

export const InputSearch = styled(Input)`
  width: 328px;
  height: 56px;
  border-radius: 2px;
  border: solid 1px #b8b8b8;
  margin:0 16px;
  padding:17px;
  `
export const MainWrapper = styled.div`
    /* width: calc(100vw - 14px);; */
    height: 640px;       
`
export const CardsWrapper = styled.div`
  margin:8px 16px;
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
  width:328px;
  &:last-of-type{
    margin-bottom:64px;
  }
`

export const InfosContainer = styled.div`
  display:flex;
  justify-content:space-between;
`