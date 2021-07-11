import axios from 'axios'
import {
  FETCH_PIZZAS_FAIL,
  FETCH_PIZZAS_REQUEST,
  FETCH_PIZZAS_SUCCESS
} from './actionTypes'

export const fetchPizzasAction = cityId => async dispatch => {
  try {
    dispatch({ type: FETCH_PIZZAS_REQUEST })

    const { data } = await axios.get(`/products/pizzas/${cityId}`)
    dispatch({
      type: FETCH_PIZZAS_SUCCESS,
      payload: data
    })
  } catch (e) {
    dispatch({ type: FETCH_PIZZAS_FAIL, payload: e.message })
  }
}
