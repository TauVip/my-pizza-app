import { ADD_TO_CART } from './actionTypes'

export const addToCartAction = product => async dispatch => {
  dispatch({
    type: ADD_TO_CART,
    payload: product
  })
}
