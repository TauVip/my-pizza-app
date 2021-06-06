import {
  FETCH_CITIES_FAIL,
  FETCH_CITIES_REQUEST,
  FETCH_CITIES_SUCCESS
} from '../actions/actionTypes'

export const citiesListReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_CITIES_REQUEST:
      return { loading: true }
    case FETCH_CITIES_SUCCESS:
      return { loading: false, cities: action.payload }
    case FETCH_CITIES_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
