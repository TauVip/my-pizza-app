import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchBannersAction } from '../../../redux/actions/articlesAction'
import ModalArticle from '../../Modals/ModalArticle'
import Banner from './Banner'
import './styles.css'

const Slider = () => {
  const x = -1304

  const [prevIconShow, setPrevIconShow] = useState(false)
  const [nextIconShow, setNextIconShow] = useState(false)
  const [counterShow, setCounterShow] = useState(false)
  const [translate, setTranslate] = useState(x)
  const [current, setCurrent] = useState(0)
  const [showModal, setShowModal] = useState(false)
  const [articleId, setArticleId] = useState(null)
  const [moveSlide, setMoveSlide] = useState(false)
  const [startPoint, setStartPoint] = useState(null)
  const [startTranslate, setStartTranslate] = useState(null)

  const dispatch = useDispatch()

  const { city } = useSelector(state => state.getCity)
  const { banners } = useSelector(state => state.bannersList)

  useEffect(() => {
    if (city && !banners) dispatch(fetchBannersAction(city._id))

    if (banners) {
      if (current < 0) {
        setCurrent(banners.length - 1)
        setTranslate(x * banners.length)
      }
      if (current >= banners.length) {
        setCurrent(0)
        setTranslate(x)
      }
    }

    if (!moveSlide && translate % x) setTranslate((current + 1) * x)

    document.querySelector(
      '.products__slider'
    ).style.transform = `translateX(${translate}px)`
  }, [banners, city, current, dispatch, moveSlide, translate, x])

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

  return (
    <>
      <section
        className='products__slider-section'
        onMouseEnter={() => setCounterShow(true)}
        onMouseLeave={() => {
          setCounterShow(false)
          moveSlide && setMoveSlide(false)
        }}
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
            {banners && (
              <>
                <Banner
                  banner={banners[banners.length - 1]}
                  current={current}
                />
                {banners.map((banner, i) => (
                  <Banner
                    banner={banner}
                    i={i}
                    current={current}
                    setShowModal={setShowModal}
                    setArticleId={setArticleId}
                    key={banner._id}
                  />
                ))}
                <Banner banner={banners[0]} current={current} />
              </>
            )}
          </div>
          <div className='counter' show={`${counterShow}`}>
            {banners &&
              banners.map((banner, i) => (
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
            className='prev-next-show prev-show'
            show={`${prevIconShow}`}
            onMouseEnter={() => setPrevIconShow(true)}
            onMouseLeave={() => setPrevIconShow(false)}
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
            className='prev-next-show next-show'
            show={`${nextIconShow}`}
            onMouseEnter={() => setNextIconShow(true)}
            onMouseLeave={() => setNextIconShow(false)}
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
      {showModal && (
        <ModalArticle setShowModal={setShowModal} articleId={articleId} />
      )}
    </>
  )
}
export default Slider