import styled from 'styled-components'

export const PageWrapper = styled.div`
  width: 100%;
  height: calc(100vh - 16px);
  display:flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`
export const FormStyle = styled.form`
  width: 100%;
`
export const LogoFutureEats = styled.img`
  padding: 15px;
`
export const Text = styled.p`
  width:100%;
  padding: 0 16px;
  text-align:center;
  span{
    color:#5cb646;
    font-weight:bold;
    cursor: pointer;
  }
`