import axios from 'axios'
import {
  FETCH_CITIES_FAIL,
  FETCH_CITIES_REQUEST,
  FETCH_CITIES_SUCCESS,
  GET_CITY_FAIL,
  GET_CITY_REQUEST,
  GET_CITY_SUCCESS
} from './actionTypes'

export const fetchCitiesAction =
  (value = '') =>
  async dispatch => {
    try {
      dispatch({ type: FETCH_CITIES_REQUEST })

      const { data } = await axios.get('/cities')
      const filteredCities = data.filter(city =>
        city.name.toLowerCase().includes(value)
      )

      dispatch({
        type: FETCH_CITIES_SUCCESS,
        payload: filteredCities
      })
    } catch (e) {
      dispatch({
        type: FETCH_CITIES_FAIL,
        payload: e.message
      })
    }
  }

export const getCityAction = cityId => async dispatch => {
  try {
    dispatch({ type: GET_CITY_REQUEST })

    const { data } = await axios.get(`/cities/${cityId}`)
    dispatch({
      type: GET_CITY_SUCCESS,
      payload: data
    })
    localStorage.setItem('city', JSON.stringify(data))
  } catch (e) {
    dispatch({
      type: GET_CITY_FAIL,
      payload: e.message
    })
  }
}

export const isCityGet = () => dispatch => {
  const city = JSON.parse(localStorage.getItem('city'))

  if (city)
    dispatch({
      type: GET_CITY_SUCCESS,
      payload: city
    })
  else
    dispatch({
      type: GET_CITY_FAIL,
      payload: 'City is not in LocalStorage'
    })
}
