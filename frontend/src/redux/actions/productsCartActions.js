import axios from 'axios'
import {
  ADD_TO_CART_FAIL,
  ADD_TO_CART_REQUEST,
  ADD_TO_CART_SUCCESS
} from './actionTypes'

export const addToCartAction = (productId, type) => async dispatch => {
  try {
    dispatch({ type: ADD_TO_CART_REQUEST })

    const { data } = await axios.get(`/${type}/item/${productId}`)
    dispatch({
      type: ADD_TO_CART_SUCCESS,
      payload: data
    })
  } catch (e) {
    dispatch({ type: ADD_TO_CART_FAIL, payload: e.message })
  }
}
