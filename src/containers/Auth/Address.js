import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { PageWrapper, FormStyle } from './style';
import { MyInput } from '../../components/material/Inputs';
import MyButton from '../../components/material/Button';
import MyPageTitle from '../../components/PageTitle/pageTitleBar';
import { routes } from '../Router';
import { addressRegisterModifications } from '../../actions/profile';

class AddressRegister extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        street: '',
        number: '',
        neighbourhood: '',
        city: '',
        state: '',
        complement: '',
      },
    };
  }

  componentDidMount() {
    if (localStorage.getItem('token') === null) {
      this.props.goToLogin();
    }
  }

  handleInputValue = (e) => {
    this.setState((prevState) => ({
      form: {
        ...prevState.form,
        [e.target.name]: e.target.value,
      },
    }));
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.setAddress(this.state.form, 'feed');
    this.setState({
      form: {
        street: '',
        number: '',
        neighbourhood: '',
        city: '',
        state: '',
        complement: '',
      },
    });
  }

  render() {
    const {
      street, number, neighbourhood, city, state, complement,
    } = this.state.form;
    return (
      <PageWrapper>
        <MyPageTitle showBack pageTitle="Meu Endereço" />
        <FormStyle onSubmit={this.handleSubmit}>
          <MyInput
            name="street"
            type="text"
            label="Logradouro"
            placeholder="Rua / Av."
            required
            onChange={this.handleInputValue}
            value={street}
          />
          <MyInput
            name="number"
            type="number"
            label="Número"
            placeholder="Número"
            required
            onChange={this.handleInputValue}
            value={number}
          />
          <MyInput
            name="complement"
            type="text"
            label="Complemento"
            placeholder="Apto. / Bloco"
            required
            onChange={this.handleInputValue}
            value={complement}
          />
          <MyInput
            name="neighbourhood"
            type="text"
            label="Bairro"
            placeholder="Bairro"
            required
            onChange={this.handleInputValue}
            value={neighbourhood}
          />
          <MyInput
            name="city"
            type="text"
            label="Cidade"
            placeholder="Cidade"
            required
            onChange={this.handleInputValue}
            value={city}
          />
          <MyInput
            name="state"
            type="text"
            label="Estado"
            placeholder="Estado"
            required
            onChange={this.handleInputValue}
            value={state}
          />
          <MyButton btnText="Salvar" />
        </FormStyle>
      </PageWrapper>
    );
  }
}

const masDispatchToProps = (dispatch) => ({
  setAddress: (form, goto) => dispatch(addressRegisterModifications(form, goto)),
  goToLogin: () => dispatch(push(routes.login)),
});
export default connect(null, masDispatchToProps)(AddressRegister);
