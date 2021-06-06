import { BrowserRouter } from 'react-router-dom'
import Header from './Components/Header'
import ModalLocality from './Components/ModalLocality'

const App = () => {
  const locality = localStorage.getItem('locality')

  return (
    <BrowserRouter>
      <Header locality={locality} />
      {!locality && <ModalLocality />}
    </BrowserRouter>
  )
}
export default App
