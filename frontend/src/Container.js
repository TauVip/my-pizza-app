import Footer from './Components/Footer'
import Header from './Components/Header'
import Navigation from './Components/Navigation'

const Container = props => (
  <>
    <Header />
    <Navigation sendingProduct={props.sendingProduct} />
    {props.children}
    <Footer />
  </>
)
export default Container
