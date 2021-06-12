import {
  GET_CITY_FAIL,
  GET_CITY_REQUEST,
  GET_CITY_SUCCESS
} from '../actions/actionTypes'

export const getCityReducer = (state = [], action) => {
  switch (action.type) {
    case GET_CITY_REQUEST:
      return { loading: true }
    case GET_CITY_SUCCESS:
      return { loading: false, city: action.payload }
    case GET_CITY_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
