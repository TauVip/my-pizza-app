import axios from 'axios'
import {
  FETCH_CITIES_FAIL,
  FETCH_CITIES_REQUEST,
  FETCH_CITIES_SUCCESS
} from './actionTypes'

export const fetchCitiesAction = () => async dispatch => {
  try {
    dispatch({ type: FETCH_CITIES_REQUEST })

    const { data } = await axios.get('/cities')

    dispatch({
      type: FETCH_CITIES_SUCCESS,
      payload: data
    })
  } catch (e) {
    dispatch({
      type: FETCH_CITIES_FAIL,
      payload: e.message
    })
  }
}
