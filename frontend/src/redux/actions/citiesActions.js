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
      const cities = data.sort((a, b) =>
        a.name > b.name ? 1 : a.name < b.name ? -1 : 0
      )
      const megaCities = cities.filter(city => city.status === 'megacity')
      const filteredCities = cities.filter(city =>
        city.name.toLowerCase().includes(value)
      )

      dispatch({
        type: FETCH_CITIES_SUCCESS,
        payload: { megaCities, filteredCities }
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
