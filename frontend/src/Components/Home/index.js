import { useEffect } from 'react'
import { useSelector } from 'react-redux'

const Home = props => {
  const { city } = useSelector(state => state.getCity)

  useEffect(() => {
    if (!city) props.history.push('/')
  }, [city, props.history])

  return <div>Home</div>
}
export default Home
