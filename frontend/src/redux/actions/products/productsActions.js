import axios from 'axios'
import {
  CLEAR_GET_PRODUCT,
  FETCH_PRODUCTS_FAIL,
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  GET_COMBO_SUCCESS,
  GET_PIZZA_SUCCESS,
  GET_PRODUCT_FAIL,
  GET_PRODUCT_REQUEST,
  GET_PRODUCT_SUCCESS,
  SHOW_ASSEMBLE_PIZZA
} from '../actionTypes'

export const fetchProductsAction = cityId => async dispatch => {
  try {
    dispatch({ type: FETCH_PRODUCTS_REQUEST })

    const { data } = await axios.get(`/products/${cityId}`)
    dispatch({
      type: FETCH_PRODUCTS_SUCCESS,
      payload: data
    })
  } catch (e) {
    dispatch({ type: FETCH_PRODUCTS_FAIL, payload: e.message })
  }
}

export const getProductAction = productId => async dispatch => {
  try {
    dispatch({ type: GET_PRODUCT_REQUEST })

    const { data } = await axios.get(`/products/item/${productId}`)
    dispatch({
      type: GET_PRODUCT_SUCCESS,
      payload: data
    })
  } catch (e) {
    dispatch({ type: GET_PRODUCT_FAIL, payload: e.message })
  }
}

export const clearGetProduct = () => dispatch =>
  dispatch({
    type: CLEAR_GET_PRODUCT
  })

export const getOpenCardAction = () => dispatch => {
  switch (true) {
    case !!localStorage.getItem('pizza'):
      return dispatch({
        type: GET_PIZZA_SUCCESS,
        payload: JSON.parse(localStorage.getItem('pizza'))
      })
    case JSON.parse(localStorage.getItem('showAssemblePizza')):
      return dispatch({
        type: SHOW_ASSEMBLE_PIZZA,
        payload: true
      })
    case !!localStorage.getItem('combo'):
      return dispatch({
        type: GET_COMBO_SUCCESS,
        payload: JSON.parse(localStorage.getItem('combo'))
      })
    case !!localStorage.getItem('product'):
      return dispatch({
        type: GET_PRODUCT_SUCCESS,
        payload: JSON.parse(localStorage.getItem('product'))
      })
    default:
      return
  }
}
