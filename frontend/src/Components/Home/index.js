import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Slider from './Slider'
import figureImg from '../../images/home-figure.svg'
import './styles.css'
import { useState } from 'react'
import ModalProductCard from '../Modals/ModalProductCard'
import { fetchPizzasAction } from '../../redux/actions/pizzasAction'

const Home = () => {
  const dispatch = useDispatch()

  const { city } = useSelector(state => state.getCity)
  const { pizzas } = useSelector(state => state.fetchPizzas)

  const [showProductCard, setShowProductCard] = useState(false)

  useEffect(() => {
    if (city)
      document.title = `🍕 Додо Пицца ${city.name} | Доставка пиццы №1 в Казахстане`

    if (city && !pizzas) dispatch(fetchPizzasAction(city._id))
  }, [city, dispatch, pizzas])

  return (
    <>
      <Slider />

      <main className='container'>
        <figure className='home-figure'>
          <img src={figureImg} alt='' />
          <figcaption className='caption'>
            <h1 className='figcaption-title'>Без свинины</h1>
            Мы готовим из цыпленка и говядины
          </figcaption>
        </figure>
        <h1 className='product-title'>Пицца</h1>
        <section className='products-section'>
          {pizzas &&
            pizzas.map(pizza => (
              <article className='menu__meta-product' key={pizza._id}>
                <main className='menu__meta-main'>
                  <img
                    alt={pizza.name}
                    title={pizza.name}
                    className='menu__meta-img'
                    src={pizza.images.traditional.medium}
                    onClick={() => setShowProductCard(true)}
                  />
                  <div className='menu__meta-title'>{pizza.name}</div>
                  {pizza.composition.map(compose => compose.name).join(', ')}
                </main>
                <footer className='product-footer'>
                  <div className='product-control-price'>
                    от {pizza.price.small.toLocaleString()} тг.
                  </div>
                  <button
                    className='product-button'
                    onClick={() => setShowProductCard(true)}
                  >
                    Выбрать
                  </button>
                </footer>
                {showProductCard && (
                  <ModalProductCard
                    setShowProductCard={setShowProductCard}
                    pizzaId={pizza._id}
                  />
                )}
              </article>
            ))}
        </section>
      </main>
    </>
  )
}
export default Home
