import {
  FETCH_PRODUCTS_FAIL,
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  GET_PRODUCT_FAIL,
  GET_PRODUCT_REQUEST,
  GET_PRODUCT_SUCCESS
} from '../../actions/actionTypes'

export const productsListReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_PRODUCTS_REQUEST:
      return { loading: true }
    case FETCH_PRODUCTS_SUCCESS:
      const products = {
        ...state.products,
        [action.payload.category]: action.payload.data
      }

      return { loading: false, products }
    case FETCH_PRODUCTS_FAIL:
      return { loading: false, productsListError: action.payload }
    default:
      return state
  }
}

export const getProductReducer = (state = [], action) => {
  switch (action.type) {
    case GET_PRODUCT_REQUEST:
      return { loading: true }
    case GET_PRODUCT_SUCCESS:
      return { loading: false, product: action.payload }
    case GET_PRODUCT_FAIL:
      return { loading: false, getProductError: action.payload }
    default:
      return state
  }
}
