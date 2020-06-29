import React from 'react'
import { connect } from 'react-redux'
import { goBack, push } from 'connected-react-router'
import { routes } from "../../containers/Router";

import MyButton from '../../components/material/Button'
import { MyInput } from '../../components/material/Inputs'
import MyPageTitle from '../../components/pageTitleBar'

import { getFullAddress, addressRegisterModifications } from '../../actions/profile'

import { PageWrapper } from './styles'

export class AddressEdit extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      form: {
        street: '',
        number: '',
        neighbourhood: '',
        city: '',
        state: '',
        complement: ''
      }
    }
  }

  componentDidMount() {
    if (localStorage.getItem('token') === null) {
      this.props.goToLogin()
    }
    else {
      this.props.getFullAddress()
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.address !== prevProps.address) {
      const { address } = this.props
      this.setState({
        form: {
          street: address.street,
          number: address.number,
          neighbourhood: address.neighbourhood,
          city: address.city,
          state: address.state,
          complement: address.complement || ''
        }
      })
    }
  }

  handleInputChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.updateAddress(this.state.form)
  }


  render() {
    return (
      <PageWrapper>
        <MyPageTitle showBack pageTitle='Endereço' />
        <form onSubmit={this.handleSubmit}>
          <MyInput
            label='Logradouro'
            name='street'
            type='text'
            required
            placeholder='Rua / Av.'
            value={this.state.form.street}
            onChange={this.handleInputChange}
          />
          <MyInput
            label='Número'
            name='number'
            type='text'
            required
            placeholder='Número'
            value={this.state.form.number}
            onChange={this.handleInputChange}
          />
          <MyInput
            label='Complemento'
            name='complement'
            type='text'
            placeholder='Complemento'
            value={this.state.form.complement}
            onChange={this.handleInputChange}
          />
          <MyInput
            label='Bairro'
            name='neighbourhood'
            type='text'
            required
            placeholder='Bairro'
            value={this.state.form.neighbourhood}
            onChange={this.handleInputChange}
          />
          <MyInput
            label='Cidade'
            name='city'
            type='text'
            required
            placeholder='Cidade'
            value={this.state.form.city}
            onChange={this.handleInputChange}
          />
          <MyInput
            label='Estado'
            name='state'
            type='text'
            required
            placeholder='Estado'
            value={this.state.form.state}
            onChange={this.handleInputChange}
          />
          <MyButton btnText='Salvar' />
        </form>
      </PageWrapper>
    )
  }
}

const mapStateToProps = (state) => ({
  address: state.profile.profileFullAddress
})
const masDispatchToProps = (dispatch) => ({
  goToLogin: () => dispatch(push(routes.login)),
  goBack: () => dispatch(goBack()),
  getFullAddress: () => dispatch(getFullAddress()),
  updateAddress:(form) =>dispatch(addressRegisterModifications(form))
})
export default connect(mapStateToProps, masDispatchToProps)(AddressEdit)