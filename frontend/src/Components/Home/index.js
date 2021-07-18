import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Slider from './Slider'
import figureImg from '../../images/home-figure.svg'
import './styles.css'
import ModalPizzaCard from '../Modals/ModalProductCard/ModalPizzaCard'
import { fetchPizzasAction } from '../../redux/actions/pizzasAction'
import ModalAssemblePizza from '../Modals/ModalProductCard/ModalAssemblePizza'
import ModalProductCard from '../Modals/ModalProductCard'

const Home = () => {
  const dispatch = useDispatch()

  const { city } = useSelector(state => state.getCity)
  const { pizzas } = useSelector(state => state.fetchPizzas)

  const [pizzaId, setPizzaId] = useState(null)
  const [showAssemblePizza, setShowAssemblePizza] = useState(false)
  const [showProductCard, setShowProductCard] = useState(false)

  useEffect(() => {
    if (city) {
      document.title = `🍕 Додо Пицца ${city.name} | Доставка пиццы №1 в Казахстане`
      dispatch(fetchPizzasAction(city._id))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [city])

  const assembleMinPrice = pizzas => {
    const sortPizzas = pizzas
      ?.slice()
      .sort((a, b) => a.price.small - b.price.small)
    return sortPizzas[0].price.small + sortPizzas[1].price.small
  }

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
          {pizzas?.length > 0 ? (
            <>
              <article className='menu__meta-product'>
                <main className='menu__meta-main'>
                  <img
                    alt='Пицца из половинок'
                    title='Пицца из половинок'
                    className='menu__meta-img'
                    src='https://dodopizza-a.akamaihd.net/static/Img/Products/0851076ebbeb4937ad70c52bc64a4c3b_292x292.jpeg'
                    onClick={() => setShowAssemblePizza(true)}
                  />
                  <div className='menu__meta-title'>Пицца из половинок</div>
                  Соберите свою пиццу 35 см с двумя разными вкусами
                </main>
                <footer className='product-footer'>
                  <div className='product-control-price'>
                    от {assembleMinPrice(pizzas)} тг.
                  </div>
                  <button
                    className='product-button collect-button'
                    onClick={() => setShowAssemblePizza(true)}
                  >
                    Собрать
                  </button>
                </footer>
              </article>
              {pizzas.map(pizza => (
                <article className='menu__meta-product' key={pizza._id}>
                  <main className='menu__meta-main'>
                    <img
                      alt={pizza.name}
                      title={pizza.name}
                      className='menu__meta-img'
                      src={
                        pizza.images.traditional.medium ||
                        pizza.images.traditional.small
                      }
                      onClick={() => setPizzaId(pizza._id)}
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
                      onClick={() => setPizzaId(pizza._id)}
                    >
                      Выбрать
                    </button>
                  </footer>
                </article>
              ))}
            </>
          ) : (
            Array.from({ length: 4 }).map((_, i) => (
              <article className='menu__meta-product' key={i}>
                <main
                  className='menu__meta-main'
                  style={{
                    height: 400,
                    boxShadow: 'rgb(115 121 140 / 50%) 0px 2px 10px -2px'
                  }}
                >
                  <img alt='Some product' src='' className='menu__meta-img' />
                </main>
              </article>
            ))
          )}
          {pizzaId && (
            <ModalPizzaCard pizzaId={pizzaId} setPizzaId={setPizzaId} />
          )}
          {showAssemblePizza && (
            <ModalAssemblePizza setShowAssemblePizza={setShowAssemblePizza} />
          )}
        </section>
        <h1 className='product-title'>Закуски</h1>
        <section className='products-section'>
          <article className='menu__meta-product'>
            <main className='menu__meta-main'>
              <img
                alt='Томатный суп с гренками'
                title='Томатный суп с гренками'
                className='menu__meta-img'
                src='https://dodopizza-a.akamaihd.net/static/Img/Products/bbe43b83a9f34ec3bbcdb2b7b67749bc_233x233.jpeg'
                onClick={() => setShowProductCard(true)}
              />
              <div className='menu__meta-title'>Томатный суп с гренками 🌱</div>
              Суп на основе натурального томатного соуса с хрустящими гренками.
            </main>
            <footer className='product-footer'>
              <div className='product-control-price'>от 490 тг.</div>
              <button
                className='product-button'
                onClick={() => setShowProductCard(true)}
              >
                В корзину
              </button>
            </footer>
          </article>
          {showProductCard && (
            <ModalProductCard setShowProductCard={setShowProductCard} />
          )}
        </section>
      </main>
    </>
  )
}
export default Home
