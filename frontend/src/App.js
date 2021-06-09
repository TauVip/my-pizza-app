import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from './Components/Header'
import Home from './Components/Home'
import ModalLocality from './Components/ModalLocality'

const App = () => {
  const locality = localStorage.getItem('locality')

  return (
    <BrowserRouter>
      <Header locality={locality} />
      <Switch>
        <Route exact path='/' component={ModalLocality} />
        <Route exact path='/:city' component={Home} />
      </Switch>
    </BrowserRouter>
  )
}
export default App
