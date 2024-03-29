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
import { loginReducer, smsLoginReducer } from './reducers/loginReducers'
import {
  getPizzaReducer,
  pizzasListReducer
} from './reducers/products/pizzasReducers'
import { pizzeriasListReducer } from './reducers/pizzeriasReducers'
import {
  getProductReducer,
  productsListReducer
} from './reducers/products/productsReducers'
import { productsCartReducer } from './reducers/productsCartReducers'

const reducer = combineReducers({
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
  productsCart: productsCartReducer
})

export const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk))
)

export const imagesURL = 'http://localhost:5000/images/'
