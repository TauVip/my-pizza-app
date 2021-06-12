import { applyMiddleware, combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { citiesListReducer } from './reducers/citiesListReducer'
import { getCityReducer } from './reducers/getCityReducer'
import { smsLoginReducer } from './reducers/smsLoginReducer'

const reducer = combineReducers({
  citiesList: citiesListReducer,
  getCity: getCityReducer,
  smsLogin: smsLoginReducer
})

export const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk))
)
