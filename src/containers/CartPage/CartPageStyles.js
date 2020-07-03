import styled from "styled-components";

export const PageWrapper = styled.div`
  width: 100%;
  height: 100%;
  display:flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-top: -15px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 40%;
`

export const Bar = styled.div`
  width: 100%;
  height: 10%;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  box-shadow: 0 0.5px 0 0 rgba(0, 0, 0, 0.25);
  background-color: #ffffff;
  text-align: center;
  padding-top: 4%;
`

export const GreyBox = styled.div`
  width: 100%;
  height: 12%;
  background-color: #eeeeee;
`

export const AddressLabel = styled.p`
  width: 100%;
  height: 10%;
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: #b8b8b8;
  margin-left: 5%;
`

export const Address = styled.p`
  width: 91%;
  height: 3%;
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: #000000;
  margin-left: 5%;
`

export const Title = styled.div`
  width: 100%;
  height: 10%;
`

export const Text = styled.h4`
  width: 100%;
  height: 40%;
  opacity: 0.89;
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  text-align: center;
  color: #000000;
`

export const TotalContainer = styled.div`
    height: 17%;
    width: 100%;
    padding-left: 5%;
    padding-right: 5%;
    margin: 0;
`

export const Freight = styled.p`
  width: 50%;
  height: 30%;
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  text-align: right;
  color: #000000;
  margin-bottom: 0;
  margin-left: 50%;
`

export const SubTotal = styled.span`
  font-family: Roboto;
  font-size: 16px;
  letter-spacing: -0.39px;
  color: #000000;
`

export const TotalValue = styled.span`
  font-family: Roboto;
  font-size: 18px;
  font-weight: bold;
  letter-spacing: -0.43px;
  color: #5cb646;
`

export const PayMethodLabel = styled.p`
  width: 92%;
  height: 3%;
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: #000000;
  padding: 0;
  margin: 0;
  margin-left: 5%;
`

export const LineBreak = styled.hr`
  width: 92%;
  height: 0.1%;
  border: solid 1px #000000;
`

export const PayMethodContainer = styled.div`
    width: 80%;
    height: 10%;
    margin-left: auto;
    margin-right: auto;
`

export const ConfirmButton = styled.button`
  width: 92%;
  height: 42px;
  border-radius: 8px;
  background-color: rgba(92, 182, 70, 0.5);
  margin-top: 14.5%;
`

export const Footer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    border-top: solid black 1px;
    margin-top: 5%;
    height: 11%;
`

export const FooterIcon = styled.img`
    margin: auto;
    height: 40%;
    width: 30%;
`

export const CashBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 5% 0;
  align-items: baseline;
`