import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import Header from '../Header'
import Navigation from '../Navigation'

const Home = props => {
  const { city } = useSelector(state => state.getCity)

  useEffect(() => {
    if (!city) props.history.push('/')
  }, [city, props.history])

  return (
    <>
      <Header />
      <Navigation />
      <div>Home</div>
    </>
  )
}
export default Home
