import {
  ADD_QUANTITY_CART,
  ADD_TO_CART,
  DELETE_PRODUCT_CART,
  GET_PRODUCTS_CART,
  REDUCE_QUANTITY_CART
} from './actionTypes'

export const getProductsCartAction = () => dispatch =>
  dispatch({
    type: GET_PRODUCTS_CART,
    payload: localStorage.getItem('productsCart')
  })

export const addToCartAction = product => dispatch =>
  dispatch({
    type: ADD_TO_CART,
    payload: product
  })

export const addQuantityAction = product => dispatch =>
  dispatch({
    type: ADD_QUANTITY_CART,
    payload: product
  })

export const reduceQuantityAction = product => dispatch =>
  dispatch({
    type: REDUCE_QUANTITY_CART,
    payload: product
  })

export const deleteProductCartAction = product => dispatch =>
  dispatch({
    type: DELETE_PRODUCT_CART,
    payload: product
  })
