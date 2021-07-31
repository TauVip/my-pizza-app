import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Route, Switch, useHistory } from 'react-router-dom'
import About from './Components/About'
import BonusActions from './Components/BonusActions'
import Contacts from './Components/Contacts'
import Header from './Components/Header'
import Home from './Components/Home'
import ModalLocality from './Components/Modals/ModalLocality'
import Navigation from './Components/Navigation'
import NotFound from './Components/NotFound'
import Profile from './Components/Profile'
import Footer from './Components/Footer'
import { isCityGet } from './redux/actions/citiesActions'
import { isUserLogin } from './redux/actions/loginActions'

const App = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const { city, getCityError } = useSelector(state => state.getCity)
  const { userInfo } = useSelector(state => state.login)
  const { pageNotFound } = useSelector(state => state.pageNotFound)
  const { modalOpen } = useSelector(state => state.modalOpen)

  useEffect(() => {
    if (!city) dispatch(isCityGet())
    if (getCityError) history.push('/')

    if (!userInfo) dispatch(isUserLogin())

    if (city)
      document.title = `🍕 Додо Пицца ${city.name} | Доставка пиццы №1 в Казахстане`

    if (modalOpen) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = 'auto'
  }, [city, dispatch, getCityError, history, modalOpen, userInfo])

  return (
    <>
      {!pageNotFound && <Header />}
      {!pageNotFound && city && <Navigation />}
      <Switch>
        <Route exact path='/' component={ModalLocality} />
        <Route exact path='/:city' component={Home} />
        <Route exact path='/:city/profile' component={Profile} />
        <Route exact path='/:city/bonusactions' component={BonusActions} />
        <Route exact path='/:city/contacts' component={Contacts} />
        <Route exact path='/:city/about' component={About} />
        <Route component={NotFound} />
      </Switch>
      {!pageNotFound && city && <Footer />}
    </>
  )
}
export default App
