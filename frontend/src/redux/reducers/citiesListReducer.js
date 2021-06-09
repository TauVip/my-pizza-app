import {
  FETCH_CITIES_FAIL,
  FETCH_CITIES_REQUEST,
  FETCH_CITIES_SUCCESS
} from '../actions/actionTypes'

export const citiesListReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_CITIES_REQUEST:
      return { loading: true }
    case FETCH_CITIES_SUCCESS: {
      const cities = action.payload.sort((a, b) =>
        a.name > b.name ? 1 : a.name < b.name ? -1 : 0
      )
      let citiesGroup = {}
      let columnsGroup = []

      cities.forEach((city, i) => {
        citiesGroup = {
          ...citiesGroup,
          [city.name[0]]: citiesGroup[city.name[0]]
            ? [...citiesGroup[city.name[0]], city]
            : [city]
        }

        let num = Math.floor(i / Math.ceil(cities.length / 3))
        columnsGroup[num] = columnsGroup[num]
          ? [...columnsGroup[num], city]
          : [city]
      })

      return { loading: false, cities, citiesGroup, columnsGroup }
    }
    case FETCH_CITIES_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
