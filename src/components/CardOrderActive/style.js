import styled from 'styled-components';
import { Card, CardContent } from '@material-ui/core';

export const CardOrderProgress = styled(Card)`
    display:grid;
    grid-template-columns: 1fr 1fr 1fr;
    background-color: #5cb646;
    width: 100%;
    height: 118px;
    position: fixed;
    bottom: 56px;
    margin-top: 30%;
`;
export const ContentCardOrder = styled(CardContent)`
    width: 256px;
`;
export const ImgClock = styled.img`
    width: 32px;
    height: 32px;
    object-fit: contain;
    margin: 44px 0 42px 24px;
`;