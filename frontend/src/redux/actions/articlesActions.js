import axios from 'axios'
import {
  CLEAR_GET_ARTICLE,
  FETCH_ARTICLES_FAIL,
  FETCH_ARTICLES_REQUEST,
  FETCH_ARTICLES_SUCCESS,
  FETCH_BANNERS_FAIL,
  FETCH_BANNERS_REQUEST,
  FETCH_BANNERS_SUCCESS,
  GET_ARTICLE_FAIL,
  GET_ARTICLE_REQUEST,
  GET_ARTICLE_SUCCESS
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

export const getArticleAction = articleId => async dispatch => {
  try {
    dispatch({ type: GET_ARTICLE_REQUEST })

    const { data } = await axios.get(`/articles/getArticle/${articleId}`)
    dispatch({
      type: GET_ARTICLE_SUCCESS,
      payload: data
    })
  } catch (e) {
    dispatch({ type: GET_ARTICLE_FAIL, payload: e.message })
  }
}
export const clearGetArticle = () => dispatch =>
  dispatch({ type: CLEAR_GET_ARTICLE })

export const fetchBannersAction = cityId => async dispatch => {
  try {
    dispatch({ type: FETCH_BANNERS_REQUEST })

    const { data } = await axios.get(`/banners/${cityId}`)
    dispatch({
      type: FETCH_BANNERS_SUCCESS,
      payload: data
    })
  } catch (e) {
    dispatch({ type: FETCH_BANNERS_FAIL, payload: e.message })
  }
}
