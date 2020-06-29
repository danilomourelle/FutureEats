import React from 'react'
import { connect } from "react-redux";
import { push, goBack } from "connected-react-router";
import { routes } from "../../containers/Router";

import MyButton from '../../components/material/Button'
import { MyInput } from '../../components/material/Inputs'
import MyPageTitle from '../../components/pageTitleBar'

import { updateProfile, setProfileDetails } from '../../actions/profile';

import { PageWrapper } from './styles'


export class ProfileEdit extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      form: {
        name: '',
        email: '',
        cpf: '',
      }
    }
  }

  componentDidMount() {
    if (localStorage.getItem('token') === null) {
      this.props.goToLogin()
    }
    else {
      this.props.profile ?
        this.setState({
          form: {
            name: this.props.profile.name,
            email: this.props.profile.email,
            cpf: this.props.profile.cpf,
          }
        }) :
        this.props.goBack()
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
    this.props.cleanProfileDetails(undefined)
    this.props.updateProfile(this.state.form)
  }

  render() {
    return (
      <PageWrapper>
        <MyPageTitle showBack pageTitle='Editar' />
        <form onSubmit={this.handleSubmit}>
          <MyInput
            label='Nome'
            name='name'
            type='text'
            required
            value={this.state.form.name}
            onChange={this.handleInputChange}
          />
          <MyInput
            label='E-mail'
            name='email'
            type='email'
            required
            value={this.state.form.email}
            onChange={this.handleInputChange}
          />
          <MyInput
            label='CPF'
            name='cpf'
            type='text'
            required
            pattern={'[0-9]{3}\.[0-9]{3}\.[0-9]{3}\-[0-9]{2}'}
            title='CPF: 111.222.333-44'
            value={this.state.form.cpf}
            onChange={this.handleInputChange}
          />
          <MyButton btnText='Salvar' />
        </form>
      </PageWrapper>
    )
  }
}

const mapStateToProps = (state) => ({
  profile: state.profile.profileDetails,
})

const mapDispatchToProps = (dispatch) => ({
  goToLogin: () => dispatch(push(routes.login)),
  goBack: () => dispatch(goBack()),
  updateProfile: (form) => dispatch(updateProfile(form)),
  cleanProfileDetails:(details) => dispatch(setProfileDetails(details))
})

export default connect(mapStateToProps,mapDispatchToProps)(ProfileEdit)