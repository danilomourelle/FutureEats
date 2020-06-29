import axios from 'axios'
import {
  login,
  signup,
  addressRegisterModifications,
  getOrderHistory,
  getFullAddress,
  getProfile,
  updateProfile,
  setProfileDetails,
  setProfileFullAddress,
  setOrderHistory,
  setBottomNav,
  baseURL
} from './profile'

const mockProfileDetails = {
  id: 'De8UACSFgFySnKdXm5hI',
  name: 'Astrodev',
  email: 'astrodev@future4.com',
  cpf: ' 111.111.111-15',
  hasAddress: true,
  address: ' R. Afonso Braz, 177, 72 - Jabaquara'
}
const mockFullAddress = {
  neighbourhood: "Vila N. Conceição",
  number: "177",
  complement: "71",
  city: "São Paulo",
  state: "SP",
  street: "R. Afonso Braz"
}
const mockOrderHistory = [{
  totalPrice: 10,
  restaurantName: "Habibs",
  createdAt: 1574968836177,
  expiresAt: 1574972436177
},
{
  totalPrice: 82.6,
  restaurantName: "Sotero Cozinha Original",
  createdAt: 1574719190954,
  expiresAt: 1574721590954
},
{
  totalPrice: 20,
  restaurantName: "Habibs",
  createdAt: 1574703577073,
  expiresAt: 1574703637000
}]
const mockBottomNav = 'home'
const mockLoginForm = {
  email: "astrodev@future4.com",
  password: "123456"
}
const mockSignupForm = {
  name: "Astrodev",
  email: "astrodev@future4.com",
  cpf: "111.111.111-11",
  password: "123456"
}
const mockAddressForm = {
  street: "R. Afonso Braz",
  number: "177",
  neighbourhood: "Vila N. Conceição",
  city: "São Paulo",
  state: "SP",
  complement: "71"
}
const mockProfileForm = {
  name: "Astrodev",
  email: "astrodev@future4.com",
  cpf: "111.111.111-13"
}

let mockDispatch
beforeEach(() => {
  mockDispatch = jest.fn()
  console.error = jest.fn()
  window.alert = jest.fn()
  window.localStorage.setItem = jest.fn()
})

describe("Teste das actions síncronas do profile", () => {
  test("setProfileDetails", () => {
    const mockAction = setProfileDetails(mockProfileDetails)
    expect(mockAction.type).toEqual('SET_PROFILE_DETAILS')
    expect(mockAction.payload.profileDetails).toEqual(mockProfileDetails)
  })
  test("setProfileFullAddress", () => {
    const mockAction = setProfileFullAddress(mockFullAddress)
    expect(mockAction.type).toEqual('SET_PROFILE_FULL_ADDRESS')
    expect(mockAction.payload.profileFullAddress).toEqual(mockFullAddress)
  })
  test("setOrderHistory", () => {
    const mockAction = setOrderHistory(mockOrderHistory)
    expect(mockAction.type).toEqual('SET_ORDER_HISTORY')
    expect(mockAction.payload.orderHistory).toEqual(mockOrderHistory)
    expect(mockAction.payload.orderHistory).toHaveLength(3)
  })
  test("setBottomNav", () => {
    const mockAction = setBottomNav(mockBottomNav)
    expect(mockAction.type).toEqual('SET_BOTTOM_NAV_PLACE')
    expect(mockAction.payload.actualPlace).toEqual(mockBottomNav)
  })
})


