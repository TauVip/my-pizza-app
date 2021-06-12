import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from './Components/Header'
import Home from './Components/Home'
import ModalLocality from './Components/Modals/ModalLocality'
import { getCityAction } from './redux/actions/citiesActions'

const App = () => {
  const dispatch = useDispatch()
  const { city } = useSelector(state => state.getCity)

  useEffect(() => {
    const storageCity = JSON.parse(localStorage.getItem('city'))
    if (!city && storageCity) dispatch(getCityAction(storageCity._id))

    if (city)
      document.title = `🍕 Додо Пицца ${city.name} | Доставка пиццы №1 в Казахстане`
  }, [city, dispatch])

  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path='/' component={ModalLocality} />
        <Route exact path='/:city' component={Home} />
      </Switch>
    </BrowserRouter>
  )
}
export default App
