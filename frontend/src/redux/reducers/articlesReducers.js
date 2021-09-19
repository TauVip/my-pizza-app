import {
  FETCH_ARTICLES_FAIL,
  FETCH_ARTICLES_REQUEST,
  FETCH_ARTICLES_SUCCESS,
  FETCH_BANNERS_FAIL,
  FETCH_BANNERS_REQUEST,
  FETCH_BANNERS_SUCCESS,
  GET_ARTICLE_FAIL,
  GET_ARTICLE_REQUEST,
  GET_ARTICLE_SUCCESS
} from '../actions/actionTypes'

export const articlesListReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_ARTICLES_REQUEST:
      return { loading: true }
    case FETCH_ARTICLES_SUCCESS:
      return {
        articles: action.payload,
        loading: false
      }
    case FETCH_ARTICLES_FAIL:
      return { loading: false, articlesError: action.payload }
    default:
      return state
  }
}

export const getArticleReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_ARTICLE_REQUEST:
      return { loading: true }
    case GET_ARTICLE_SUCCESS:
      return {
        article: action.payload,
        loading: false
      }
    case GET_ARTICLE_FAIL:
      return { loading: false, getArticleError: action.payload }
    default:
      return state
  }
}

export const bannersListReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_BANNERS_REQUEST:
      return { loading: true }
    case FETCH_BANNERS_SUCCESS:
      return {
        banners: action.payload,
        loading: false
      }
    case FETCH_BANNERS_FAIL:
      return { loading: false, bannersError: action.payload }
    default:
      return state
  }
}