describe("teste das actions assíncronas do profile", () => {
  test("login success", async () => {
    axios.post = jest.fn(() => ({
      status: 200,
      data: {
        token: ''
      }
    }))
    await login(mockLoginForm)(mockDispatch)
    expect(axios.post).toHaveBeenCalledWith(`${baseURL}/login`, mockLoginForm)
    expect(mockDispatch).toHaveBeenCalledTimes(2)
  })
  test("login failed", async () => {
    axios.post = jest.fn(() => {
      throw new Error()
    })
    await login(mockLoginForm)(mockDispatch)
    expect(axios.post).toThrowError()
    expect(console.error).toHaveBeenCalledTimes(1)
    expect(alert).toHaveBeenCalledTimes(1)
  })

  test("signup success", async () => {
    axios.post = jest.fn(() => ({
      status: 200,
      data: {
        token: ''
      }
    }))
    await signup(mockSignupForm)(mockDispatch)
    expect(axios.post).toHaveBeenCalledWith(`${baseURL}/signup`, mockSignupForm)
    expect(mockDispatch).toHaveBeenCalledTimes(2)
  })
  test("signup failed", async () => {
    axios.post = jest.fn(() => {
      throw new Error()
    })
    await signup(mockSignupForm)(mockDispatch)
    expect(axios.post).toThrowError()
    expect(console.error).toHaveBeenCalledTimes(1)
    expect(alert).toHaveBeenCalledTimes(1)
  })

  test("addressRegisterModifications success go to feed", async () => {
    axios.put = jest.fn(() => ({
      status: 200,
      data: {
        token: ''
      }
    }))
    await addressRegisterModifications(mockAddressForm, "feed")(mockDispatch)
    expect(axios.put).toHaveBeenCalledWith(`${baseURL}/address`, mockAddressForm, {
      headers: {
        auth: '',
        "Content-Type": 'application/json'
      }
    })
    expect(mockDispatch).toHaveBeenCalledTimes(2)
  })
  test("addressRegisterModifications success", async () => {
    axios.put = jest.fn(() => ({
      status: 200,
      data: {
        token: ''
      }
    }))
    await addressRegisterModifications(mockAddressForm)(mockDispatch)
    expect(axios.put).toHaveBeenCalledWith(`${baseURL}/address`, mockAddressForm, {
      headers: {
        auth: '',
        "Content-Type": 'application/json'
      }
    })
    expect(mockDispatch).toHaveBeenCalledTimes(2)
  })
  test("addressRegisterModifications failed", async () => {
    axios.put = jest.fn(() => {
      throw new Error()
    })
    await addressRegisterModifications(mockAddressForm)(mockDispatch)
    expect(axios.put).toThrowError()
    expect(console.error).toHaveBeenCalledTimes(1)
    expect(alert).toHaveBeenCalledTimes(1)
  })

  test("get Order History success", async () => {
    axios.get = jest.fn(() => ({
      status: 200,
      data: mockOrderHistory
      
    }))
    await getOrderHistory()(mockDispatch)
    expect(axios.get).toHaveBeenCalledWith(`${baseURL}/orders/history`, {
      headers: {
        auth: '',
        "Content-Type": 'application/json'
      }
    })
    expect(mockDispatch).toHaveBeenCalledTimes(1)
  })
  test("get Order History failed", async () => {
    axios.get = jest.fn(() => {
      throw new Error()
    })
    await getOrderHistory()(mockDispatch)
    expect(axios.get).toThrowError()
    expect(console.error).toHaveBeenCalledTimes(1)
    expect(alert).toHaveBeenCalledTimes(1)
  })

  test("get Full Address success", async () => {
    axios.get = jest.fn(() => ({
      status: 200,
      data:mockFullAddress
    }))
    await getFullAddress()(mockDispatch)
    expect(axios.get).toHaveBeenCalledWith(`${baseURL}/profile/address`, {
      headers: {
        auth: ''
      }
    })
    expect(mockDispatch).toHaveBeenCalledTimes(1)
  })
  test("get Full Address failed", async () => {
    axios.get = jest.fn(() => {
      throw new Error()
    })
    await getFullAddress()(mockDispatch)
    expect(axios.get).toThrowError()
    expect(console.error).toHaveBeenCalledTimes(1)
    expect(alert).toHaveBeenCalledTimes(1)
  })

  test("get Profile success", async () => {
    axios.get = jest.fn(() => ({
      status: 200,
      data:mockProfileDetails
    }))
    await getProfile()(mockDispatch)
    expect(axios.get).toHaveBeenCalledWith(`${baseURL}/profile`, {
      headers: {
        auth: '',
        "Content-Type": 'application/json'
      }
    })
    expect(mockDispatch).toHaveBeenCalledTimes(1)
  })
  test("get Profile failed", async () => {
    axios.get = jest.fn(() => {
      throw new Error()
    })
    await getProfile()(mockDispatch)
    expect(axios.get).toThrowError()
    expect(console.error).toHaveBeenCalledTimes(1)
    expect(alert).toHaveBeenCalledTimes(1)
  })
  
  test("update Profile success", async () => {
    axios.put = jest.fn(() => ({
      status: 200,
      data:mockProfileForm
    }))
    await updateProfile(mockProfileForm)(mockDispatch)
    expect(axios.put).toHaveBeenCalledWith(`${baseURL}/profile`, mockProfileForm, {
      headers: {
        auth: '',
        "Content-Type": 'application/json'
      }
    })
    expect(mockDispatch).toHaveBeenCalledTimes(2)
  })
  test("update Profile failed", async () => {
    axios.put = jest.fn(() => {
      throw new Error()
    })
    await updateProfile(mockProfileForm)(mockDispatch)
    expect(axios.put).toThrowError()
    expect(console.error).toHaveBeenCalledTimes(1)
    expect(alert).toHaveBeenCalledTimes(1)
  })
})

