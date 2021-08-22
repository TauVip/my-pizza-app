import {
  ADD_TO_CART_FAIL,
  ADD_TO_CART_REQUEST,
  ADD_TO_CART_SUCCESS
} from '../actions/actionTypes'

export const addToCartReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_CART_REQUEST:
      return { loading: true }
    case ADD_TO_CART_SUCCESS:
      const products = localStorage.getItem('productsCart')
        ? [...JSON.parse(localStorage.getItem('productsCart')), action.payload]
        : [action.payload]

      return { loading: false, products }
    case ADD_TO_CART_FAIL:
      return { loading: false, addToCartError: action.payload }
    default:
      return state
  }
}
