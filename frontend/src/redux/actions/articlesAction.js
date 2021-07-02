import axios from 'axios'
import {
  FETCH_ARTICLES_FAIL,
  FETCH_ARTICLES_REQUEST,
  FETCH_ARTICLES_SUCCESS
} from './actionTypes'

export const fetchArticlesAction = cityId => async dispatch => {
  try {
    dispatch({ type: FETCH_ARTICLES_REQUEST })

    const { data } = await axios.get(`/articles/${cityId}`)
    dispatch({
      type: FETCH_ARTICLES_SUCCESS,
      payload: data
    })
  } catch (e) {
    dispatch({ type: FETCH_ARTICLES_FAIL, payload: e.message })
  }
}
