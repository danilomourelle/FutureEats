import React, { Component } from "react";
import { MyInput } from "../../components/material/Inputs";
import MyButton from "../../components/material/Button";
import MyPageTitle from "../../components/pageTitleBar";
import { PageWrapper, FormStyle} from "./style"
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from "../../containers/Router";
import { addressRegisterModifications } from "../../actions/profile";


class AddressRegister extends Component {
  constructor(props) {
    super(props)
    this.state = {
      form: {
        street: '',
        number: '',
        neighbourhood:'',
        city:'',
        state:'',
        complement:'',
      }
    }
  }

  componentDidMount() {
    if (localStorage.getItem('token') === null) {
      this.props.goToLogin()
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

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.setAddress(this.state.form,'feed')
    this.setState({
      form: {
        street: '',
        number: '',
        neighbourhood:'',
        city:'',
        state:'',
        complement:'',
      }
    })
  }

  render() {
    return (
      <PageWrapper>
        <MyPageTitle showBack pageTitle='Meu Endereço'/>
          <FormStyle onSubmit={this.handleSubmit}>
            <MyInput
              name="street"
              type="text"
              label="Logradouro"
              placeholder="Rua / Av."
              required={true}
              onChange={this.handleInputValue}
              value={this.state.form.name} />
            <MyInput
              name="number"
              type="number"
              label="Número"
              placeholder="Número"
              required={true}
              onChange={this.handleInputValue}
              value={this.state.form.email} />
              <MyInput
              name="complement"
              type="text"
              label="Complemento"
              placeholder="Apto. / Bloco"
              required={true}
              onChange={this.handleInputValue}
              value={this.state.form.cpf} />
            <MyInput
              name="neighbourhood"
              type="text"
              label="Bairro"
              placeholder="Bairro"
              required={true}
              onChange={this.handleInputValue}
              value={this.state.form.password} />
              <MyInput
              name="city"
              type="text"
              label="Cidade"
              placeholder="Cidade"
              required={true}
              onChange={this.handleInputValue}
              value={this.state.form.password} />
              <MyInput
              name="state"
              type="text"
              label="Estado"
              placeholder="Estado"
              required={true}
              onChange={this.handleInputValue}
              value={this.state.form.password} />
            <MyButton btnText="Salvar" />
          </FormStyle>
      </PageWrapper>
    );
  }
}


const masDispatchToProps = (dispatch) => ({
  setAddress:(form,goto) =>dispatch(addressRegisterModifications(form,goto)),
  goToLogin: () => dispatch(push(routes.login)),
})
export default connect(null, masDispatchToProps) (AddressRegister)