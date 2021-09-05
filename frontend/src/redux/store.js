import { applyMiddleware, combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import {
  articlesListReducer,
  bannersListReducer,
  getArticleReducer
} from './reducers/articlesReducers'
import { citiesListReducer, getCityReducer } from './reducers/citiesReducers'
import {
  combosListReducer,
  getComboReducer
} from './reducers/products/comboProductsReducers'
import {
  loginReducer,
  modalOpenReducer,
  pageNotFoundReducer,
  smsLoginReducer
} from './reducers/loginReducers'
import {
  getPizzaReducer,
  pizzasListReducer
} from './reducers/products/pizzasReducers'
import { pizzeriasListReducer } from './reducers/pizzeriasReducers'
import {
  getProductReducer,
  productsListReducer
} from './reducers/products/productsReducers'
import {
  productsCartReducer,
  sendingProductReducer
} from './reducers/productsCartReducers'

const reducer = combineReducers({
  pageNotFound: pageNotFoundReducer,
  modalOpen: modalOpenReducer,
  citiesList: citiesListReducer,
  getCity: getCityReducer,
  smsLogin: smsLoginReducer,
  login: loginReducer,
  articlesList: articlesListReducer,
  getArticle: getArticleReducer,
  bannersList: bannersListReducer,
  pizzeriasList: pizzeriasListReducer,
  pizzasList: pizzasListReducer,
  getPizza: getPizzaReducer,
  productsList: productsListReducer,
  getProduct: getProductReducer,
  combosList: combosListReducer,
  getCombo: getComboReducer,
  productsCart: productsCartReducer,
  sendingProduct: sendingProductReducer
})

export const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk))
)
