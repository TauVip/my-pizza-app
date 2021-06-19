import {
  FETCH_CITIES_FAIL,
  FETCH_CITIES_REQUEST,
  FETCH_CITIES_SUCCESS,
  GET_CITY_FAIL,
  GET_CITY_REQUEST,
  GET_CITY_SUCCESS
} from '../actions/actionTypes'

export const citiesListReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_CITIES_REQUEST:
      return { loading: true }
    case FETCH_CITIES_SUCCESS: {
      let citiesGroup = {},
        columnsGroup = []
      action.payload.filteredCities.forEach((city, i) => {
        citiesGroup = {
          ...citiesGroup,
          [city.name[0]]: citiesGroup[city.name[0]]
            ? [...citiesGroup[city.name[0]], city]
            : [city]
        }

        const num = Math.floor(
          i / Math.ceil(action.payload.filteredCities.length / 3)
        )
        columnsGroup[num] = columnsGroup[num]
          ? [...columnsGroup[num], city]
          : [city]
      })

      return {
        loading: false,
        megaCities: action.payload.megaCities,
        citiesGroup,
        columnsGroup
      }
    }
    case FETCH_CITIES_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const getCityReducer = (state = [], action) => {
  switch (action.type) {
    case GET_CITY_REQUEST:
      return { loading: true }
    case GET_CITY_SUCCESS:
      return { loading: false, city: action.payload }
    case GET_CITY_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
