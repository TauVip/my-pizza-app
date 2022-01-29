import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  clearGetArticle,
  fetchBannersAction
} from '../../../redux/actions/articlesActions'
import { getPizzaAction } from '../../../redux/actions/products/pizzasActions'
import { getProductAction } from '../../../redux/actions/products/productsActions'
import ModalArticle from '../../Modals/ModalArticle'
import Banner from './Banner'
import './styles.css'

const Slider = () => {
  const x = -1304

  const [translate, setTranslate] = useState(x)
  const [current, setCurrent] = useState(0)
  const [moveSlide, setMoveSlide] = useState(false)
  const [startPoint, setStartPoint] = useState(null)
  const [startTranslate, setStartTranslate] = useState(null)

  const dispatch = useDispatch()

  const { city } = useSelector(state => state.getCity)
  const { banners } = useSelector(state => state.bannersList)
  const { article } = useSelector(state => state.getArticle)

  useEffect(() => {
    if (city) dispatch(fetchBannersAction(city._id))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [city])

  useEffect(() => {
    if (banners) {
      if (current < 0) {
        setCurrent(banners.length - 1)
        setTranslate(x * banners.length)
      }
      if (current >= banners.length) {
        setCurrent(0)
        setTranslate(x)
      }

      document.querySelector(
        '.products__slider'
      ).style.transform = `translateX(${translate}px)`
    }

    if (!moveSlide && translate % x) setTranslate((current + 1) * x)
  }, [banners, current, moveSlide, translate, x])

  useEffect(() => {
    if (article?.addInfo?.pizzaId) {
      dispatch(clearGetArticle())
      dispatch(getPizzaAction(article.addInfo.pizzaId, city._id))
    } else if (article?.addInfo?.productId) {
      dispatch(clearGetArticle())
      dispatch(getProductAction(article.addInfo.productId))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [article])

  const onMouseMove = e => {
    if (!moveSlide) return

    const distance = startPoint - e.pageX
    setTranslate(startTranslate - distance)
    if (distance > 550) {
      setTranslate(startTranslate + x)
      setCurrent(current + 1)
      setMoveSlide(false)
    }
    if (distance < -550) {
      setTranslate(startTranslate - x)
      setCurrent(current - 1)
      setMoveSlide(false)
    }

    e.target.addEventListener('click', e => e.stopPropagation(), {
      once: true
    })
  }

  return banners?.length > 0 ? (
    <>
      <section
        className='products__slider-section'
        onMouseLeave={() => moveSlide && setMoveSlide(false)}
        onMouseDown={e => {
          setMoveSlide(true)
          setStartPoint(e.pageX)
          setStartTranslate(translate)
        }}
        onMouseMove={onMouseMove}
        onMouseUp={() => moveSlide && setMoveSlide(false)}
        onDragStart={e => e.preventDefault()}
      >
        <div className='products__slider-container'>
          <div className='products__slider'>
            <>
              <Banner banner={banners[banners.length - 1]} current={current} />
              {banners.map((banner, i) => (
                <Banner
                  banner={banner}
                  index={i}
                  current={current}
                  key={banner._id}
                />
              ))}
              <Banner banner={banners[0]} current={current} />
            </>
          </div>
          <div className='counter'>
            {banners.map((banner, i) => (
              <div
                className={`counter-inner${i === current ? ' current' : ''}`}
                onClick={() => {
                  setCurrent(i)
                  setTranslate((i + 1) * x)
                }}
                key={banner._id}
              />
            ))}
          </div>
          <i
            className='prev-next__show prev-show'
            onClick={() => {
              setTranslate(translate - x)
              setCurrent(current - 1)
            }}
          >
            <svg
              width='34'
              height='34'
              viewBox='0 0 34 34'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <circle cx='17' cy='17' r='17' fill='#373535'></circle>
              <path
                d='M14.759 9.8418L20.9409 16.9997L14.759 24.1576'
                stroke='white'
                strokeWidth='3'
                strokeLinecap='round'
                strokeLinejoin='round'
              ></path>
            </svg>
          </i>
          <i
            className='prev-next__show next-show'
            onClick={() => {
              setTranslate(translate + x)
              setCurrent(current + 1)
            }}
          >
            <svg
              width='34'
              height='34'
              viewBox='0 0 34 34'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <circle cx='17' cy='17' r='17' fill='#373535'></circle>
              <path
                d='M14.759 9.8418L20.9409 16.9997L14.759 24.1576'
                stroke='white'
                strokeWidth='3'
                strokeLinecap='round'
                strokeLinejoin='round'
              ></path>
            </svg>
          </i>
        </div>
      </section>
      {article && !article.addInfo && <ModalArticle article={article} />}
    </>
  ) : (
    <section className='products__slider-section'>
      <div className='products__slider-container'>
        <div className='products__slider'>
          <Banner />
        </div>
      </div>
    </section>
  )
}
export default Slider
