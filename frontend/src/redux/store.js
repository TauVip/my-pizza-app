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
  loginReducer,
  pageNotFoundReducer,
  smsLoginReducer
} from './reducers/loginReducer'
import { getPizzaReducer, pizzasListReducer } from './reducers/pizzasReducer'
import { fetchPizzeriasReducer } from './reducers/pizzeriasReducer'

const reducer = combineReducers({
  pageNotFound: pageNotFoundReducer,
  citiesList: citiesListReducer,
  getCity: getCityReducer,
  smsLogin: smsLoginReducer,
  login: loginReducer,
  articlesList: articlesListReducer,
  getArticle: getArticleReducer,
  bannersList: bannersListReducer,
  fetchPizzerias: fetchPizzeriasReducer,
  fetchPizzas: pizzasListReducer,
  getPizza: getPizzaReducer
})

export const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk))
)
