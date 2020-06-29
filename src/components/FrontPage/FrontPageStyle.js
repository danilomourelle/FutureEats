import styled from "styled-components";
import { createGlobalStyle } from 'styled-components';
export const GlobalStyle = createGlobalStyle`
    body{
        margin: 0;
    }
`
export const Main = styled.div`
height:100vh;
    margin:0;
    background-color:black;
`
export const Test = styled.div`
height:50vh;
width: 50vw;
margin:auto;
display:flex;

`
export const CustomImage = styled.img`
margin-left:auto;
margin-right:auto;
margin-top:auto;
`