import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import Slider from './Slider'
import figureImg from '../../images/home-figure.svg'
import ModalPizzaCard from '../Modals/ModalProductCard/ModalPizzaCard'
import {
  fetchPizzasAction,
  showAssemblePizzaAction
} from '../../redux/actions/products/pizzasActions'
import ModalAssemblePizza from '../Modals/ModalProductCard/ModalAssemblePizza'
import ModalProductCard from '../Modals/ModalProductCard'
import {
  clearGetProduct,
  fetchProductsAction,
  getOpenCardAction
} from '../../redux/actions/products/productsActions'
import ProductsShow from './ProductsShow'
import ModalComboCard from '../Modals/ModalProductCard/ModalComboCard'
import { fetchCombosAction } from '../../redux/actions/products/comboProductsActions'
import './styles.css'
import Container from '../../Container'
import PizzasShow from './PizzasShow'
import CombosShow from './CombosShow'
import { productsCartAction } from '../../redux/reducers/productsCartReducers'
import { ADD_QUANTITY_CART, ADD_TO_CART } from '../../redux/actions/actionTypes'
import { imagesURL } from '../../redux/store'

const Home = () => {
  const dispatch = useDispatch()
  const history = useHistory()

  const { city } = useSelector(state => state.getCity)
  const { pizzas } = useSelector(state => state.pizzasList)
  const { products } = useSelector(state => state.productsList)
  const { combos } = useSelector(state => state.combosList)
  const { product } = useSelector(state => state.getProduct)
  const { pizza, showAssemblePizza } = useSelector(state => state.getPizza)
  const { combo } = useSelector(state => state.getCombo)
  const productsCart = useSelector(state => state.productsCart)

  useEffect(() => {
    if (city) {
      document.title = `🍕 Додо Пицца ${city.name} | Доставка пиццы №1 в Казахстане`
      dispatch(fetchPizzasAction(city._id))
      dispatch(fetchProductsAction(city._id))
      dispatch(fetchCombosAction(city._id))
      dispatch(getOpenCardAction())
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [city])

  const [move, setMove] = useState(true)
  const scroll = () => {
    const titles = document.getElementsByClassName('product-title').length,
      title = document.getElementById(history.location.hash.slice(1))
    if (titles) {
      if (
        (!title && document.body.getBoundingClientRect().y > -10) ||
        (title?.getBoundingClientRect().y < 10 &&
          title?.getBoundingClientRect().y > -10)
      ) {
        setMove(false)
        document.removeEventListener('scroll', scroll)
      }
    } else document.removeEventListener('scroll', scroll)
  }
  const moveFn = () => {
    setMove(true)
    const title = document.getElementById(history.location.hash.slice(1))
    title ? title.scrollIntoView() : window.scroll(0, 0)
    document.addEventListener('scroll', scroll)
  }
  useEffect(() => {
    const title = document.getElementById(history.location.hash.slice(1))
    let timer
    if (
      title &&
      pizzas?.length > 0 &&
      products?.length > 0 &&
      combos?.length > 0
    )
      timer = setTimeout(moveFn, 500)
    else if (!title) moveFn()

    return () => clearTimeout(timer)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pizzas, products, combos])
  useEffect(() => {
    if (!move) {
      const title = document.getElementById(history.location.hash.slice(1))
      const onScroll = () => {
        const titles = [...document.getElementsByClassName('product-title')],
          nextTitle = titles[titles.indexOf(title) + 1],
          prevTitle = titles[titles.indexOf(title) - 1]
        if (title?.getBoundingClientRect().y > 500)
          history.replace({ hash: prevTitle?.id })
        else if (nextTitle?.id && nextTitle.getBoundingClientRect().y < 500)
          history.replace({ hash: nextTitle.id })
      }
      document.addEventListener('scroll', onScroll)

      return () => document.removeEventListener('scroll', onScroll)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [history.location.hash, move])

  const [sendingProduct, setSendingProduct] = useState(null)
  useEffect(() => {
    if (sendingProduct) setTimeout(() => setSendingProduct(null), 2000)
  }, [sendingProduct])

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

  const productCartAdd = item => {
    const checkProduct = productsCart?.find(
      product => JSON.stringify(product.item) === JSON.stringify(item)
    )
    checkProduct
      ? dispatch(productsCartAction(ADD_QUANTITY_CART, item))
      : dispatch(productsCartAction(ADD_TO_CART, item))

    setSendingProduct(item)

    dispatch(clearGetProduct())
  }
  const productItem = product => {
    const item = {
      type: 'product',
      productId: product._id,
      image: imagesURL + product.image,
      name: product.name,
      description: product.defaultCount,
      price: product.price
    }
    productCartAdd(item)
  }
  const productsShow = category =>
    products?.length
      ? products.map(
          product =>
            product.category === category && (
              <ProductsShow
                key={product._id}
                product={product}
                onClick={() => productItem(product)}
              />
            )
        )
      : emptyProducts()

  return (
    <Container sendingProduct={sendingProduct} moveFn={moveFn}>
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
          {pizzas?.length > 0 ? (
            <>
              <article className='menu__meta-product'>
                <main className='menu__meta-main'>
                  <img
                    alt='Пицца из половинок'
                    title='Пицца из половинок'
                    className='menu__meta-img'
                    src='https://dodopizza-a.akamaihd.net/static/Img/Products/0851076ebbeb4937ad70c52bc64a4c3b_292x292.jpeg'
                    onClick={() => dispatch(showAssemblePizzaAction(true))}
                  />
                  <div className='menu__meta-title'>Пицца из половинок</div>
                  Соберите свою пиццу 35 см с двумя разными вкусами
                </main>
                <footer className='product-footer'>
                  <div className='product-control-price'>
                    от {assembleMinPrice(pizzas).toLocaleString()} тг.
                  </div>
                  <button
                    className='product-button collect-button'
                    onClick={() => dispatch(showAssemblePizzaAction(true))}
                  >
                    Собрать
                  </button>
                </footer>
              </article>
              {pizzas.map(pizza => (
                <PizzasShow key={pizza._id} pizza={pizza} />
              ))}
            </>
          ) : (
            emptyProducts()
          )}
          {pizza && <ModalPizzaCard productCartAdd={productCartAdd} />}
          {showAssemblePizza && (
            <ModalAssemblePizza productCartAdd={productCartAdd} />
          )}
        </section>
        <h1 className='product-title' id='combos'>
          Комбо
        </h1>
        <section className='products-section'>
          {combos?.length > 0
            ? combos.map(combo => <CombosShow key={combo._id} combo={combo} />)
            : emptyProducts()}
        </section>
        {combo && <ModalComboCard productCartAdd={productCartAdd} />}
        <h1 className='product-title' id='snacks'>
          Закуски
        </h1>
        <section className='products-section'>{productsShow('snacks')}</section>
        <h1 className='product-title' id='desserts'>
          Десерты
        </h1>
        <section className='products-section'>
          {productsShow('desserts')}
        </section>
        <h1 className='product-title' id='drinks'>
          Напитки
        </h1>
        <section className='products-section'>{productsShow('drinks')}</section>
        <h1 className='product-title' id='others'>
          Другие товары
        </h1>
        <section className='products-section'>{productsShow('others')}</section>
        {product && <ModalProductCard onClick={() => productItem(product)} />}
        <h1 className='product-title'>Доставка и оплата</h1>
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
            <p style={{ margin: '0px 0px 20px' }}>
              Минимальная сумма доставки без учета товаров из категории «Другие
              товары»
            </p>
            <h1 className='footer__article-title'>25 000 ТГ.</h1>
            <p>Максимальная сумма при оплате наличными</p>
            Изображения продуктов могут отличаться от продуктов в заказе.
          </article>
          <article
            className='footer__article'
            style={{ marginRight: 0, width: '22%' }}
          >
            <h1 className='footer__article-title'>ЗОНА ДОСТАВКИ ОГРАНИЧЕНА</h1>
            <Link
              to={{
                pathname:
                  'https://yandex.ru/maps/221/chimkent/?ll=69.623142%2C42.329382&mode=usermaps&source=constructorLink&um=constructor%3A6bc8c368e470b4267cda9c7853ff6aed74d68c564eb3c31d3b584066d77a7df5&z=12.4'
              }}
              target='_blank'
              className='delivery__zone-menu'
            >
              <img
                src='https://dodopizza-a.akamaihd.net/site-static/dist/afdce5bbb5d38204b6c6.jpg'
                alt='map'
                className='delivery__zone-image'
              />
              <span className='delivery__zone-text'>Зона доставки</span>
            </Link>
          </article>
        </section>
      </main>
    </Container>
  )
}
export default Home
