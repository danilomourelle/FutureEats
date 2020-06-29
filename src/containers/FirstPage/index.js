import React from 'react'
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { routes } from '../Router'

import styled, { keyframes } from 'styled-components'
import { LogoFutureEats } from '../Autenticacao/style'

const TelaInicial = styled.div`
  width: 360px;
  height: 640px;
  background: #000000;
`
const LogoPageWrapper = styled.div`
  width: 100%;
  padding: 280px 100px;
  animation: fading 4s
}
@keyframes fading{
0%{opacity:0}
100%{opacity:1}
`
class FirstPage extends React.Component {
    constructor(props) {
        super(props)


    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.props.goToLogin(),
            4000
          );
      }


    render() {
        return (
            <TelaInicial>
                <LogoPageWrapper>
                    <LogoFutureEats src={require("../../images/LogoPage/logo-future-eats.png")} />
                </LogoPageWrapper>
            </TelaInicial>
        );
    }
}


const mapDispatchToProps = dispatch => {
    return {
        goToLogin: () => dispatch(push(routes.login)),
        
    }
}

export default connect(null, mapDispatchToProps)(FirstPage);