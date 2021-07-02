import { applyMiddleware, combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { articlesListReducer } from './reducers/articlesReducer'
import { citiesListReducer, getCityReducer } from './reducers/citiesReducer'
import {
  loginReducer,
  pageNotFoundReducer,
  smsLoginReducer
} from './reducers/loginReducer'
import { fetchPizzeriasReducer } from './reducers/pizzeriasReducer'

const reducer = combineReducers({
  pageNotFound: pageNotFoundReducer,
  citiesList: citiesListReducer,
  getCity: getCityReducer,
  smsLogin: smsLoginReducer,
  login: loginReducer,
  articlesList: articlesListReducer,
  fetchPizzerias: fetchPizzeriasReducer
})

export const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk))
)
