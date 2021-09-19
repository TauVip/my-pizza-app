import {
  CLEAR_GET_PRODUCT,
  FETCH_PRODUCTS_FAIL,
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  GET_PRODUCT_FAIL,
  GET_PRODUCT_REQUEST,
  GET_PRODUCT_SUCCESS
} from '../../actions/actionTypes'

export const productsListReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS_REQUEST:
      return { loading: true }
    case FETCH_PRODUCTS_SUCCESS:
      return { loading: false, products: action.payload }
    case FETCH_PRODUCTS_FAIL:
      return { loading: false, productsListError: action.payload }
    default:
      return state
  }
}

export const getProductReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_PRODUCT_REQUEST:
      return { loading: true }
    case GET_PRODUCT_SUCCESS:
      localStorage.setItem('product', JSON.stringify(action.payload))
      return { loading: false, product: action.payload }
    case GET_PRODUCT_FAIL:
      return { loading: false, getProductError: action.payload }
    case CLEAR_GET_PRODUCT:
      localStorage.removeItem('product')
      return {}
    default:
      return state
  }
}
