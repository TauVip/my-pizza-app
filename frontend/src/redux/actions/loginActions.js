import axios from 'axios'
import {
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  PAGE_NOT_FOUND,
  SMS_LOGIN_FAIL,
  SMS_LOGIN_REQUEST,
  SMS_LOGIN_SUCCESS
} from './actionTypes'

export const pageNotFoundAction = val => dispatch =>
  dispatch({ type: PAGE_NOT_FOUND, payload: val })

export const smsLoginAction = userPhone => async dispatch => {
  try {
    dispatch({ type: SMS_LOGIN_REQUEST })

    const { data } = await axios.post('/smslogin', { userPhone })

    dispatch({
      type: SMS_LOGIN_SUCCESS,
      payload: data
    })
  } catch (e) {
    dispatch({
      type: SMS_LOGIN_FAIL,
      payload: e.message
    })
  }
}

export const loginAction = userPhone => async dispatch => {
  try {
    dispatch({ type: LOGIN_REQUEST })

    const { data } = await axios.post('/users', { userPhone })
    dispatch({
      type: LOGIN_SUCCESS,
      payload: data
    })
    localStorage.setItem('userInfo', JSON.stringify(data))
  } catch (e) {
    dispatch({
      type: LOGIN_FAIL,
      payload: e.message
    })
  }
}

export const isUserLogin = () => dispatch => {
  try {
    const user = JSON.parse(localStorage.getItem('userInfo'))

    dispatch({
      type: LOGIN_SUCCESS,
      payload: user
    })
  } catch (e) {
    dispatch({
      type: LOGIN_FAIL,
      payload: e.message
    })
  }
}
