import { useState } from 'react'
import './styles.css'

const Slider = () => {
  const [prevIconShow, setPrevIconShow] = useState(false)
  const [nextIconShow, setNextIconShow] = useState(false)
  const [counterShow, setCounterShow] = useState(false)

  return (
    <section
      className='products__slider-section'
      onMouseEnter={() => setCounterShow(true)}
      onMouseLeave={() => setCounterShow(false)}>
      <div className='products__slider-container'>
        <div className='products__slider'>
          <img
            src='https://dodopizza-a.akamaihd.net/static/Img/Banners/g_1619491747_77bec070d9bb471a973dcb290fc4e5d6.jpeg'
            alt=''
            className='products__slider-img'
          />
          <img
            src='https://dodopizza-a.akamaihd.net/static/Img/Banners/g_1620235560_f9836c6a17b6413790ad74029f7a22e9.jpeg'
            alt=''
            className='products__slider-img'
          />
          <img
            src='https://dodopizza-a.akamaihd.net/static/Img/Banners/g_1613131332_22f6d18955334497924da1a0995dd182.jpeg'
            alt=''
            className='products__slider-img current'
          />
          <img
            src='https://dodopizza-a.akamaihd.net/static/Img/Banners/g_1622506454_0bb3045c85394c2ebaa7fd433b94664e.jpeg'
            alt=''
            className='products__slider-img'
          />
          <img
            src='https://dodopizza-a.akamaihd.net/static/Img/Banners/g_1622735742_22f2580d5c5249afa5a965140a1497b0.jpeg'
            alt=''
            className='products__slider-img'
          />
          <img
            src='https://dodopizza-a.akamaihd.net/static/Img/Banners/g_1622511659_6060f1c5e1c745889c8eeee0631e163b.jpeg'
            alt=''
            className='products__slider-img'
          />
          <img
            src='https://dodopizza-a.akamaihd.net/static/Img/Banners/g_1612146307_89df1d4399b94538bd98251951717d83.jpeg'
            alt=''
            className='products__slider-img'
          />
          <img
            src='https://dodopizza-a.akamaihd.net/static/Img/Banners/g_1614325896_e69165b430cd4fa08eabac04fa1637d3.jpeg'
            alt=''
            className='products__slider-img'
          />
          <img
            src='https://dodopizza-a.akamaihd.net/static/Img/Banners/g_1614326032_a3b1a80fc7f548dc8dce86538809618a.jpeg'
            alt=''
            className='products__slider-img'
          />
          <img
            src='https://dodopizza-a.akamaihd.net/static/Img/Banners/g_1619491747_77bec070d9bb471a973dcb290fc4e5d6.jpeg'
            alt=''
            className='products__slider-img'
          />
          <img
            src='https://dodopizza-a.akamaihd.net/static/Img/Banners/g_1620235560_f9836c6a17b6413790ad74029f7a22e9.jpeg'
            alt=''
            className='products__slider-img'
          />
        </div>
        <div className='counter' show={`${counterShow}`}>
          <div className='counter-inner current' />
          <div className='counter-inner' />
          <div className='counter-inner' />
          <div className='counter-inner' />
          <div className='counter-inner' />
          <div className='counter-inner' />
          <div className='counter-inner' />
          <div className='counter-inner' />
          <div className='counter-inner' />
        </div>
        <i
          className='prev-next-show prev-show'
          show={`${prevIconShow}`}
          onMouseEnter={() => setPrevIconShow(true)}
          onMouseLeave={() => setPrevIconShow(false)}>
          <svg
            width='34'
            height='34'
            viewBox='0 0 34 34'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <circle cx='17' cy='17' r='17' fill='#373535'></circle>
            <path
              d='M14.759 9.8418L20.9409 16.9997L14.759 24.1576'
              stroke='white'
              strokeWidth='3'
              strokeLinecap='round'
              strokeLinejoin='round'></path>
          </svg>
        </i>
        <i
          className='prev-next-show next-show'
          show={`${nextIconShow}`}
          onMouseEnter={() => setNextIconShow(true)}
          onMouseLeave={() => setNextIconShow(false)}>
          <svg
            width='34'
            height='34'
            viewBox='0 0 34 34'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <circle cx='17' cy='17' r='17' fill='#373535'></circle>
            <path
              d='M14.759 9.8418L20.9409 16.9997L14.759 24.1576'
              stroke='white'
              strokeWidth='3'
              strokeLinecap='round'
              strokeLinejoin='round'></path>
          </svg>
        </i>
      </div>
    </section>
  )
}
export default Slider
