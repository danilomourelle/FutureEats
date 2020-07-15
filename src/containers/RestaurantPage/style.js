import styled from 'styled-components';

export const Restaurant = styled.div`
  display:flex;
  flex-direction: column;
  margin-bottom: 16px;
 `;
export const TopBar = styled.div`
  height: 64px;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  box-shadow: 0 0.5px 0 0 rgba(0, 0, 0, 0.25);
  background-color: #ffffff;
  display:flex;
  margin-bottom: 17px;
 `;
export const Title = styled.div`
  width: 175px;
  height: 44px;
  display:flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  margin-left: 14%;
 `;
export const TitleContend = styled.div`
  width: 84px;
  height: 19px;
  font-size: 16px;
  letter-spacing: -0.39px;
  color: #000000;
 `;
export const ImageLogoRestaurant = styled.img`  
  object-fit: cover;
  display:flex;
  align-self:center;
  border-radius: 8px 8px 0px 0px;
  width: 90%;
  height: 120px;
 `;
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
 `;
export const RestaurantDataMid = styled.div`
  margin-top:8px;
  display:flex;
`;
export const RestaurantName = styled.div`
  margin-top:8px;
  width: 328px;
  height: 18px;
  color: #5cb646;
 `;
export const RestaurantType = styled.div`
  margin-top:8px;
  width: 104px;
  height: 18px;
 `;
export const RestaurantTimeDeliver = styled.div`
  width: 104px;
  height: 18px;
 `;
export const RestaurantFreight = styled.div`
  width: 104px;
  height: 18px;
 `;
export const RestaurantAddress = styled.div`
  margin-top:8px;
  width: 328px;
  height: 18px;
 `;
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
 `;
