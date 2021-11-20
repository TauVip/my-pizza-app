import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Route, Switch, useHistory } from 'react-router-dom'
import About from './Components/About'
import BonusActions from './Components/BonusActions'
import Contacts from './Components/Contacts'
import Home from './Components/Home'
import ModalLocality from './Components/Modals/ModalLocality'
import NotFound from './Components/NotFound'
import Profile from './Components/Profile'
import { isCityGet } from './redux/actions/citiesActions'
import { isUserLogin } from './redux/actions/loginActions'

const App = () => {
  const history = useHistory()
  const dispatch = useDispatch()

  const { city, getCityError } = useSelector(state => state.getCity)
  const { userInfo } = useSelector(state => state.login)

  useEffect(() => {
    if (!userInfo) dispatch(isUserLogin())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userInfo])

  useEffect(() => {
    if (city) {
      if (history.location.pathname === '/') history.push(city.link)
      document.title = `🍕 Додо Пицца ${city.name} | Доставка пиццы №1 в Казахстане`
    } else if (getCityError) history.push('/')
    else dispatch(isCityGet())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [city, getCityError])

  return (
    <Switch>
      <Route exact path='/' component={ModalLocality} />
      <Route exact path='/:city' component={Home} />
      <Route exact path='/:city/profile' component={Profile} />
      <Route exact path='/:city/bonusactions' component={BonusActions} />
      <Route exact path='/:city/contacts' component={Contacts} />
      <Route exact path='/:city/about' component={About} />
      <Route component={NotFound} />
    </Switch>
  )
}
export default App
