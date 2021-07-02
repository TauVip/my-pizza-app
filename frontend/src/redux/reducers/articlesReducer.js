import {
  FETCH_ARTICLES_FAIL,
  FETCH_ARTICLES_REQUEST,
  FETCH_ARTICLES_SUCCESS
} from '../actions/actionTypes'

export const articlesListReducer = (state = [], action) => {
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
