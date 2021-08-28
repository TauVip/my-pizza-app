import {
  CLEAR_GET_PRODUCT,
  FETCH_PIZZAS_FAIL,
  FETCH_PIZZAS_REQUEST,
  FETCH_PIZZAS_SUCCESS,
  GET_PIZZA_FAIL,
  GET_PIZZA_REQUEST,
  GET_PIZZA_SUCCESS
} from '../../actions/actionTypes'

export const pizzasListReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_PIZZAS_REQUEST:
      return { loading: true }
    case FETCH_PIZZAS_SUCCESS:
      const sizeVars = { small: 25, medium: 30, big: 35 }
      return { loading: false, pizzas: action.payload, sizeVars }
    case FETCH_PIZZAS_FAIL:
      return { loading: false, pizzasListError: action.payload }
    default:
      return state
  }
}

export const getPizzaReducer = (state = [], action) => {
  switch (action.type) {
    case GET_PIZZA_REQUEST:
      return { loading: true }
    case GET_PIZZA_SUCCESS:
      return {
        loading: false,
        pizza: action.payload.pizza,
        pizzaSnacks: action.payload.pizzaSnacks
      }
    case GET_PIZZA_FAIL:
      return { loading: false, getPizzaError: action.payload }
    case CLEAR_GET_PRODUCT:
      return []
    default:
      return state
  }
}
