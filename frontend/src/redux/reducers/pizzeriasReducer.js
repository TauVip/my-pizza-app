import {
  FETCH_PIZZERIAS_FAIL,
  FETCH_PIZZERIAS_REQUEST,
  FETCH_PIZZERIAS_SUCCESS
} from '../actions/actionTypes'

export const fetchPizzeriasReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_PIZZERIAS_REQUEST:
      return { loading: true }
    case FETCH_PIZZERIAS_SUCCESS:
      const { filteredPizzerias, pizzeriasLength, filteredPizzeriasLength } =
        action.payload

      const pizzeriasSections = Array.from(
        { length: Math.ceil(filteredPizzerias.length / 4) },
        () => []
      )
      filteredPizzerias.map((pizzeria, i) =>
        pizzeriasSections[Math.floor(i / 4)].push(pizzeria)
      )

      return {
        loading: false,
        pizzeriasSections,
        pizzeriasLength,
        filteredPizzeriasLength
      }
    case FETCH_PIZZERIAS_FAIL:
      return { loading: false, fetchPizzeriasError: action.payload }
    default:
      return state
  }
}
