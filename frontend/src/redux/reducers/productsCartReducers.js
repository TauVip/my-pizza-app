import {
  ADD_QUANTITY_CART,
  ADD_TO_CART,
  DELETE_PRODUCT_CART,
  GET_PRODUCTS_CART,
  REDUCE_QUANTITY_CART
} from '../actions/actionTypes'

export const productsCartReducer = (state = null, action) => {
  switch (action.type) {
    case GET_PRODUCTS_CART:
      return action.payload
    case ADD_TO_CART: {
      const productsCart = state
        ? [...state, { item: action.payload, quantity: 1 }]
        : [{ item: action.payload, quantity: 1 }]

      localStorage.setItem('productsCart', JSON.stringify(productsCart))

      return productsCart
    }
    case ADD_QUANTITY_CART: {
      const productsCart = state.map(product =>
        JSON.stringify(product.item) === JSON.stringify(action.payload)
          ? { ...product, quantity: product.quantity + 1 }
          : product
      )

      localStorage.setItem('productsCart', JSON.stringify(productsCart))

      return productsCart
    }
    case REDUCE_QUANTITY_CART: {
      const productsCart = state.map(product =>
        JSON.stringify(product.item) === JSON.stringify(action.payload)
          ? { ...product, quantity: product.quantity - 1 }
          : product
      )

      localStorage.setItem('productsCart', JSON.stringify(productsCart))

      return productsCart
    }
    case DELETE_PRODUCT_CART: {
      const productsCart = state.filter(
        product =>
          JSON.stringify(product.item) !== JSON.stringify(action.payload)
      )

      localStorage.setItem('productsCart', JSON.stringify(productsCart))

      return productsCart
    }
    default:
      return state
  }
}
