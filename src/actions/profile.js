import axios from 'axios';
import { push } from "connected-react-router";
import { routes } from '../containers/Router/index';

export const baseURL = 'https://us-central1-missao-newton.cloudfunctions.net/futureEats'

//*****ASSÍNCRONAS*****//
export const login = (form) => async (dispatch) => {
  try {
    const response = await axios.post(`${baseURL}/login`, form);

    const token = response.data.token
    window.localStorage.setItem("token", token)

    const profileDetails = response.data.user;
    dispatch(setProfileDetails(profileDetails))

    dispatch(push(routes.feedRestaurants))
    
  }
  catch (error) {
    console.error(error)
    alert("Erro ao tentar fazer o login")
  }
}

export const signup = (form) => async (dispatch) => {
  try {
    const response = await axios.post(`${baseURL}/signup`, form);

    const token = response.data.token
    window.localStorage.setItem("token", token)

    const profileDetails = response.data.user;
    dispatch(setProfileDetails(profileDetails))

    dispatch(push(routes.addressregister))
  }
  catch (error) {
    console.error(error)
    alert("Erro ao tentar criar uma conta")
  }
}

export const addressRegisterModifications = (form, goto) => async (dispatch) => {
  let token = localStorage.getItem('token')
  try {
    const response = await axios.put(`${baseURL}/address`, form, {
      headers: {
        auth: token,
        "Content-Type": 'application/json'
      }
    })

    token = response.data.token
    window.localStorage.setItem("token", token)
    dispatch(setProfileDetails(response.data.user))

    if (goto === "feed") {
      dispatch(push(routes.feedRestaurants))
    } else {
      dispatch(push(routes.profile))
    }
  }
  catch (error) {
    console.error(error)
    alert("Erro ao tentar criar Endereço")
  }
}

export const getOrderHistory = () => async (dispatch) => {
  const token = localStorage.getItem('token')
  try {
    const response = await axios.get(`${baseURL}/orders/history`, {
      headers: {
        auth: token,
        "Content-Type": 'application/json'
      }
    })
  
    dispatch(setOrderHistory(response.data.orders))
  }
  catch (error) {
    console.error(error)
    alert("Erro ao tentar burscar histórico de pedidos")
  }
}

export const getFullAddress = () => async (dispatch) => {
  const token = localStorage.getItem('token')
  try{
    const response = await axios.get(`${baseURL}/profile/address`,{
      headers:{
        auth: token
      }
    })
    dispatch(setProfileFullAddress(response.data.address))
  }
  catch(error){
    console.error(error)
    alert("Erro ao tentar burscar endereço completo")
  }
}
export const getProfile = () => async (dispatch) => {
  const token = localStorage.getItem('token')
  try{
    const response = await axios.get(`${baseURL}/profile`,{
      headers:{
        auth: token,
        "Content-Type": 'application/json'
      }
    })
    dispatch(setProfileDetails(response.data.user))
  }
  catch(error){
    console.error(error)
    alert("Erro ao tentar buscar detalhes do Perfil")
  }
}

export const updateProfile = (form) => async (dispatch) => {
  const token = localStorage.getItem('token')
  try{
    const response = await axios.put(`${baseURL}/profile`,form,{
      headers:{
        auth: token,
        "Content-Type": 'application/json'
      }
    })
    dispatch(setProfileDetails(response.data.user))
    dispatch(push(routes.profile))
  }
  catch(error){
    console.error(error)
    alert("Erro ao tentar burscar detalhes do Perfil")
  }
}

//*****SÍNCRONAS*****//
export const setProfileDetails = (profileDetails) => (
  {
    type: 'SET_PROFILE_DETAILS',
    payload: { profileDetails }
  }
)
export const setProfileFullAddress = (profileFullAddress) => (
  {
    type: 'SET_PROFILE_FULL_ADDRESS',
    payload: { profileFullAddress }
  }
)
export const setProfileShortAddress = (profileShortAddress) => (
  {
    type: 'SET_PROFILE_SHORT_ADDRESS',
    payload: { profileShortAddress }
  }
)
export const setOrderHistory = (orderHistory) => (
  {
    type: 'SET_ORDER_HISTORY',
    payload: { orderHistory }
  }
)
//********VER ONDE COLOCAR */
export const setBottomNav = (actualPlace) => (
  {
    type: 'SET_BOTTOM_NAV_PLACE',
    payload: { actualPlace }
  }
)