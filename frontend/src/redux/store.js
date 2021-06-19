import { applyMiddleware, combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { citiesListReducer, getCityReducer } from './reducers/citiesReducer'
import { loginReducer, smsLoginReducer } from './reducers/loginReducer'

const reducer = combineReducers({
  citiesList: citiesListReducer,
  getCity: getCityReducer,
  smsLogin: smsLoginReducer,
  login: loginReducer
})

export const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk))
)
