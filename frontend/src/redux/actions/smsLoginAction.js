import axios from 'axios'
import {
  SMS_LOGIN_FAIL,
  SMS_LOGIN_REQUEST,
  SMS_LOGIN_SUCCESS
} from './actionTypes'

export const smsLoginAction = userPhone => async dispatch => {
  try {
    dispatch({ type: SMS_LOGIN_REQUEST })

    const data = await axios.post('/smslogin', { userPhone })

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
