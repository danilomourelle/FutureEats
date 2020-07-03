import styled from "styled-components";

export const Restaurant = styled.div`
  display:flex;
  flex-direction: column;
  margin-bottom: 16px;
 `
export const TopBar = styled.div`
  height: 64px;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  box-shadow: 0 0.5px 0 0 rgba(0, 0, 0, 0.25);
  background-color: #ffffff;
  display:flex;
  margin-bottom: 17px;
 `
export const Title = styled.div`
  width: 175px;
  height: 44px;
  display:flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  margin-left: 14%;
 `
export const TitleContend = styled.div`
  width: 84px;
  height: 19px;
  font-size: 16px;
  letter-spacing: -0.39px;
  color: #000000;
 `
export const ImageLogoRestaurant = styled.img`  
  object-fit: cover;
  display:flex;
  align-self:center;
  border-radius: 8px 8px 0px 0px;
  width: 90%;
  height: 120px;
 `
export const RestaurantData = styled.div`
  width:90%;
  height: 120px;
  display:flex;
  flex-direction:column;
  align-self:center;
  color: #b8b8b8;
  line-height: normal;
  font-size: 16px;
  letter-spacing: -0.39px;
 `
export const RestaurantDataMid = styled.div`
  margin-top:8px;
  display:flex;
`
export const RestaurantName = styled.div`
  margin-top:8px;
  width: 328px;
  height: 18px;
  color: #5cb646;
 `
export const RestaurantType = styled.div`
  margin-top:8px;
  width: 104px;
  height: 18px;
 `
export const RestaurantTimeDeliver = styled.div`
  width: 104px;
  height: 18px;
 `
export const RestaurantFreight = styled.div`
  width: 104px;
  height: 18px;
 `
export const RestaurantAdress = styled.div`
  margin-top:8px;
  width: 328px;
  height: 18px;
 `
export const DividerTitle = styled.div`
  width: 328px;
  height: 18px;
  font-size: 16px;
  line-height: normal;
  letter-spacing: -0.39px;
  color: #000000;
  margin-left: 16px;
  margin-top: 16px;
  margin-bottom: 8px;
 `
export const Product = styled.div`
  margin: 8px 16px;
  border-radius: 8px;
  border: solid 1px #b8b8b8;
  display:grid;
  align-self:center;
  font-size: 16px;
  grid-template-columns: 1fr 1.5fr 1fr;
  grid-template-rows: 33px 48px 31px;
  grid-template-areas:
  "image nome topCounter"
  "image data data"
  "image preço bottomButtom";
 `
export const ProductImage = styled.img`
  border-radius: 8px 0px 0px 8px;
  width: 100%;
  height:100%;
  object-fit: cover;
  grid-area: image;
 `
export const ProductName = styled.div`
  width: 167px;
  height: 18px;
  line-height: normal;
  letter-spacing: -0.39px;
  color: #5cb646;
  margin-left:16px;
  margin-top:18px;
  grid-area:nome;
 `
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
 `
export const ProductPrice = styled.div`
  width: 118px;
  height: 19px;
  line-height: normal;
  letter-spacing: -0.39px;
  color: #000000;
  margin-left:16px;
  margin-top:4px;
  grid-area:preço;
`
export const ProductAddRemoveBtn = styled.div`
  width: 91px;
  height: 32px;
  justify-self: end;
  border-radius: 8px 0px 8px 0px;
  border: solid 1px;
  border-color: ${props => props.remove ? '#e02020': '#5cb646'};
  grid-area: bottomButtom;
  display:flex;
  justify-content:center;
  align-items:center;
  color: ${props => props.remove ? '#e02020': '#5cb646'};
`
export const RestaurantButtomSubIten = styled.div`
  width: 91px;
  height: 32px;
  border-radius: 8px 0px 8px 0px;
  border: solid 1px #e02020;
  grid-area: bottomButtom;
  display:flex;
  justify-content:center;
`
export const RestaurantButtomSubItenText = styled.div`
  width: 48px;
  height: 14px;
  font-size: 12px;
  letter-spacing: -0.29px;
  text-align: center;
  align-self:center;
  color: #e02020;
`
export const RestaurantCountItens = styled.div`
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
`