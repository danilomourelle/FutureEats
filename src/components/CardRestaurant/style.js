import styled from 'styled-components';
import { Card } from '@material-ui/core';

export const CardRestaurant = styled(Card)`
    margin-bottom:8px;
    border-radius: 8px;
    border: solid 1px #b8b8b8;
    width: 100%;
    &:last-of-type{
      margin-bottom:64px;
      // position: absolute;
    }
`;
export const InfosContainer = styled.div`
  display:flex;
  justify-content:space-between;
`;