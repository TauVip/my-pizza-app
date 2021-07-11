import {
  FETCH_PIZZAS_FAIL,
  FETCH_PIZZAS_REQUEST,
  FETCH_PIZZAS_SUCCESS
} from '../actions/actionTypes'

export const pizzasListReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_PIZZAS_REQUEST:
      return { loading: true }
    case FETCH_PIZZAS_SUCCESS:
      return {
        loading: false,
        pizzas: action.payload
      }
    case FETCH_PIZZAS_FAIL:
      return { loading: false, pizzasListError: action.payload }
    default:
      return state
  }
}
