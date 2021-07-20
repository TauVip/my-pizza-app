import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Slider from './Slider'
import figureImg from '../../images/home-figure.svg'
import './styles.css'
import ModalPizzaCard from '../Modals/ModalProductCard/ModalPizzaCard'
import { fetchPizzasAction } from '../../redux/actions/pizzasActions'
import ModalAssemblePizza from '../Modals/ModalProductCard/ModalAssemblePizza'
import ModalProductCard from '../Modals/ModalProductCard'
import { fetchProductsAction } from '../../redux/actions/productsActions'
import ProductsShow from './ProductsShow'
import ModalComboCard from '../Modals/ModalProductCard/ModalComboCard'

const Home = () => {
  const dispatch = useDispatch()

  const { city } = useSelector(state => state.getCity)
  const { pizzas } = useSelector(state => state.pizzasList)
  const { products } = useSelector(state => state.productsList)

  const [pizzaId, setPizzaId] = useState(null)
  const [showAssemblePizza, setShowAssemblePizza] = useState(false)
  const [showComboCard, setShowComboCard] = useState(false)
  const [productCardId, setProductCardId] = useState(null)

  useEffect(() => {
    if (city) {
      document.title = `🍕 Додо Пицца ${city.name} | Доставка пиццы №1 в Казахстане`
      dispatch(fetchPizzasAction(city._id))
      dispatch(fetchProductsAction(city._id, 'snacks'))
      dispatch(fetchProductsAction(city._id, 'desserts'))
      dispatch(fetchProductsAction(city._id, 'drinks'))
      dispatch(fetchProductsAction(city._id, 'others'))
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
        <h1 className='product-title'>Комбо</h1>
        <section className='products-section'>
          <article className='menu__meta-product'>
            <main className='menu__meta-main'>
              <img
                alt='Комбо за 2650 тг.'
                title='Комбо за 2650 тг.'
                className='menu__meta-img'
                src='https://dodopizza-a.akamaihd.net/static/Img/ComboTemplates/e4aecdc6e454411b912eb335be5249de_233x233.webp'
                onClick={() => setShowComboCard(true)}
              />
              <div className='menu__meta-title'>Комбо за 2650 тг.</div>
              Наш хит «Аррива!» или другая пицца 25 см, Додстер, напиток и соус.
              Выбор пицц ограничен
            </main>
            <footer className='product-footer'>
              <div className='product-control-price'>от 2 650 тг.</div>
              <button
                className='product-button'
                onClick={() => setShowComboCard(true)}
              >
                Выбрать
              </button>
            </footer>
          </article>
        </section>
        {showComboCard && (
          <ModalComboCard setShowComboCard={setShowComboCard} />
        )}
        <h1 className='product-title'>Закуски</h1>
        <section className='products-section'>
          {products?.snacks?.map(snack => (
            <ProductsShow
              product={snack}
              setProductCardId={setProductCardId}
              key={snack._id}
            />
          ))}
        </section>
        <h1 className='product-title'>Десерты</h1>
        <section className='products-section'>
          {products?.desserts?.map(dessert => (
            <ProductsShow
              product={dessert}
              setProductCardId={setProductCardId}
              key={dessert._id}
            />
          ))}
        </section>
        <h1 className='product-title'>Напитки</h1>
        <section className='products-section'>
          {products?.drinks?.map(drink => (
            <ProductsShow
              product={drink}
              setProductCardId={setProductCardId}
              key={drink._id}
            />
          ))}
        </section>
        <h1 className='product-title'>Другие товары</h1>
        <section className='products-section'>
          {products?.others?.map(other => (
            <ProductsShow
              product={other}
              setProductCardId={setProductCardId}
              key={other._id}
            />
          ))}
        </section>
        {productCardId && (
          <ModalProductCard
            setProductCardId={setProductCardId}
            productCardId={productCardId}
          />
        )}
      </main>
    </>
  )
}
export default Home
