import { applyMiddleware, combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { citiesListReducer } from './reducers/citiesListReducer'

const reducer = combineReducers({
  citiesList: citiesListReducer
})

export const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk))
)
