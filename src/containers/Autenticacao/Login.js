import React, { Component } from "react";
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import {login} from '../../actions/profile'
import { routes } from '../Router'


import MyButton from "../../components/material/Button";
import { MyPasswordInput, MyInput } from "../../components/material/Inputs";
import { PageWrapper, FormStyle, LogoFutureEats} from "./style"



class LoginPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            form: {
                password: '',
                email: '',
            }
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
        const {form} = this.state
        this.props.login(form)
        this.setState({
            form: {
                password: '',
                email: '',
            }
        })
    }

    render() {
        return (
            <PageWrapper>
                <LogoFutureEats src={require("../../images/LogoPage/logo-future-eats-invert.png")} />
                <h3>Entrar</h3>
                <FormStyle onSubmit={this.handleSubmit}>
                    <MyInput
                        name="email"
                        type="email"
                        label="Email"
                        placeholder="email@email.com"
                        required={true}
                        onChange={this.handleInputValue}
                        value={this.state.form.email} />
                    <MyPasswordInput
                        name="password"
                        id="password"
                        label="senha"
                        placeholder="Mínimo 6 caracteres"
                        required={true}
                        onChange={this.handleInputValue}
                        value={this.state.form.password}
                    />
                    <MyButton btnText="Entrar"/>
                </FormStyle>
                <p>Não possui cadastro? <span onClick={this.props.goToRegisterPage}>Clique aqui</span></p>
            </PageWrapper>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        goToRegisterPage: () => dispatch(push(routes.register)),
        login: (form) => dispatch(login(form)),
    }
}

export default connect(null, mapDispatchToProps)(LoginPage);