import Footer from './Components/Footer'
import Header from './Components/Header'
import Navigation from './Components/Navigation'

const Container = props => (
  <>
    <div style={{ flex: '1 0 auto' }}>
      <Header />
      <Navigation sendingProduct={props.sendingProduct} />
      {props.children}
    </div>
    <Footer />
  </>
)
export default Container
