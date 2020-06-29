import React from 'react'
import styled from 'styled-components'
import { Button } from '@material-ui/core'


const Wrapper = styled.div`
  width:100%;
  padding:0 16px;
`
const StyledButton = styled(Button)`
  height:42px;
  border-radius:2px;
  text-transform: none;
  font-size:16px;
  letter-spacing: -0.39px;
  margin: 8px 0;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
`

export function MyButton(props) {
  return (
    <Wrapper>
      <StyledButton
        color="primary"
        type='submit'
        disableElevation={true}
        fullWidth
        variant='contained'
        disabled={props.disabled}
      >
        {props.btnText}
      </StyledButton>
    </Wrapper>
  )
}

export default MyButton