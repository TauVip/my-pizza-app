import { applyMiddleware, combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import {
  articlesListReducer,
  bannersListReducer,
  getArticleReducer
} from './reducers/articlesReducer'
import { citiesListReducer, getCityReducer } from './reducers/citiesReducer'
import {
  combosListReducer,
  getComboReducer
} from './reducers/comboProductsReducer'
import {
  loginReducer,
  modalOpenReducer,
  pageNotFoundReducer,
  smsLoginReducer
} from './reducers/loginReducer'
import { getPizzaReducer, pizzasListReducer } from './reducers/pizzasReducer'
import { pizzeriasListReducer } from './reducers/pizzeriasReducer'
import {
  getProductReducer,
  productsListReducer
} from './reducers/productsReducer'

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
  getCombo: getComboReducer
})

export const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk))
)
