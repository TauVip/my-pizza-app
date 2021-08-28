import { ADD_TO_CART } from '../actions/actionTypes'

export const productsCartReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const productsCart = localStorage.getItem('productsCart')
        ? [...JSON.parse(localStorage.getItem('productsCart')), action.payload]
        : [action.payload]

      localStorage.setItem('productsCart', JSON.stringify(productsCart))

      return { loading: false, productsCart }
    default:
      return state
  }
}
