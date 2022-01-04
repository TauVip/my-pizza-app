import axios from 'axios'
import {
  FETCH_PIZZAS_FAIL,
  FETCH_PIZZAS_REQUEST,
  FETCH_PIZZAS_SUCCESS,
  GET_PIZZA_FAIL,
  GET_PIZZA_REQUEST,
  GET_PIZZA_SUCCESS,
  SHOW_ASSEMBLE_PIZZA
} from '../actionTypes'

export const fetchPizzasAction = cityId => async dispatch => {
  try {
    dispatch({ type: FETCH_PIZZAS_REQUEST })

    const { data } = await axios.get(`/pizzas/${cityId}`)
    dispatch({ type: FETCH_PIZZAS_SUCCESS, payload: data })
  } catch (e) {
    dispatch({ type: FETCH_PIZZAS_FAIL, payload: e.message })
  }
}

export const getPizzaAction = (pizzaId, cityId) => async dispatch => {
  try {
    dispatch({ type: GET_PIZZA_REQUEST })

    const { data } = await axios.get(`/pizzas/item/${pizzaId}/${cityId}`)
    dispatch({ type: GET_PIZZA_SUCCESS, payload: data })
  } catch (e) {
    dispatch({ type: GET_PIZZA_FAIL, payload: e.message })
  }
}

export const showAssemblePizzaAction = val => dispatch =>
  dispatch({
    type: SHOW_ASSEMBLE_PIZZA,
    payload: val
  })
