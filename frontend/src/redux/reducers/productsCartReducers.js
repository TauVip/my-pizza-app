import { ADD_TO_CART, GET_PRODUCTS_CART } from '../actions/actionTypes'

export const productsCartReducer = (state = [], action) => {
  switch (action.type) {
    case GET_PRODUCTS_CART:
      return action.payload
        ? { productsCart: JSON.parse(action.payload) }
        : state
    case ADD_TO_CART:
      const productsCart = state.productsCart
        ? [...state.productsCart, action.payload]
        : [action.payload]

      localStorage.setItem('productsCart', JSON.stringify(productsCart))

      return { productsCart }
    default:
      return state
  }
}
