import { getRestaurants, setRestaurants } from './GetRestaurantsAction'

describe("Action Creators", () => {
    test("Get Restaurants", () => {
        const mockedAction = getRestaurants();

        expect(mockedAction.type).toEqual("GET_RESTAURANTS")        
    })
    test("Set Restaurants", () => {
        const mockTodoText = ""
        const mockedAction = setRestaurants(mockTodoText);

        expect(mockedAction.type).toEqual("SET_RESTAURANTS")

        
    })
})