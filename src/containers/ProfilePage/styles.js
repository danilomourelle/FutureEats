import styled from 'styled-components'

export const PageWrapper = styled.div`
  width: 100%;
`
export const ProfileWrapper = styled.div`
  width: 100%;
  height:70px;
  padding: 0 16px;
  display: flex;
  flex-flow: row nowrap;
  justify-content:space-between;
  align-content:space-between;
  & span{
    margin-left:auto;
  }
`
export const InfoWrapper = styled.div`
  display:flex;
  flex-flow:column nowrap;
  justify-content:space-between;
  & p {
    margin: 0;
  }
`
export const AddressWrapper = styled.div`
  width:100%;
  height:76px;
  padding:16px;
  background-color: #eeeeee;
  margin: 16px 0;
  overflow:hidden;
  display:flex;
  flex-flow:row nowrap;
  justify-content:space-between;
  align-content:center;
`
export const ParagraphWrapper = styled(InfoWrapper)`
  & > p:first-child{
    color: #b8b8b8
  }
`
export const IconWrapper = styled.span`
  display:flex;
  justify-content:center;
  align-items:center;
`
export const SubTitle = styled.p`
  margin:0;
  width:100%;
  padding:0 16px;
`
export const Divisor = styled.div`
  width: calc(100% - 32px);
  margin: 8px auto ;
  & hr{
    margin: 0;
  }
`
