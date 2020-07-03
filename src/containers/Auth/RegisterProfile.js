import React, { Component } from "react";
import { connect } from "react-redux";
import { replace } from "connected-react-router";
import { routes } from "../../containers/Router";
import { signup } from '../../actions/profile'
import MyButton from "../../components/material/Button";
import { MyInput, MyPasswordInput } from "../../components/material/Inputs";
import MyPageTitle from "../../components/pageTitleBar";
import { PageWrapper, FormStyle, LogoFutureEats } from "./style"

class RegisterPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      form: {
        name: '',
        email: '',
        cpf: '',
        password: '',
      },
      passwordConfirm: '',
      passwordNotMatch: false
    }
  }

 componentDidMount() {
    if (localStorage.getItem('token') != null) {
      this.props.goToFeed()
    }
  } 

  handleInputValue = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    })
  }

  handleInpuPasswordConfirm = (e) => {
    this.setState({
      passwordConfirm: e.target.value
    })
  }


  handleSubmit = (e) => {
    e.preventDefault()
    const { form, passwordConfirm } = this.state
    if (form.password === passwordConfirm) {
      this.props.signup(form)
      this.setState({
        form: {
          name: '',
          email: '',
          cpf: '',
          password: '',
        }
      })
      this.props.goToAddress()
    }else{
      this.setState({
        passwordNotMatch: true
      })
    }
  }

  render() {
    return (
      <PageWrapper>
        <MyPageTitle showBack pageTitle='Cadastrar' />
        <LogoFutureEats src={require("../../images/LogoPage/logo-future-eats-invert.png")} />
        <FormStyle onSubmit={this.handleSubmit}>
          <MyInput
            name="name"
            type="text"
            label="Nome"
            placeholder="Nome e Sobrenome"
            required={true}
            onChange={this.handleInputValue}
            value={this.state.form.name} />
          <MyInput
            name="email"
            type="email"
            label="Email"
            placeholder="email@email.com"
            required={true}
            onChange={this.handleInputValue}
            value={this.state.form.email} />
          <MyInput
            name="cpf"
            type="text"
            label="CPF"
            placeholder="000.000.000-00"
            pattern={'[0-9]{3}\.[0-9]{3}\.[0-9]{3}\-[0-9]{2}'}
            title='CPF: 111.222.333-44'
            required={true}
            onChange={this.handleInputValue}
            value={this.state.form.cpf} />
          <MyPasswordInput
            name="password"
            id="password"
            label="Senha"
            placeholder="Mínimo 6 caracteres"
            required={true}
            onChange={this.handleInputValue}
            value={this.state.form.password} />
          <MyPasswordInput
            name="passwordConfirm"
            id="passwordConfirm"
            label="Confirmar"
            placeholder="Confirme a senha anterior"
            required={true}
            error={this.state.passwordNotMatch}
            showHelper
            onChange={this.handleInpuPasswordConfirm}
            value={this.state.passwordConfirm} />
          <MyButton btnText='Criar' />
        </FormStyle>
      </PageWrapper>
    );
  }
}
function mapDispatchToProps(dispatch) {
  return {
    goToFeed: () => dispatch(replace(routes.feedRestaurants)),
    goToAddress: () => dispatch(replace(routes.addressregister)),
    signup: (form) => dispatch(signup(form)),
  }
}
export default connect(null, mapDispatchToProps)(RegisterPage)