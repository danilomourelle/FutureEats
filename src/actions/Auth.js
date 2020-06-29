import axios from 'axios';
import { push } from "connected-react-router";
import { routes } from '../containers/Router/index';

const baseURL = 'https://us-central1-missao-newton.cloudfunctions.net/futureEats'

export const login = (email, password) => async (dispatch) =>{
    const loginData ={
        email,
        password,
    }

    try{
        const response = await axios.post(`${baseURL}/login`, loginData);

        const auth = response.data.user;
        const token = response.data.token

        window.localStorage.setItem("auth", JSON.stringify(auth))
        window.localStorage.setItem("token", token)

        dispatch(push(routes.feedPage))
    }
    catch(error){
        console.error(error)
        alert("Erro ao tentar fazer o login")
    }
}

export const signup = (email, password, name, cpf) => async (dispatch) => {
    const signupData={
        email,
        password,
        name,
        cpf
    }

    try{
       const response =  await axios.post(`${baseURL}/signup`, signupData);

        const auth = response.data.user;
        const token = response.data.token

        window.localStorage.setItem("auth", JSON.stringify(auth))
        window.localStorage.setItem("token", token)

        alert('Conta criada com sucesso!')
    }
    catch(error){
        console.error(error)
        alert("Erro ao tentar criar uma conta")
    }
}