import {
  FETCH_PRODUCTS_FAIL,
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS
} from '../actions/actionTypes'

export const productsListReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_PRODUCTS_REQUEST:
      return { loading: true }
    case FETCH_PRODUCTS_SUCCESS:
      const products = {
        ...state,
        [action.payload.category]: [
          state[action.payload.category],
          ...action.payload.data
        ]
      }

      return { loading: false, products }
    case FETCH_PRODUCTS_FAIL:
      return { loading: false, productsListError: action.payload }
    default:
      return state
  }
}
