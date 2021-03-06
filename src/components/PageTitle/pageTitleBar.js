import React from 'react';
import styled from 'styled-components';
import { goBack, push } from 'connected-react-router';
import { connect } from 'react-redux';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { routes } from '../../containers/Router';

const Wrapper = styled.div`
  width:100%;
  height: 44px;
  padding:10px 16px;
  display:flex;
  box-shadow: 0 0.5px 0 0 rgba(0, 0, 0, 0.25);
  margin-bottom:16px;
`;
const IconWrapper = styled.span`
  width:23px;
  height:24px;
  display: flex;
  justify-content:center;
  align-items:center;
`;
const PageTitle = styled.h3`
  flex-grow:1;
  text-align:center;
  margin:0;
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  letter-spacing: -0.39px;
  text-align: center;
  display: flex;
  justify-content:center;
  align-items:center;
`;

function MyPageTitle(props) {
  return (
    <Wrapper>
      {
        props.showBack &&
        <IconWrapper onClick={props.goBack}>
          <ArrowBackIosIcon fontSize="small" />
        </IconWrapper>
      }
      <PageTitle>
        {props.pageTitle}
      </PageTitle>
      {
        props.logout &&
        <IconWrapper onClick={props.goToLogin}>
          Sair
        </IconWrapper>
      }
    </Wrapper>
  );
}

const mapDispatchToProps = (dispatch) => ({
  goBack: () => dispatch(goBack()),
  goToLogin: () => dispatch(push(routes.login)),
});

export default connect(null, mapDispatchToProps)(MyPageTitle);
