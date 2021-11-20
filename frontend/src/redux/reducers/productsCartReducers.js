import {
  ADD_QUANTITY_CART,
  ADD_TO_CART,
  DELETE_PRODUCT_CART,
  GET_PRODUCTS_CART,
  REDUCE_QUANTITY_CART
} from '../actions/actionTypes'

export const productsCartAction = (type, product) => dispatch =>
  dispatch({ type, payload: product })

export const productsCartReducer = (state = null, action) => {
  switch (action.type) {
    case GET_PRODUCTS_CART:
      return action.payload
    case ADD_TO_CART: {
      const gift = {
        item: {
          type: 'gift',
          productId: '60f6a6cb75e6b01604522afa',
          image:
            'http://localhost:5000/images/d34f93b52d994d9388a9605aad536f9c_1875x1875.jpeg',
          name: 'Додо набор',
          description: '1 шт'
        },
        quantity: 1
      }
      const productsCart =
        state?.length > 0
          ? [...state, { item: action.payload, quantity: 1 }]
          : [{ item: action.payload, quantity: 1 }, gift]

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
      let productsCart = state.filter(
        product =>
          JSON.stringify(product.item) !== JSON.stringify(action.payload)
      )
      if (productsCart?.every(product => product.item.type === 'gift'))
        productsCart = []

      localStorage.setItem('productsCart', JSON.stringify(productsCart))

      return productsCart
    }
    default:
      return state
  }
}
