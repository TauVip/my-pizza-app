import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import Slider from './Slider'
import figureImg from '../../images/home-figure.svg'
import './styles.css'
import { useState } from 'react'
import ModalProductCard from '../Modals/ModalProductCard'

const Home = props => {
  const { city } = useSelector(state => state.getCity)

  const [showProductCard, setShowProductCard] = useState(false)

  useEffect(() => {
    if (city)
      document.title = `🍕 Додо Пицца ${city.name} | Доставка пиццы №1 в Казахстане`
  }, [city, props.history])

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
          <article className='menu__meta-product'>
            <main className='menu__meta-main'>
              <img
                alt='Пицца от Кеши'
                title='Пицца от Кеши'
                className='menu__meta-img'
                src='https://dodopizza-a.akamaihd.net/static/Img/Products/1107d08937004f11968ee06cc546d181_292x292.jpeg'
                onClick={() => setShowProductCard(true)}
              />
              <div className='menu__meta-title'>Пицца от Кеши</div>
              Цыпленок, картофель из печи, томаты, моцарелла, томатный соус
            </main>
            <footer className='product-footer'>
              <div className='product-control-price'>от 2 350 тг.</div>
              <button
                className='product-button'
                onClick={() => setShowProductCard(true)}>
                Выбрать
              </button>
            </footer>
            {showProductCard && (
              <ModalProductCard setShowProductCard={setShowProductCard} />
            )}
          </article>
          <article className='menu__meta-product'>
            <main className='menu__meta-main'>
              <img
                alt='Пицца от Кеши'
                title='Пицца от Кеши'
                className='menu__meta-img'
                src='https://dodopizza-a.akamaihd.net/static/Img/Products/1107d08937004f11968ee06cc546d181_292x292.jpeg'
              />
              <div className='menu__meta-title'>Пицца от Кеши</div>
              Цыпленок, картофель из печи, томаты, моцарелла, томатный соус,
              картофель из печи, томаты, моцарелла, томатный соус
            </main>
            <footer className='product-footer'>
              <div className='product-control-price'>от 2 350 тг.</div>
              <button className='product-button collect-button'>Собрать</button>
            </footer>
          </article>
          <article className='menu__meta-product'>
            <main className='menu__meta-main'>
              <img
                alt='Пицца от Кеши'
                title='Пицца от Кеши'
                className='menu__meta-img'
                src='https://dodopizza-a.akamaihd.net/static/Img/Products/1107d08937004f11968ee06cc546d181_292x292.jpeg'
              />
              <div className='menu__meta-title'>Пицца от Кеши</div>
              Цыпленок, картофель из печи, томаты, моцарелла, томатный соус
            </main>
            <footer className='product-footer'>
              <div className='product-control-price'>от 2 350 тг.</div>
              <button className='product-button'>Выбрать</button>
            </footer>
          </article>
          <article className='menu__meta-product'>
            <main className='menu__meta-main'>
              <img
                alt='Пицца от Кеши'
                title='Пицца от Кеши'
                className='menu__meta-img'
                src='https://dodopizza-a.akamaihd.net/static/Img/Products/1107d08937004f11968ee06cc546d181_292x292.jpeg'
              />
              <div className='menu__meta-title'>Пицца от Кеши</div>
              Цыпленок, картофель из печи, томаты, моцарелла, томатный соус
            </main>
            <footer className='product-footer'>
              <div className='product-control-price'>от 2 350 тг.</div>
              <button className='product-button'>Выбрать</button>
            </footer>
          </article>
          <article className='menu__meta-product'>
            <main className='menu__meta-main'>
              <img
                alt='Пицца от Кеши'
                title='Пицца от Кеши'
                className='menu__meta-img'
                src='https://dodopizza-a.akamaihd.net/static/Img/Products/1107d08937004f11968ee06cc546d181_292x292.jpeg'
              />
              <div className='menu__meta-title'>Пицца от Кеши</div>
              Цыпленок, картофель из печи, томаты, моцарелла, томатный соус
            </main>
            <footer className='product-footer'>
              <div className='product-control-price'>от 2 350 тг.</div>
              <button className='product-button'>Выбрать</button>
            </footer>
          </article>
        </section>
      </main>
    </>
  )
}
export default Home
