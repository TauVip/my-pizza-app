/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import Slider from './Slider'
import figureImg from '../../images/home-figure.svg'
import ModalPizzaCard from '../Modals/ModalProductCard/ModalPizzaCard'
import { fetchPizzasAction } from '../../redux/actions/pizzasActions'
import ModalAssemblePizza from '../Modals/ModalProductCard/ModalAssemblePizza'
import ModalProductCard from '../Modals/ModalProductCard'
import { fetchProductsAction } from '../../redux/actions/productsActions'
import ProductsShow from './ProductsShow'
import ModalComboCard from '../Modals/ModalProductCard/ModalComboCard'
import { fetchCombosAction } from '../../redux/actions/comboProductsActions'
import './styles.css'

const Home = () => {
  const history = useHistory()
  const dispatch = useDispatch()

  const { city } = useSelector(state => state.getCity)
  const { pizzas } = useSelector(state => state.pizzasList)
  const { products } = useSelector(state => state.productsList)
  const { combos } = useSelector(state => state.combosList)

  const [pizzaId, setPizzaId] = useState(null)
  const [showAssemblePizza, setShowAssemblePizza] = useState(false)
  const [productCardId, setProductCardId] = useState(null)
  const [comboCardId, setComboCardId] = useState(null)

  useEffect(() => {
    if (city) {
      document.title = `🍕 Додо Пицца ${city.name} | Доставка пиццы №1 в Казахстане`
      dispatch(fetchPizzasAction(city._id))
      dispatch(fetchProductsAction(city._id, 'snacks'))
      dispatch(fetchProductsAction(city._id, 'desserts'))
      dispatch(fetchProductsAction(city._id, 'drinks'))
      dispatch(fetchProductsAction(city._id, 'others'))
      dispatch(fetchProductsAction(city._id, 'sauces'))
      dispatch(fetchCombosAction(city._id))
    }
  }, [city])

  useEffect(() => {
    setTimeout(
      () =>
        history.location.hash
          ? document
              .getElementById(history.location.hash.slice(1))
              ?.scrollIntoView()
          : window.scrollTo(0, 0),
      500
    )
  }, [document.body.scrollHeight])

  const assembleMinPrice = pizzas => {
    const sortPizzas = pizzas
      ?.slice()
      .sort((a, b) => a.price.small - b.price.small)
    return sortPizzas[0].price.small + sortPizzas[1].price.small
  }

  const emptyProducts = () =>
    Array.from({ length: 4 }).map((_, i) => (
      <article className='menu__meta-product' key={i}>
        <main
          className='menu__meta-main'
          style={{
            height: 400,
            boxShadow: 'rgb(115 121 140 / 50%) 0px 2px 10px -2px'
          }}
        >
          <img
            alt='Some product'
            src='https://dodopizza-a.akamaihd.net/site-static/dist/611f501db3a3369fac31.svg'
            className='menu__meta-img'
          />
        </main>
      </article>
    ))

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
        <h1 className='product-title' id='pizzas'>
          Пицца
        </h1>
        <section className='products-section'>
          {pizzas?.length ? (
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
            emptyProducts()
          )}
          {pizzaId && (
            <ModalPizzaCard pizzaId={pizzaId} setPizzaId={setPizzaId} />
          )}
          {showAssemblePizza && (
            <ModalAssemblePizza setShowAssemblePizza={setShowAssemblePizza} />
          )}
        </section>
        <h1 className='product-title' id='combos'>
          Комбо
        </h1>
        <section className='products-section'>
          {combos?.length
            ? combos.map(combo => (
                <article className='menu__meta-product' key={combo._id}>
                  <main className='menu__meta-main'>
                    <img
                      alt={combo.name}
                      title={combo.name}
                      className='menu__meta-img'
                      src={combo.image}
                      onClick={() => setComboCardId(combo._id)}
                    />
                    <div className='menu__meta-title'>{combo.name}</div>
                    {combo.description}
                  </main>
                  <footer className='product-footer'>
                    <div className='product-control-price'>
                      от {combo.price.toLocaleString()} тг.
                    </div>
                    <button
                      className='product-button'
                      onClick={() => setComboCardId(combo._id)}
                    >
                      Выбрать
                    </button>
                  </footer>
                </article>
              ))
            : emptyProducts()}
        </section>
        {comboCardId && (
          <ModalComboCard
            setComboCardId={setComboCardId}
            comboCardId={comboCardId}
          />
        )}
        <h1 className='product-title' id='snacks'>
          Закуски
        </h1>
        <section className='products-section'>
          {products?.snacks?.length
            ? products.snacks.map(snack => (
                <ProductsShow
                  product={snack}
                  setProductCardId={setProductCardId}
                  key={snack._id}
                />
              ))
            : emptyProducts()}
        </section>
        <h1 className='product-title' id='desserts'>
          Десерты
        </h1>
        <section className='products-section'>
          {products?.desserts?.length
            ? products.desserts.map(dessert => (
                <ProductsShow
                  product={dessert}
                  setProductCardId={setProductCardId}
                  key={dessert._id}
                />
              ))
            : emptyProducts()}
        </section>
        <h1 className='product-title' id='drinks'>
          Напитки
        </h1>
        <section className='products-section'>
          {products?.drinks?.length
            ? products.drinks.map(drink => (
                <ProductsShow
                  product={drink}
                  setProductCardId={setProductCardId}
                  key={drink._id}
                />
              ))
            : emptyProducts()}
        </section>
        <h1 className='product-title' id='others'>
          Другие товары
        </h1>
        <section className='products-section'>
          {products?.others?.length
            ? products.others.map(other => (
                <ProductsShow
                  product={other}
                  setProductCardId={setProductCardId}
                  key={other._id}
                />
              ))
            : emptyProducts()}
        </section>
        {productCardId && (
          <ModalProductCard
            setProductCardId={setProductCardId}
            productCardId={productCardId}
          />
        )}
        <h1 className='product-title' id='others'>
          Доставка и оплата
        </h1>
        <section className='products-section'>
          <article className='footer__article'>
            <h1 className='footer__article-title'>
              60 МИНУТ ИЛИ ПИЦЦА БЕСПЛАТНО
            </h1>
            Если мы не успеем доставить любые продукты, кроме сувенирной
            продукции и соусов, в течение 60 минут, курьер подарит вам
            сертификат на большую пиццу.
          </article>
          <article className='footer__article'>
            <h1 className='footer__article-title'>2 500 ТГ.</h1>
            <p style={{ marginBottom: 20 }}>
              Минимальная сумма доставки без учета товаров из категории «Другие
              товары»
            </p>
            <h1 className='footer__article-title'>25 000 ТГ.</h1>
            <p>Максимальная сумма при оплате наличными</p>
            Изображения продуктов могут отличаться от продуктов в заказе.
          </article>
        </section>
      </main>
    </>
  )
}
export default Home
