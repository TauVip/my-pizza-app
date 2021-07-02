import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import Slider from './Slider'
import './styles.css'

const Home = props => {
  const { city } = useSelector(state => state.getCity)

  useEffect(() => {
    if (city)
      document.title = `🍕 Додо Пицца ${city.name} | Доставка пиццы №1 в Казахстане`
  }, [city, props.history])

  return (
    <>
      <Slider />
      <div>Home</div>
    </>
  )
}
export default Home
