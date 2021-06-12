import {
  SMS_LOGIN_FAIL,
  SMS_LOGIN_REQUEST,
  SMS_LOGIN_SUCCESS
} from '../actions/actionTypes'

export const smsLoginReducer = (state = [], action) => {
  switch (action.type) {
    case SMS_LOGIN_REQUEST:
      return { loading: true }
    case SMS_LOGIN_SUCCESS:
      return { loading: false, city: action.payload }
    case SMS_LOGIN_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
