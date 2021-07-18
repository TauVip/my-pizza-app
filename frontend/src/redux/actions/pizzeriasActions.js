import axios from 'axios'
import {
  FETCH_PIZZERIAS_FAIL,
  FETCH_PIZZERIAS_REQUEST,
  FETCH_PIZZERIAS_SUCCESS
} from './actionTypes'

export const fetchPizzeriasAction =
  (cityId, fullDay, workingNow, value) => async dispatch => {
    try {
      dispatch({ type: FETCH_PIZZERIAS_REQUEST })

      const { data } = await axios.get(`/pizzerias/${cityId}`)
      let filteredPizzerias = data.filter(
        pizzeria =>
          pizzeria.name.toLowerCase().includes(value) ||
          pizzeria.address.toLowerCase().includes(value) ||
          pizzeria.metroStation.some(station =>
            station.toLowerCase().includes(value)
          )
      )

      if (fullDay)
        filteredPizzerias = filteredPizzerias.filter(
          pizzeria => pizzeria.delivery?.deliverySchedule === 'Круглосуточно'
        )

      if (workingNow && !fullDay) {
        const date = new Date()
        filteredPizzerias = filteredPizzerias.filter(pizzeria => {
          if (pizzeria.delivery) {
            if (pizzeria.delivery.deliverySchedule === 'Круглосуточно')
              return true
            const schedule = pizzeria.delivery.deliverySchedule
              .split(' — ')
              .map(val => val.split(':'))
            const begin = schedule[0]
            const end = schedule[1]
            if (end[0] < begin[0]) end[0] += 24

            const beginWorkingDay = new Date().setHours(begin[0], begin[1], 0)
            const endWorkingDay = new Date().setHours(end[0], end[1], 0)

            return date > beginWorkingDay && date < endWorkingDay
          }
          return false
        })
      }

      dispatch({
        type: FETCH_PIZZERIAS_SUCCESS,
        payload: {
          filteredPizzerias,
          pizzeriasLength: data.length,
          filteredPizzeriasLength: filteredPizzerias.length
        }
      })
    } catch (e) {
      dispatch({
        type: FETCH_PIZZERIAS_FAIL,
        payload: e.message
      })
    }
  }
