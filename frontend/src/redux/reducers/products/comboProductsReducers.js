import {
  CLEAR_GET_COMBO,
  FETCH_COMBOS_FAIL,
  FETCH_COMBOS_REQUEST,
  FETCH_COMBOS_SUCCESS,
  GET_COMBO_FAIL,
  GET_COMBO_REQUEST,
  GET_COMBO_SUCCESS
} from '../../actions/actionTypes'

export const combosListReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_COMBOS_REQUEST:
      return { loading: true }
    case FETCH_COMBOS_SUCCESS:
      return { loading: false, combos: action.payload }
    case FETCH_COMBOS_FAIL:
      return { loading: false, combosListError: action.payload }
    default:
      return state
  }
}

export const getComboReducer = (state = [], action) => {
  switch (action.type) {
    case GET_COMBO_REQUEST:
      return { loading: true }
    case GET_COMBO_SUCCESS:
      return {
        loading: false,
        combo: action.payload
      }
    case GET_COMBO_FAIL:
      return { loading: false, getComboError: action.payload }
    case CLEAR_GET_COMBO:
      return []
    default:
      return state
  }
}
