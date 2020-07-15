import React from 'react';
import { push } from 'connected-react-router';
import { connect } from 'react-redux';
import {
  PageWrapper, ProfileWrapper, AddressWrapper,
  IconWrapper, SubTitle, Divisor, ParagraphWrapper,
  InfoWrapper,
  NoOrderParagraph,
} from './styles';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import MyPageTitle from '../../components/PageTitle/pageTitleBar';
import HistoryUnit from '../../components/HistoryUnit';
import MyBottomNav from '../../components/material/BottomNav';
import { routes } from '../Router';
import { getProfile, getOrderHistory } from '../../actions/profile';
import { setBottomNav} from '../../actions/app'

class Profile extends React.Component {
  componentDidMount() {
    if (localStorage.getItem('token') === null) {
      this.props.goToLogin();
    } else {
      this.props.profile || this.props.getProfileDetails();
      this.props.history || this.props.getOrdersHistory();
      this.props.setBottomNav('profile')
    }
  }

  handleHistory = () => {
    const { history } = this.props;
    if (history) {
      if (history.length > 0) {
        return history.map((order, index) => (
          <HistoryUnit key={index} order={order} />
        ));
      }
      return <NoOrderParagraph>Você não realizou nenhum pedido</NoOrderParagraph>;
    }
    return null;
  }

  render() {
    const { profile } = this.props;
    return (
      <PageWrapper>
        <MyPageTitle logout pageTitle="Meu perfil" />
        <ProfileWrapper>
          {profile
            && (
              <InfoWrapper>
                <p>{profile.name}</p>
                <p>{profile.email}</p>
                <p>{profile.cpf}</p>
              </InfoWrapper>
            )}
          <span role="button" tabIndex="0" onClick={this.props.goToEditProfile}>
            <EditOutlinedIcon />
          </span>
        </ProfileWrapper>
        <AddressWrapper>
          <ParagraphWrapper>
            <p>Endereço cadastrado</p>
            {profile && <p>{profile.address}</p>}
          </ParagraphWrapper>
          <IconWrapper onClick={this.props.goToEditAddress}>
            <EditOutlinedIcon />
          </IconWrapper>
        </AddressWrapper>
        <SubTitle>Histórico de pedidos</SubTitle>
        <Divisor>
          <hr />
        </Divisor>
        {this.handleHistory()}
        <MyBottomNav />
      </PageWrapper>
    );
  }
}

const mapStateToProps = (state) => ({
  profile: state.profile.profileDetails,
  history: state.profile.profileOrderHistory,
});

const mapDispatchToProps = (dispatch) => ({
  goToLogin: () => dispatch(push(routes.login)),
  goToEditProfile: () => dispatch(push(routes.editProfile)),
  goToEditAddress: () => dispatch(push(routes.editAddress)),
  getProfileDetails: () => dispatch(getProfile()),
  getOrdersHistory: () => dispatch(getOrderHistory()),
  setBottomNav: (actualPlace) => dispatch(setBottomNav(actualPlace)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
