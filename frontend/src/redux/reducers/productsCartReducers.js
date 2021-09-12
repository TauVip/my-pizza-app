import {
  ADD_QUANTITY_CART,
  ADD_TO_CART,
  DELETE_PRODUCT_CART,
  GET_PRODUCTS_CART,
  REDUCE_QUANTITY_CART
} from '../actions/actionTypes'

export const productsCartReducer = (state = [], action) => {
  switch (action.type) {
    case GET_PRODUCTS_CART:
      return action.payload
        ? { productsCart: JSON.parse(action.payload) }
        : state
    case ADD_TO_CART: {
      const productsCart = state.productsCart
        ? [...state.productsCart, action.payload]
        : [action.payload]

      localStorage.setItem('productsCart', JSON.stringify(productsCart))

      return { productsCart }
    }
    case ADD_QUANTITY_CART: {
      const productsCart = state.productsCart.map(product =>
        JSON.stringify({ ...product, quantity: 1 }) ===
        JSON.stringify({ ...action.payload, quantity: 1 })
          ? { ...product, quantity: product.quantity + 1 }
          : product
      )

      localStorage.setItem('productsCart', JSON.stringify(productsCart))

      return { productsCart }
    }
    case REDUCE_QUANTITY_CART: {
      const productsCart = state.productsCart.map(product =>
        JSON.stringify({ ...product, quantity: 1 }) ===
        JSON.stringify({ ...action.payload, quantity: 1 })
          ? { ...product, quantity: product.quantity - 1 }
          : product
      )

      localStorage.setItem('productsCart', JSON.stringify(productsCart))

      return { productsCart }
    }
    case DELETE_PRODUCT_CART: {
      const productsCart = state.productsCart.filter(
        product => JSON.stringify(product) !== JSON.stringify(action.payload)
      )
      return { productsCart }
    }
    default:
      return state
  }
}
