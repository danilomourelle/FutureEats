import styled from 'styled-components';

export const Product = styled.div`
margin: 8px 16px;
border-radius: 8px;
border: solid 1px #b8b8b8;
display:grid;
align-self:center;
font-size: 16px;
grid-template-columns: 1fr 1.5fr 91px;
grid-template-rows: 50px 48px 31px;
grid-template-areas:
"image nome topCounter"
"image data data"
"image preço bottomButton";
`;
export const ProductImage = styled.img`
border-radius: 8px 0px 0px 8px;
width: 100%;
height:100%;
object-fit: cover;
grid-area: image;
`;
export const ProductName = styled.div`
height: 18px;
line-height: normal;
letter-spacing: -0.39px;
color: #5cb646;
margin-left:16px;
margin-top:18px;
grid-area:nome;
`;
export const ProductIngredients = styled.div`
width: 200px;
height: 30px;
font-size: 12px;
line-height: normal;
letter-spacing: -0.29px;
color: #b8b8b8;
margin-left:16px;
margin-top:8px;
grid-area:data;
`;
export const ProductPrice = styled.div`
width: 118px;
height: 19px;
line-height: normal;
letter-spacing: -0.39px;
color: #000000;
margin-left:16px;
margin-top:4px;
grid-area:preço;
`;
export const ProductAddRemoveBtn = styled.div`
width: 91px;
height: 32px;
justify-self: end;
border-radius: 8px 0px 8px 0px;
border: solid 1px;
border-color: ${(props) => (props.remove ? '#e02020' : '#5cb646')};
grid-area: bottomButton;
display:flex;
justify-content:center;
align-items:center;
color: ${(props) => (props.remove ? '#e02020' : '#5cb646')};
`;


export const ProductQuantityAdded = styled.div`
width: 33px;
height: 33px;
border-radius: 0px 8px 0px 8px;
justify-self: end;
border: solid 1px #5cb646;
grid-area: topCounter;
display:flex;
justify-content:center;
align-items: center;
color: #5cb646;
position: relative;
right: -1px;
top: -1px;
`;