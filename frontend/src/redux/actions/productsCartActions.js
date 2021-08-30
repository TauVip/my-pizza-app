import { ADD_TO_CART, GET_PRODUCTS_CART } from './actionTypes'

export const addToCartAction = product => dispatch =>
  dispatch({
    type: ADD_TO_CART,
    payload: product
  })

export const getProductsCartAction = () => dispatch =>
  dispatch({
    type: GET_PRODUCTS_CART,
    payload: localStorage.getItem('productsCart')
  })
