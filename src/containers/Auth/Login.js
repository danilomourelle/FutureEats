import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { PageWrapper, FormStyle, LogoFutureEats, Text, } from './style';
import MyButton from '../../components/material/Button';
import { MyPasswordInput, MyInput } from '../../components/material/Inputs';
import { routes } from '../Router';
import { login } from '../../actions/profile';

const logo = require('../../images/LogoPage/logo-future-eats-invert.png');

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        password: '',
        email: '',
      },
    };
  }

  componentDidMount() {
    if (localStorage.getItem('token') !== null) {
      localStorage.removeItem('token')
    }
  }

  handleInputValue = (e) => {
    const { name, value } = e.target
    this.setState((prevState) => ({
      form: {
        ...prevState.form,
        [name]: value,
      },
    }));
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { form } = this.state;
    this.props.login(form);
    this.setState({
      form: {
        password: '',
        email: '',
      },
    });
  }

  handleSignUp = () => {
    window.localStorage.removeItem('token');
    this.props.goToRegisterPage();
  }

  render() {
    return (
      <PageWrapper>
        <LogoFutureEats src={logo} />
        <h3>Entrar</h3>
        <FormStyle onSubmit={this.handleSubmit}>
          <MyInput
            name="email"
            type="email"
            label="Email"
            placeholder="email@email.com"
            required
            onChange={this.handleInputValue}
            value={this.state.form.email}
          />
          <MyPasswordInput
            name="password"
            id="password"
            label="Senha"
            placeholder="Mínimo 6 caracteres"
            required
            onChange={this.handleInputValue}
            value={this.state.form.password}
          />
          <MyButton btnText="Entrar" />
        </FormStyle>
        <Text>
          Não possui cadastro?
          <span role="button" tabIndex="0" onClick={this.handleSignUp}> Clique aqui</span>
        </Text>
      </PageWrapper>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  goToRegisterPage: () => dispatch(push(routes.register)),
  login: (form) => dispatch(login(form)),
});

export default connect(null, mapDispatchToProps)(LoginPage);
