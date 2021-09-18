import axios from 'axios'
import {
  FETCH_PRODUCTS_FAIL,
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  GET_PRODUCT_FAIL,
  GET_PRODUCT_REQUEST,
  GET_PRODUCT_SUCCESS
} from '../actionTypes'

export const fetchProductsAction = (cityId, category) => async dispatch => {
  try {
    dispatch({ type: FETCH_PRODUCTS_REQUEST })

    const { data } = await axios.get(`/products/${cityId}/${category}`)
    dispatch({
      type: FETCH_PRODUCTS_SUCCESS,
      payload: { data, category }
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
