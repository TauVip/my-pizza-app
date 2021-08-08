import axios from 'axios'
import {
  CLEAR_GET_COMBO,
  FETCH_COMBOS_FAIL,
  FETCH_COMBOS_REQUEST,
  FETCH_COMBOS_SUCCESS,
  GET_COMBO_FAIL,
  GET_COMBO_REQUEST,
  GET_COMBO_SUCCESS
} from './actionTypes'

export const fetchCombosAction = () => async dispatch => {
  try {
    dispatch({ type: FETCH_COMBOS_REQUEST })

    const { data } = await axios.get(`/combos`)
    dispatch({
      type: FETCH_COMBOS_SUCCESS,
      payload: data
    })
  } catch (e) {
    dispatch({ type: FETCH_COMBOS_FAIL, payload: e.message })
  }
}

export const getComboAction = comboId => async dispatch => {
  try {
    dispatch({ type: GET_COMBO_REQUEST })

    const { data } = await axios.get(`/pizzas/item/${comboId}`)
    dispatch({
      type: GET_COMBO_SUCCESS,
      payload: data
    })
  } catch (e) {
    dispatch({ type: GET_COMBO_FAIL, payload: e.message })
  }
}

export const clearGetPizza = () => dispatch =>
  dispatch({ type: CLEAR_GET_COMBO })
