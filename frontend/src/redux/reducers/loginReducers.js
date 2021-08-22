import {
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  MODAL_OPEN,
  PAGE_NOT_FOUND,
  SMS_LOGIN_FAIL,
  SMS_LOGIN_REQUEST,
  SMS_LOGIN_SUCCESS
} from '../actions/actionTypes'

export const pageNotFoundReducer = (state = [], action) =>
  action.type === PAGE_NOT_FOUND ? { pageNotFound: action.payload } : state

export const modalOpenReducer = (state = [], action) =>
  action.type === MODAL_OPEN ? { modalOpen: action.payload } : state

export const smsLoginReducer = (state = [], action) => {
  switch (action.type) {
    case SMS_LOGIN_REQUEST:
      return { loading: true }
    case SMS_LOGIN_SUCCESS:
      return {
        loading: false,
        code: action.payload.code,
        userPhone: action.payload.userPhone
      }
    case SMS_LOGIN_FAIL:
      return { loading: false, smsLoginError: action.payload }
    default:
      return state
  }
}

export const loginReducer = (state = [], action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return { loading: true }
    case LOGIN_SUCCESS:
      return { loading: false, userInfo: action.payload }
    case LOGIN_FAIL:
      return { loading: false, loginError: action.payload }
    default:
      return state
  }
}
